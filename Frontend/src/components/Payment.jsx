import React, { useState } from 'react';

const PaymentPage = ({ item }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [amount, setAmount] = useState('');

  const handlePayment = (e) => {
    e.preventDefault();
    console.log("Payment processed");

    // Redirect to the payment link after processing
    if (links) {
      window.location.href = links;
    } else {
      console.error("Payment link is missing.");
    }
  };

  const styles = {
    container: {
      maxWidth: '400px',
      margin: '50px auto',
      padding: '20px',
      borderRadius: '8px',
      backgroundColor: '#f5f5f5',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    },
    formGroup: {
      marginBottom: '15px',
    },
    label: {
      display: 'block',
      marginBottom: '5px',
      fontSize: '14px',
      color: '#333',
    },
    input: {
      width: '100%',
      padding: '10px',
      fontSize: '16px',
      borderRadius: '4px',
      border: '1px solid #ccc',
    },
    button: {
      width: '100%',
      padding: '12px',
      fontSize: '16px',
      backgroundColor: '#4CAF50',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    buttonHover: {
      backgroundColor: '#45a049',
    },
    heading: {
      textAlign: 'center',
      marginBottom: '20px',
      color: '#333',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Payment Page</h2>
      <form onSubmit={handlePayment}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Card Number</label>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            style={styles.input}
            required
            placeholder="0000 0000 0000 0000"
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Cardholder Name</label>
          <input
            type="text"
            value={cardHolderName}
            onChange={(e) => setCardHolderName(e.target.value)}
            style={styles.input}
            required
            placeholder="Name"
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Expiry Date</label>
          <input
            type="text"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            style={styles.input}
            required
            placeholder="MM/YY"
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>CVV</label>
          <input
            type="password"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            style={styles.input}
            required
            placeholder="cvv"
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            style={styles.input}
            required
            placeholder="Enter amount"
          />
        </div>
        <button
          type="submit"
          style={styles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
        >
          <a href='https://www.w3schools.com/'>Pay Now</a>
        </button>
      </form>
    </div>
  );
};

export default PaymentPage;
