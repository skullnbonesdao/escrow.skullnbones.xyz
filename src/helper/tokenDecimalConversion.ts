import { useGlobalStore } from 'stores/GlobalStore';
import { PublicKey } from '@solana/web3.js';
import { useStaratlasAPIStore } from 'stores/StaratlasAPIStore';

export function amount2ui(mint: PublicKey, amount: number) {
  const decimals =
    useGlobalStore().token_list.find(
      (token) => token.address == mint.toString(),
    )?.decimals ?? 0;

  return amount * Math.pow(10, -decimals);
}

export function ui2amount(mint: PublicKey, amount: number) {
  const decimals =
    useGlobalStore().token_list.find(
      (token) => token.address == mint.toString(),
    )?.decimals ?? 0;

  return amount * Math.pow(10, decimals);
}
