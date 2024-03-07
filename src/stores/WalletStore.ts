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

export const STARATLASAPI_URL = 'https://galaxy.staratlas.com/nfts';

interface Account {
  pubkey: PublicKey;
  account: AccountInfo<ParsedAccountData>;
}

interface AccountMap {
  mint: PublicKey;
  symbol: string;
  amount: string;
  decimals: number;
  image: string;
}

export const useWalletStore = defineStore('WalletStore', {
  state: () => ({
    accounts: [] as Account[],
    accounts_mapped: [] as AccountMap[],
  }),

  getters: {},
  actions: {
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

        this.accounts_mapped = this.accounts.flatMap((account) => {
          return {
            mint: new PublicKey(account.account.data.parsed.info.mint),
            symbol:
              useGlobalStore().token_list.find(
                (token) =>
                  token.address == account.account.data.parsed.info.mint,
              )?.name ??
              useStaratlasAPIStore().raw.find(
                (item) => item.mint == account.account.data.parsed.info.mint,
              )?.symbol ??
              'unknown',
            image:
              useGlobalStore().token_list.find(
                (token) =>
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
      }
    },
  },
});
