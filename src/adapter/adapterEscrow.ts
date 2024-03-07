import { computed } from 'vue';
import { useAnchorWallet } from 'solana-wallets-vue';
import { Connection, PublicKey } from '@solana/web3.js';
import idl from './escrow_service.json';
import { useGlobalStore } from 'stores/GlobalStore';
import { AnchorProvider, Program, Idl } from '@coral-xyz/anchor';

const preflightCommitment = 'processed';
const commitment = 'confirmed';
export const programID = new PublicKey(
  'Bb5KCWjK8YuNb5uhvVfPizDfXFX1JTqWbxQZJPUqMJeo',
);

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
  const program = computed(
    () => new Program(idl as Idl, programID, provider.value),
  );

  console.info('Workspace adapter initialized!');

  workspace = {
    wallet,
    connection,
    provider,
    program,
  };
};
