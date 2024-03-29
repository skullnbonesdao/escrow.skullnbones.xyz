import { useGlobalStore } from 'stores/GlobalStore';
import { table } from 'table';

export function make_discord_message() {
  const header =
    '# [' +
    (useGlobalStore().token_list.find(
      (token) =>
        token.address ==
        useGlobalStore().escrow_selected?.account.depositToken.toString(),
    )?.symbol ?? '???') +
    ' -> ' +
    (useGlobalStore().token_list.find(
      (token) =>
        token.address ==
        useGlobalStore().escrow_selected?.account.requestToken.toString(),
    )?.symbol ?? '???') +
    '](' +
    'https://escrow.skullnbones.xyz/#/view/' +
    useGlobalStore().escrow_selected?.publicKey.toString() +
    ') :link:';

  const table_data = [
    ['Side', 'ASSET', 'Price per Unit', 'Total'],
    [
      'Takes',
      useGlobalStore().token_list.find(
        (token) =>
          token.address ==
          useGlobalStore().escrow_selected?.account.depositToken.toString(),
      )?.symbol ?? '???',
      useGlobalStore().escrow_selected?.account.price.toString(),
      useGlobalStore().escrow_selected?.account.tokensDepositInit.toNumber(),
    ],
    [
      'Gives',
      useGlobalStore().token_list.find(
        (token) =>
          token.address ==
          useGlobalStore().escrow_selected?.account.requestToken.toString(),
      )?.symbol ?? '???',
      ((useGlobalStore().escrow_selected?.account.tokensDepositInit.toNumber() ??
        0) /
        (useGlobalStore().escrow_selected?.account.price ?? 0)) *
        (useGlobalStore().escrow_selected?.account.tokensDepositInit.toNumber() ??
          0),
      (useGlobalStore().escrow_selected?.account.price ?? 0) *
        (useGlobalStore().escrow_selected?.account.tokensDepositInit.toNumber() ??
          0),
    ],
  ];

  return header + '\n' + '```\n' + table(table_data) + '```';
}
