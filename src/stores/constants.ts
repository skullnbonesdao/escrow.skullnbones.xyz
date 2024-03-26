import { PublicKey } from '@solana/web3.js';

export const ACCOUNT_COST_ESCROW = 0.0044;

export const WHITELISTS = ['trader'];

export const NULL_ADDRESS = new PublicKey('11111111111111111111111111111111');
export const FEE_ACCOUNT = new PublicKey(
  '9Q4ug2XNHsWXjS9MDRdsxwi7gmUmGCL3UqHSVmg6dt66',
);
export const ESCROW_PROGRAM_ID: PublicKey = new PublicKey(
  'AfaC4LBuPC3NjWqsmhNwxov7dAeE9ymj7YXCwDwCAjPP',
);

export const WHITELIST_PROGRAM_ID: PublicKey = new PublicKey(
  'whi5uDPWK4rAE9Sus6hdxdHwsG1hjDBn6kXM6pyqwTn',
);
