import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CheckoutPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', address: '', email: '', card: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // TODO: plug real payment logic
    alert('Order placed! Thank you, ' + form.name);
    navigate('/');
  };

  return (
    <div className="page checkout-page">
      <h2>Checkout</h2>
      <form className="checkout-form" onSubmit={handleSubmit}>
        <label>
          Name<br />
          <input name="name" value={form.name} onChange={handleChange} required />
        </label>
        <label>
          Address<br />
          <input name="address" value={form.address} onChange={handleChange} required />
        </label>
        <label>
          Email<br />
          <input type="email" name="email" value={form.email} onChange={handleChange} required />
        </label>
        <label>
          Card Number<br />
          <input name="card" value={form.card} onChange={handleChange} placeholder="**** **** **** ****" required />
        </label>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
}
