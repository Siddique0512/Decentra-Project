import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import ProductDropdown from "./ProductDropdown";

const Navbar2 = ({ account, setAccount }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [userAddress, setUserAddress] = useState(null);
  const location = useLocation();

  // Function to handle successful login
  const handleLogin = (username) => {
    // Perform login logic, set isLoggedIn to true and set user name
    setIsLoggedIn(true);
    setUserName(username);
  };

  // Function to handle logout
  const handleLogout = () => {
    // Perform logout logic, set isLoggedIn to false and clear user name
    setIsLoggedIn(false);
    setUserName("");
  };

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

  return (
    <nav>
      <div className="nav__brand">
        <div className="nav__brand"></div>
        <a href="/">
          <img
            src="images/Decentra-logo.png"
            alt="Empty Cart"
            style={{ width: "65px", height: "70px", verticalAlign: "middle" }}
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
                Hello,{" "}
                {userAddress.slice(0, 6) + "..." + userAddress.slice(38, 42)}
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
          <Link to="/home1">Home</Link>
        </li>

        <li>
          <Link to="/product2">Product</Link>
        </li>

        <li>
          <Link to="/about2">About</Link>
        </li>

        <li>
          <Link to="/contact2">Contact</Link>
        </li>

        <li>
          <Link to="/blog2">Blogs</Link>
        </li>
        <li>
        <Link to="/decentrapass2">Decentra Pass</Link>
        </li>

        <li>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src="images/profile-icon(1).png"
              alt="User"
              style={{ width: "28px", height: "25px", marginRight: "5px" }}
            />
            <Link to="/" style={{ marginRight: "8px" }}>
              Log Out
            </Link>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar2;
