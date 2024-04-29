import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import Section from "../Section";
import Product from "./Product-detail";
import Dappazon from "../../abis/Dappazon.json";
import config from "../../config.json";
import Footer from "../Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import { auth } from "./Firebase";
import Home1 from "../Home1";
import { Link } from "react-router-dom";
import ProductDropdown from "../ProductDropdown";

function App() {
  const [provider, setProvider] = useState(null);
  const [dappazon, setDappazon] = useState(null);
  const [account, setAccount] = useState(null);
  const [electronics, setElectronics] = useState(null);
  const [clothing, setClothing] = useState(null);
  const [toys, setToys] = useState(null);
  const [books, setBooks] = useState(null);
  const [decor, setDecor] = useState(null);
  const [item, setItem] = useState({});
  const [toggle, setToggle] = useState(false);

  const togglePop = (item) => {
    setItem(item);
    toggle ? setToggle(false) : setToggle(true);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert("Subscribed successfully!");
    // Clear email input field
    e.target.elements.email.value = "";
  };
  const Home = ({ name }) => {
    return;
  };

  const loadBlockchainData = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    setProvider(provider);
    const network = await provider.getNetwork();
    const dappazon = new ethers.Contract(
      config[network.chainId].dappazon.address,
      Dappazon,
      provider
    );
    setDappazon(dappazon);
    const items = [];
    for (let i = 0; i < 10; i++) {
      const item = await dappazon.items(i + 1);
      items.push(item);
    }
    const electronics = items.filter((item) => item.category === "electronics");
    const clothing = items.filter((item) => item.category === "clothing");
    const toys = items.filter((item) => item.category === "toys");
    const books = items.filter((item) => item.category === "books");
    const decor = items.filter((item) => item.category === "decor");

    setElectronics(electronics);
    setClothing(clothing);
    setToys(toys);
    setBooks(books);
    setDecor(decor);
  };

  const [userAddress, setUserAddress] = useState(null);
  // const [account, setAccount] = useState(null);

  useEffect(() => {
    const storedAddress = localStorage.getItem("userAddress");
    if (storedAddress) {
      setUserAddress(storedAddress);
    }
  }, []);

  const connectToMetaMask = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const address = accounts[0];
      setUserAddress(address);
      localStorage.setItem("userAddress", address);
    } catch (error) {
      console.error("MetaMask authentication error:", error);
    }
  };

  const disconnect = () => {
    setUserAddress(null);
    localStorage.removeItem("userAddress");
  };


  useEffect(() => {
    loadBlockchainData();
  }, []);

  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);

  return (
    <>
      <div>
        <nav>
          <div className="nav__brand">
            <a href="/">
              <img
                src="images/Decentra-logo.png"
                alt="Empty Cart"
                style={{
                  width: "60px",
                  height: "60px",
                  verticalAlign: "middle",
                }}
              />
            </a>
          </div>

          <input type="text" className="nav__search" />

          <div style={{ display: "flex", alignItems: "center" }}>
            {userAddress ? (
              <>
                <span>
                  <Link to="/dashboard">
                    <img
                      src="images/profile-icon.png"
                      alt="Empty Cart"
                      style={{
                        width: "30px",
                        height: "30px",
                        verticalAlign: "middle",
                      }}
                    />
                  </Link>
                  <span className="white-text">
  Hello, {userAddress.slice(0, 6) + "..." + userAddress.slice(38, 42)}
</span>
                </span>
                <button className="nav__disconnect" onClick={disconnect}>
                  Disconnect
                </button>
              </>
            ) : (
              <button
                type="button"
                className="nav__connect"
                onClick={connectToMetaMask}
              >
                Connect
              </button>
            )}
          </div>

          <ul className="nav__links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <ProductDropdown />
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/blog">Blogs</Link>
            </li>
            <li>
              <Link to="/decentrapass">Decentra Pass</Link>
            </li>

            <li>
              <Link to="/login">Log In</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home1" element={<Home1 />} />
          <Route path="/" element={<Home name={userName} />} />
        </Routes>
        {/* <Navigation account={account} setAccount={setAccount} /> */}
        <h2>Decentra Best Sellers</h2>

        {electronics && clothing && toys && books && decor && (
          <>
            <Section
              title={"Clothing & Jewelry"}
              items={clothing}
              togglePop={togglePop}
            />
            <Section
              title={"Electronics & Gadgets"}
              items={electronics}
              togglePop={togglePop}
            />
            <Section
              title={"Toys & Gaming"}
              items={toys}
              togglePop={togglePop}
            />
            {/* <Section title={"Books"} items={books} togglePop={togglePop} />
            <Section title={"Home Decor"} items={decor} togglePop={togglePop} /> */}
          </>
        )}
        {toggle && (
          <Product
            item={item}
            provider={provider}
            account={account}
            dappazon={dappazon}
            togglePop={togglePop}
          />
        )}
      </div>
      <Footer />
    </>
  );
}

export default App;