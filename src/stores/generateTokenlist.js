const axios = require('axios');
const STARATLASAPI_URL = 'https://galaxy.staratlas.com/nfts';
const TOKENLISTFILE = 'src/stores/local_tokenlist.json';
const mapped = [];
const fs = require('fs');
console.log('Creating token list...');

const load_data = async () => {
  const api_data = (await axios.get(STARATLASAPI_URL)).data;

  let token_list = {
    name: 'Escrow Token List',
    logoURI: '',
    keywords: ['solana', 'spl', 'sa'],
    tags: { 'lp-token': { name: 'lp-token', description: '' } },
    timestamp: '2024-03-11T12:12:55.610Z',
    tokens: [],
  };
  let tokens = [];

  //SA TOKENS
  api_data.forEach((asset) => {
    tokens.push({
      chainId: 0,
      name: asset.name,
      symbol: asset.symbol,
      address: asset.mint,
      decimals: 0,
      logoURI: 'tokens/webp/' + asset.mint + '.webp',
      tags: [],
      verified: true,
      holders: null,
      extensions: undefined,
    });
  });

  //SOLANA TOKENS
  let solfare_tokens = [];
  await axios
    .get(
      'https://cdn.jsdelivr.net/gh/solflare-wallet/token-list@latest/solana-tokenlist.json',
    )
    .then((response) => {
      const data = response.data;
      solfare_tokens = data.tokens;
    });

  const usdc = solfare_tokens.find(
    (token) => token.address == 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v',
  );
  tokens.push(usdc);

  token_list.tokens = tokens;
  //console.log(token_list);

  fs.writeFileSync(
    TOKENLISTFILE,
    JSON.stringify(token_list, null, 2),
    (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('File written!');
      }
    },
  );
};

load_data().then(() => {
  console.log('...done!');
});
