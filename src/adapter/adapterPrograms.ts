import { computed, ComputedRef } from 'vue';
import { AnchorWallet, useAnchorWallet } from 'solana-wallets-vue';
import { Connection, PublicKey } from '@solana/web3.js';
import * as idl_escrow from './escrow_service.json';
import * as idl_whitelist from './whitelist.json';
import { useGlobalStore } from 'stores/GlobalStore';
import { AnchorProvider, Program, Idl } from '@coral-xyz/anchor';
import { ESCROW_PROGRAM_ID, WHITELIST_PROGRAM_ID } from 'stores/constants';
import { Escrow } from 'src/adapter/escrow_gen/accounts';

import { EscrowService, IDL as IDLESCROW } from './escrow_service';

import { Whitelist, IDL as IDLWHITELIST } from './whitelist';

const preflightCommitment = 'processed';
const commitment = 'confirmed';

export interface EscrowAccounts {
  publicKey: PublicKey;
  account: Escrow;
}

let workspace: {
  wallet: AnchorWallet | undefined;
  connection: Connection;
  provider: any;
  pg_escrow: ComputedRef<Program<EscrowService>>;
  pg_whitelist: ComputedRef<Program<Whitelist>>;
} | null = null;
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
    () =>
      new Program<EscrowService>(IDLESCROW, ESCROW_PROGRAM_ID, provider.value),
  );

  const pg_whitelist = computed(
    () =>
      new Program<Whitelist>(
        IDLWHITELIST,
        WHITELIST_PROGRAM_ID,
        provider.value,
      ),
  );

  console.info('Workspace adapter initialized!');

  workspace = {
    wallet,
    connection,
    provider,
    pg_escrow,
    pg_whitelist,
  };
};
