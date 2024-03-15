import { defineStore } from 'pinia';
import { I_StarAtlasNFT, ItemType } from './interfaces/I_StarAtlasNFT';
import axios from 'axios';
import { useGlobalStore } from 'stores/GlobalStore';
import { useWallet } from 'solana-wallets-vue';
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';
import {
  AccountInfo,
  GetProgramAccountsResponse,
  ParsedAccountData,
  PublicKey,
} from '@solana/web3.js';
import { useStaratlasAPIStore } from 'stores/StaratlasAPIStore';
import { I_Token } from 'stores/interfaces/I_TokenList';
import { useWorkspace } from 'src/adapter/adapterPrograms';
import { WHITELIST_PROGRAM_ID, WHITELISTS } from 'stores/constants';

export const STARATLASAPI_URL = 'https://galaxy.staratlas.com/nfts';

export interface I_Account {
  pubkey: PublicKey;
  account: AccountInfo<ParsedAccountData>;
}

interface AccountMap {
  mint: string;
  name: string;
  symbol: string;
  amount: string;
  decimals: number;
  image: string;
}

export const useWalletStore = defineStore('WalletStore', {
  state: () => ({
    accounts: [] as I_Account[],
    accounts_mapped: [] as AccountMap[],
    whitelist_account: {} as PublicKey | undefined,
    entry_account: {} as any,
    is_whitelisted: true || false,
  }),

  getters: {},
  actions: {
    async prepare_whitelisted() {
      try {
        const whitelists =
          await useWorkspace()?.pg_whitelist.value.account.whitelist.all();

        this.whitelist_account = whitelists?.find(
          (w) => w.account.name == WHITELISTS[0],
        )?.publicKey;

        const [whitelistEntry, entryBump] = PublicKey.findProgramAddressSync(
          [
            useWallet().publicKey.value!.toBytes(),
            this.whitelist_account!.toBytes(),
          ],
          WHITELIST_PROGRAM_ID,
        );

        this.entry_account = whitelistEntry;

        const entry =
          await useWorkspace()?.pg_whitelist.value.account.whitelistEntry.fetch(
            whitelistEntry,
          );

        if (entry) this.is_whitelisted = true;
      } catch (err) {
        this.is_whitelisted = false;
      }
    },

    async load_token_accounts() {
      if (useWallet().publicKey.value) {
        this.accounts = (
          await useGlobalStore().connection.getParsedTokenAccountsByOwner(
            useWallet().publicKey.value!,
            {
              programId: TOKEN_PROGRAM_ID,
            },
          )
        ).value;

        const wallet_accounts_mapped = this.accounts.flatMap((account) => {
          return {
            mint: account.account.data.parsed.info.mint,
            symbol:
              useGlobalStore().token_list.find(
                (token: I_Token) =>
                  token.address == account.account.data.parsed.info.mint,
              )?.symbol ??
              useStaratlasAPIStore().raw.find(
                (item) => item.mint == account.account.data.parsed.info.mint,
              )?.symbol ??
              'unknown',
            name:
              useGlobalStore().token_list.find(
                (token: I_Token) =>
                  token.address == account.account.data.parsed.info.mint,
              )?.name ??
              useStaratlasAPIStore().raw.find(
                (item) => item.mint == account.account.data.parsed.info.mint,
              )?.name ??
              'unknown',
            image:
              useGlobalStore().token_list.find(
                (token: I_Token) =>
                  token.address == account.account.data.parsed.info.mint,
              )?.logoURI ??
              useStaratlasAPIStore().raw.find(
                (item) => item.mint == account.account.data.parsed.info.mint,
              )?.media.thumbnailUrl ??
              '',
            decimals: account.account.data.parsed.info.tokenAmount.decimals,
            amount: account.account.data.parsed.info.tokenAmount.amount,
          } as AccountMap;
        });

        const wallet_accounts_mapped2 = useGlobalStore().token_list.flatMap(
          (token) => {
            return {
              mint: token.address,
              symbol: token.symbol,
              name: token.name,
              image: token.logoURI,
              decimals: token.decimals,
              amount: this.accounts.find(
                (account) =>
                  account.account.data.parsed.info.mint.toString() ==
                  token.address,
              )?.account.data.parsed.info.tokenAmount.amount,
            } as AccountMap;
          },
        );

        // let remaining = useGlobalStore().token_list;
        // remaining = remaining.filter((token) =>
        //   wallet_accounts_mapped.some((acc) => {
        //     return acc.mint.toString() == token.address;
        //   }),
        // );

        // console.log(remaining);

        // const other_accounts_mapped = remaining.flatMap((token) => {
        //   return {
        //     mint: token.address,
        //     name: token.name,
        //     symbol: token.symbol,
        //     image: token.logoURI,
        //     decimals: token.decimals,
        //     amount: '0',
        //   } as AccountMap;
        // });
        this.accounts_mapped = [...wallet_accounts_mapped2];
      }
    },
  },
});
