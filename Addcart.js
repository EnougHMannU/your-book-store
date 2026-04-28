import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./cssfiles/Addcart.css";

export default function Addcart() {

  const navigate = useNavigate();

  const [cart, setCart] = useState([]);
  const [step, setStep] = useState("cart");

  const [form, setForm] = useState({
    address: "",
    phone: "",
    pincode: "",
    countryCode: "+91"
  });

  const [payment, setPayment] = useState("");

  const [card, setCard] = useState({
    number: "",
    name: "",
    expiry: "",
    cvv: ""
  });

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(data);
  }, []);

  // 🔥 UPDATE CART
  const updateCart = (updated) => {
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  // 🔥 REMOVE
  const removeItem = (index) => {
    const updated = [...cart];
    updated.splice(index, 1);
    updateCart(updated);
  };

  // 🔥 QTY +
  const increaseQty = (index) => {
    const updated = [...cart];
    updated[index].qty += 1;
    updateCart(updated);
  };

  // 🔥 QTY -
  const decreaseQty = (index) => {
    const updated = [...cart];
    if (updated[index].qty > 1) {
      updated[index].qty -= 1;
      updateCart(updated);
    }
  };

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = totalItems * 100;

  // 🔥 CONFIRM ORDER
  const confirmOrder = () => {
    localStorage.removeItem("cart");
    setCart([]);
    window.dispatchEvent(new Event("cartUpdated"));
    setStep("confirm");
  };

  return (
    <div className="cart-page">

      <h1 className="cart-title">Your Cart 🛒</h1>

      {/* 🛒 CART */}
      {step === "cart" && (
        <>
          {cart.length === 0 ? (
            <p className="empty-cart">Your cart is empty</p>
          ) : (
            <>
              <div className="cart-container">
                {cart.map((item, i) => (
                  <div className="cart-item" key={i}>

                    <img src={item.img} alt={item.title} />

                    <div>
                      <h4>{item.title}</h4>

                      <div className="qty-box">
                        <button onClick={() => decreaseQty(i)}>-</button>
                        <span>{item.qty}</span>
                        <button onClick={() => increaseQty(i)}>+</button>
                      </div>
                    </div>

                    <button className="btn danger" onClick={() => removeItem(i)}>
                      Remove
                    </button>

                  </div>
                ))}
              </div>

              <div className="cart-summary">
                <h3>Total Items: {totalItems}</h3>
                <button className="btn primary" onClick={() => setStep("address")}>
                  Checkout
                </button>
              </div>
            </>
          )}
        </>
      )}

      {/* 📍 ADDRESS */}
      {step === "address" && (
        <div className="form-box premium">
          <h2>Delivery Details</h2>

          <input
            className="lux-input"
            placeholder="Full Address"
            onChange={(e) => setForm({ ...form, address: e.target.value })}
          />

          <div className="phone-box">
            <select
              className="country-code"
              value={form.countryCode}
              onChange={(e) => setForm({ ...form, countryCode: e.target.value })}
            >
              <option value="+91">🇮🇳 +91</option>
              <option value="+1">🇺🇸 +1</option>
              <option value="+44">🇬🇧 +44</option>
              <option value="+61">🇦🇺 +61</option>
            </select>

            <input
              className="lux-input phone-input"
              type="tel"
              placeholder="Phone Number"
              maxLength="10"
              value={form.phone}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "");
                if (value.length <= 10) {
                  setForm({ ...form, phone: value });
                }
              }}
            />
          </div>

          <input
            className="lux-input"
            placeholder="Pincode"
            onChange={(e) => setForm({ ...form, pincode: e.target.value })}
          />

          <button
            className="btn primary"
            onClick={() => {
              if (form.phone.length !== 10 || !form.address) {
                alert("Please fill valid address & phone");
                return;
              }
              setStep("payment");
            }}
          >
            Continue to Payment
          </button>
        </div>
      )}

      {/* 💳 PAYMENT */}
      {step === "payment" && (
        <div className="payment-container">

          <div className="payment-left">
            <h3>Payment Details</h3>

            <div className="payment-methods">
              <button className="pay-option" onClick={() => setPayment("gpay")}>GPay</button>
              <button className="pay-option" onClick={() => setPayment("paytm")}>Paytm</button>
              <button className="pay-option" onClick={() => setPayment("phonepe")}>PhonePe</button>
              <button className="pay-option" onClick={() => setPayment("upi")}>UPI</button>
              <button className="pay-option" onClick={() => setPayment("card")}>Card</button>
              <button className="pay-option" onClick={() => setPayment("cod")}>COD</button>
            </div>

            {payment === "card" && (
              <div className="card-form premium-card">

                <input
                  className="lux-input"
                  placeholder="Card Number"
                  maxLength="16"
                  value={card.number}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, "");
                    setCard({ ...card, number: val });
                  }}
                />

                <input
                  className="lux-input"
                  placeholder="Card Holder Name"
                  onChange={(e) => setCard({ ...card, name: e.target.value })}
                />

                <div className="card-row">
                  <input
                    className="lux-input"
                    placeholder="MM/YY"
                    value={card.expiry}
                    onChange={(e) => setCard({ ...card, expiry: e.target.value })}
                  />

                  <input
                    className="lux-input"
                    placeholder="CVV"
                    maxLength="3"
                    value={card.cvv}
                    onChange={(e) => {
                      const val = e.target.value.replace(/\D/g, "");
                      setCard({ ...card, cvv: val });
                    }}
                  />
                </div>
              </div>
            )}

            <button
              className="btn primary"
              onClick={() => {
                if (!payment) {
                  alert("Select payment method");
                  return;
                }

                if (payment === "card") {
                  if (
                    card.number.length !== 16 ||
                    card.cvv.length !== 3 ||
                    !card.expiry
                  ) {
                    alert("Enter valid card details");
                    return;
                  }
                }

                confirmOrder();
              }}
            >
              Pay ₹{totalPrice}
            </button>

          </div>

          <div className="payment-right">
            <h4>Order Summary</h4>
            <p>Total Items: {totalItems}</p>
            <p className="price">₹ {totalPrice}</p>
          </div>

        </div>
      )}

      {/* ✅ SUCCESS */}
      {step === "confirm" && (
        <div className="success-container">
          <div className="success-card">

            <div className="checkmark">✔</div>

            <h2>Order Successful</h2>
            <p>Your order has been placed successfully 🎉</p>

            <button
              className="btn primary"
              onClick={() => navigate("/books")}
            >
              Continue Shopping
            </button>

          </div>
        </div>
      )}

    </div>
  );
}