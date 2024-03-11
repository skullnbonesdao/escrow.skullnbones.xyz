import { useGlobalStore } from 'stores/GlobalStore';
import { PublicKey } from '@solana/web3.js';
import { useStaratlasAPIStore } from 'stores/StaratlasAPIStore';

export async function amount2ui(mint: PublicKey, amount: number) {
  return amount * Math.pow(10, -(await getDecimals(mint)));
}

export async function ui2amount(mint: PublicKey, amount: number) {
  return amount * Math.pow(10, await getDecimals(mint));
}

export async function getDecimals(mint: PublicKey) {
  let decimals =
    useGlobalStore().token_list.find(
      (token) => token.address == mint.toString(),
    )?.decimals ?? 0;

  if (decimals == 0) {
    decimals = useStaratlasAPIStore().raw.find(
      (item) => item.mint == mint.toString(),
    )
      ? 0
      : (await useGlobalStore().connection.getParsedAccountInfo(mint)).value
          ?.data.parsed.info.decimals;
  }
  return decimals;
}
