import express from 'express';
import Web3 from 'web3';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Initialize Web3 with provider (e.g., Infura)
const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:8545/'));

// Endpoint for validating MetaMask authentication
app.post('/api/authenticate', async (req, res) => {
  try {
    const { signature, address } = req.body;
    const message = 'Authenticate with MetaMask';

    // Perform signature verification
    const recoveredAddress = await web3.eth.personal.ecRecover(message, signature);

    if (recoveredAddress.toLowerCase() === address.toLowerCase()) {
      // Authentication successful
      res.status(200).json({ message: 'Authentication successful' });
    } else {
      // Authentication failed
      res.status(401).json({ error: 'Authentication failed. Signature does not match address.' });
    }
  } catch (error) {
    console.error('Error during authentication:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
