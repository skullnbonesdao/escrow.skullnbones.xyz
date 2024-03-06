import { computed } from 'vue';
import { AnchorWallet, useAnchorWallet, useWallet } from 'solana-wallets-vue';
import { Connection, clusterApiUrl, PublicKey } from '@solana/web3.js';
import { AnchorProvider, Program } from '@project-serum/anchor';
import idl from './escrow_service.json';

const preflightCommitment = 'processed';
const commitment = 'confirmed';
const programID = new PublicKey('Bb5KCWjK8YuNb5uhvVfPizDfXFX1JTqWbxQZJPUqMJeo');

const workspace = null;
export const useWorkspace = () => workspace;

export const initWorkspace = () => {
  const wallet = useAnchorWallet();
  const connection = new Connection(clusterApiUrl('devnet'), commitment);
  const provider = computed(
    () =>
      new AnchorProvider(connection, wallet.value as AnchorWallet, {
        preflightCommitment,
        commitment,
      }),
  );
  const program = computed(() => new Program(idl, programID, provider.value));

  workspace = {
    wallet,
    connection,
    provider,
    program,
  };
};
