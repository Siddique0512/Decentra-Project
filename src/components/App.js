// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Product from "./pages/Product";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";

const App = () => {
  const [userAddress, setUserAddress] = useState(null);
  const connectToMetaMask = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const address = accounts[0]; // User's Ethereum address
      setUserAddress(address);
    } catch (error) {
      console.error("MetaMask authentication error:", error);
    }
  };

  return (
    <><Router>
      <Navbar userAddress={userAddress} connectToMetaMask={connectToMetaMask} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/product" component={Product} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/blog" component={Blog} />
      </Switch>
    </Router></>
  );
};

export default App;