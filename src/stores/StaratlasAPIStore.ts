import { defineStore } from 'pinia';
import { I_StarAtlasNFT, ItemType } from './interfaces/I_StarAtlasNFT';
import axios from 'axios';

export const STARATLASAPI_URL = 'https://galaxy.staratlas.com/nfts';

export const useStaratlasAPIStore = defineStore('StarAtlasAPIStore', {
  state: () => ({
    raw: [] as I_StarAtlasNFT[],
  }),

  getters: {
    get_itemTypes(state): ItemType[] {
      return [...new Set(state.raw.map((d) => d.attributes.itemType))];
    },
  },
  actions: {
    async update() {
      const data = (await axios.get(STARATLASAPI_URL)).data as I_StarAtlasNFT[];
      this.raw = data;
    },
  },
});
