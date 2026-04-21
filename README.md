# Google Pay with Braintree Sample

This sample demonstrates how to create an Origins Ecommerce transaction using Google Pay integrated with Braintree.

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Origins Ecommerce Credentials

Update `config.js` with the following information:

- `api_key`
- `merchant_fid`
- `order_api_url`

Contact your Origins Ecommerce admin to enable the Order API and obtain these credentials.

### 3. Configure Origins Ecommerce Console

- **Gateway Setup:** Add your Braintree merchant ID, merchant account ID, public key, and private key
- **Merchant Gateway Configuration:** Set Braintree as your merchant gateway and enable Google Pay (may require admin assistance)

### 4. Update index.html

Replace the following values:

- `authorization` - Your Braintree Tokenization Key
- `price`
- `sku`
- `affiliate_alias`
- `customer_ip`

### 5. Start the Server

```bash
node index.js
```

### 6. Open in Browser

Navigate to: http://localhost:5000

### 7. Make a Payment

Click the Google Pay button to complete a test transaction.

### 8. Verify Success

Upon successful payment, you'll see a confirmation message like:

```
paid successful. Order reference: FRED-U1202242206-22GSB
```
