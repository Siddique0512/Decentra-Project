import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import Rating from "../Rating";
import close from "../assets/close.svg";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product = ({ item, provider, account, dappazon, togglePop }) => {
  const [order, setOrder] = useState(null);
  const [hasBought, setHasBought] = useState(false);
  // const [sorted, setSorted] = useState(null);
  const notnow = (e) => {
    e.preventDefault();
    toast.info('Login To Buy', {
      autoClose: 2000, // Close after 2 seconds
    });
    // Clear email input field
    e.target.elements.email.value = '';
  };
  const fetchDetails = async () => {
    const events = await dappazon.queryFilter("Buy");
    const orders = events.filter(
        (event) => event.args.buyer === account && event.args.itemId.toString() === item.id.toString()
    );

    if (orders.length === 0) return

    const order = await dappazon.orders(account, orders[0].args.orderId)
    setOrder(order)

    
  };

  const buyHandler = async () => {
    const signer = await provider.getSigner();

    // Buy item...
    let transaction = await dappazon.connect(signer).buy(item.id, { value: item.cost });
    await transaction.wait();

    setHasBought(true);
  };
  fetch(
    "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd"
  )
    .then((response) => response.json())
    .then((data) => {
      const ethToUsdRate = data.ethereum.usd;
      const ethValue = ethers.utils.formatUnits(item.cost.toString(), "ether");
      const usdValue = (ethValue * ethToUsdRate).toFixed(2);

      // Display the value in USD
      const usdElement = document.getElementById("usd-value");
      usdElement.textContent = `($${usdValue})`;
    })
    .catch((error) => console.error("Error fetching exchange rate:", error));

  useEffect(() => {
    fetchDetails();
  }, [hasBought]);

  return (
    <div className="product">
      <div className="product__details">
        <div className="product__image">
          <img src={item.image} alt="Product" />
        </div>
        <div className="product__overview">
          <h1>{item.name}</h1>

          <Rating value={item.rating} />

          <hr />

          <p>{item.address}</p>

          <h2>
            <span>
              {ethers.utils.formatUnits(item.cost.toString(), "ether")} ETH
            </span>{" "}
            &nbsp;<span id="usd-value"></span>
          </h2>
          <hr />

          <h2>Overview</h2>

          <p>
            {item.description}
            Decentra prioritizes efficient shipping processes,
            guaranteeing timely delivery to customers worldwide.
          </p>
        </div>

        <div className="product__order">
          <h1>{ethers.utils.formatUnits(item.cost.toString(), "ether")} ETH</h1>

          <p>
            FREE delivery <br />
            <strong>
              {new Date(Date.now() + 345600000).toLocaleDateString(undefined, {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </strong>
          </p>

          {item.stock > 0 ? <p>In Stock.</p> : <p>Out of Stock.</p>}

          {/* <button className="product__buy" onClick={buyHandler}> */}
          <button className="product__buy" onClick={notnow}>
            Buy Now
          </button>
          <ToastContainer />
          <p>
            <small>Ships from</small> Decentra
          </p>
          <p>
            <small>Sold by</small> Decentra
          </p>

          {order && (
            <div className="product__bought">
              Item bought on <br />
              <strong>
                {new Date(Number(order.time.toString() + "000")).toLocaleDateString(undefined, 
                {
                  weekday: "long",
                  hour: "numeric",
                  minute: "numeric",
                  second: "numeric",
                })}
              </strong>
            </div>
          )}
        </div>

        <button onClick={togglePop} className="product__close">
          <img src={close} alt="Close" />
        </button>
      </div>
    </div>
  );
};

export default Product;
