import { defineStore } from 'pinia';
import { Connection, PublicKey } from '@solana/web3.js';
import { useLocalStorage } from '@vueuse/core';
import { I_Token, I_TokenList } from './interfaces/I_TokenList';
import axios from 'axios';
import * as token_list_local from './tokenlist.json';
export const RPC_NETWORKS = [
  {
    name: 'devent',
    url: import.meta.env.VITE_RPC_1,
  },
  {
    name: 'alchemy2',
    url: import.meta.env.VITE_RPC_2,
  },
  {
    name: 'alchemy3',
    url: import.meta.env.VITE_RPC_3,
  },
];

export const useGlobalStore = defineStore('GlobalStore', {
  state: () => ({
    is_initialized: false,
    rpc_selected: useLocalStorage('rpc_selected', RPC_NETWORKS[0]),
    token_list: [] as I_Token[],
    connection: {} as Connection,
  }),
  getters: {},
  actions: {
    update_connection() {
      console.log('RPC is set to: ' + this.rpc_selected.url);
      this.connection = new Connection(this.rpc_selected.url, {
        commitment: 'confirmed',
      });
    },
    async load_token_list() {
      this.token_list = token_list_local.tokens;
      // axios
      //   .get(
      //     'https://cdn.jsdelivr.net/gh/solflare-wallet/token-list@latest/solana-tokenlist.json',
      //   )
      //   .then((response) => {
      //     const data: I_TokenList = response.data;
      //     this.token_list = data.tokens;
      //   });
    },
  },
});
