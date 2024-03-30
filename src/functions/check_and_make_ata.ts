import {
  Connection,
  PublicKey,
  SystemProgram,
  Transaction,
} from '@solana/web3.js';
import {
  ASSOCIATED_TOKEN_PROGRAM_ID,
  createAssociatedTokenAccount,
  createAssociatedTokenAccountInstruction,
  getAssociatedTokenAddress,
  TOKEN_PROGRAM_ID,
} from '@solana/spl-token';
import { useGlobalStore } from 'stores/GlobalStore';
import { useWallet } from 'solana-wallets-vue';
import { waitForTransactionConfirmation } from 'src/helper/waitForTransactionConfirmation';

export async function check_and_make_ata(
  mintAddress: PublicKey,
  owner: PublicKey,
) {
  const associatedAddress = await getAssociatedTokenAddress(
    mintAddress,
    owner,
    false, // Do not need the fee payer here, just calculating the address
    TOKEN_PROGRAM_ID,
    ASSOCIATED_TOKEN_PROGRAM_ID, // The associated token program ID
  );

  const accountInfo =
    await useGlobalStore().connection.getAccountInfo(associatedAddress);
  if (accountInfo === null) {
    console.log(
      'Associated token account does NOT exist:',
      associatedAddress.toString(),
    );
    return false;
  } else {
    console.log(
      'Associated token account exists:',
      associatedAddress.toString(),
    );
    return true;
  }
}

export async function make_ata(ata: PublicKey, mint: PublicKey) {
  const transaction = new Transaction().add(
    createAssociatedTokenAccountInstruction(
      useWallet().publicKey.value!,
      ata,
      useWallet().publicKey.value!,
      mint,
    ),
  );

  const signature = await useWallet()!.sendTransaction(
    transaction,
    useGlobalStore().connection as Connection,
  );

  console.log(signature);
  await waitForTransactionConfirmation(
    useGlobalStore().connection as Connection,
    signature,
  );
}
