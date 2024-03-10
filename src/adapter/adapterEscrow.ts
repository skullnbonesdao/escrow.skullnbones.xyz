import { computed } from 'vue';
import { useAnchorWallet } from 'solana-wallets-vue';
import { Connection, PublicKey } from '@solana/web3.js';
import idl from './escrow_service.json';
import { useGlobalStore } from 'stores/GlobalStore';
import { AnchorProvider, Program, Idl } from '@coral-xyz/anchor';
import { ESCROW_PROGRAM_ID } from 'stores/constants';
import { Escrow } from 'src/adapter/escrow_gen/accounts';

const preflightCommitment = 'processed';
const commitment = 'confirmed';

export interface EscrowAccounts {
  publicKey: PublicKey;
  account: Escrow;
}

let workspace: any = null;
export const useWorkspace = () => workspace;

export const initWorkspace = () => {
  const wallet = useAnchorWallet().value;

  const connection = useGlobalStore().connection as Connection;
  const provider = computed(
    () =>
      new AnchorProvider(connection, wallet!, {
        preflightCommitment,
        commitment,
      }),
  );
  const pg_escrow = computed(
    () => new Program(idl as Idl, ESCROW_PROGRAM_ID, provider.value),
  );

  console.info('Workspace adapter initialized!');

  workspace = {
    wallet,
    connection,
    provider,
    pg_escrow,
  };
};
