import React from "react";
import Navbar2 from "../Navbar2";
import Footer from "../Footer";

const DecentraPass2 = () => {
  return (

      <><Navbar2 /><iframe
      src="https://embed.ipfscdn.io/ipfs/bafybeicd3qfzelz4su7ng6n523virdsgobrc5pcbarhwqv3dj3drh645pi/?contract=0x0477312Af5ccaDe2F40DB4791627E6Fd04D92E08&chain=%7B%22name%22%3A%22Localhost%22%2C%22chain%22%3A%22ETH%22%2C%22rpc%22%3A%5B%22http%3A%2F%2Flocalhost%3A8545%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22Ether%22%2C%22symbol%22%3A%22ETH%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22local%22%2C%22chainId%22%3A1337%2C%22testnet%22%3Atrue%2C%22slug%22%3A%22localhost%22%2C%22icon%22%3A%7B%22url%22%3A%22ipfs%3A%2F%2FQmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9%2Fethereum%2F512.png%22%2C%22width%22%3A512%2C%22height%22%3A512%2C%22format%22%3A%22png%22%7D%7D&clientId=7575589927c931c0b51ddef703311bba&theme=light&primaryColor=purple"
      width="600px"
      height="600px"
      style={{ maxWidth: '100%' }}
      frameborder="0"
  ></iframe><Footer /></>

  );
};

export default DecentraPass2;
