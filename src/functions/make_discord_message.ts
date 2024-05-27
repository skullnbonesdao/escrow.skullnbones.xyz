import { useGlobalStore } from 'stores/GlobalStore';
import { table } from 'table';

export function make_discord_message() {
  const header =
    '# [' +
    (useGlobalStore().token_list.find(
      (token) =>
        token.address ==
        useGlobalStore().escrow_selected?.account.requestToken.toString(),
    )?.symbol ?? '???') +
    ' -> ' +
    (useGlobalStore().token_list.find(
      (token) =>
        token.address ==
        useGlobalStore().escrow_selected?.account.depositToken.toString(),
    )?.symbol ?? '???') +
    '](' +
    'https://escrow1.skullnbones.xyz/#/view/' +
    useGlobalStore().escrow_selected?.publicKey.toString() +
    ') :link:';

  const table_data = [
    ['Side', 'ASSET', 'Total', 'Price per Unit'],

    [
      'Takes',
      useGlobalStore().token_list.find(
        (token) =>
          token.address ==
          useGlobalStore().escrow_selected?.account.requestToken.toString(),
      )?.symbol ?? '???',

      ((useGlobalStore().escrow_selected?.account.price ?? 0) *
        (useGlobalStore().escrow_selected?.account.tokensDepositInit.toNumber() ??
          0)) /
        10 **
          (useGlobalStore().token_list.find(
            (t) =>
              t.address.toString() ==
              useGlobalStore().escrow_selected?.account.depositToken.toString(),
          )?.decimals ?? 0),

      '[' +
        (useGlobalStore().token_list.find(
          (token) =>
            token.address ==
            useGlobalStore().escrow_selected?.account.requestToken.toString(),
        )?.symbol ?? '???') +
        '/' +
        (useGlobalStore().token_list.find(
          (token) =>
            token.address ==
            useGlobalStore().escrow_selected?.account.depositToken.toString(),
        )?.symbol ?? '???') +
        '] ' +
        useGlobalStore().escrow_selected?.account.price.toFixed(5),
    ],
    [
      'Gives',
      useGlobalStore().token_list.find(
        (token) =>
          token.address ==
          useGlobalStore().escrow_selected?.account.depositToken.toString(),
      )?.symbol ?? '???',

      (useGlobalStore().escrow_selected?.account.tokensDepositInit.toNumber() ??
        0) /
        10 **
          (useGlobalStore().token_list.find(
            (t) =>
              t.address.toString() ==
              useGlobalStore().escrow_selected?.account.depositToken.toString(),
          )?.decimals ?? 0),

      '[' +
        (useGlobalStore().token_list.find(
          (token) =>
            token.address ==
            useGlobalStore().escrow_selected?.account.depositToken.toString(),
        )?.symbol ?? '???') +
        '/' +
        (useGlobalStore().token_list.find(
          (token) =>
            token.address ==
            useGlobalStore().escrow_selected?.account.requestToken.toString(),
        )?.symbol ?? '???') +
        '] ' +
        (1 / (useGlobalStore().escrow_selected?.account.price ?? 0)).toFixed(5),
    ],
  ];

  return header + '\n' + '```\n' + table(table_data) + '```';
}
