import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { FiShoppingCart } from "react-icons/fi";
import './cssfiles/Cardm.css';

export default function Cardm() {

  const [show, setShow] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [qty, setQty] = useState(1);

  const books = [
    {title:"THE SHINNING",price:3999,pages:420,img:"https://m.media-amazon.com/images/I/71LWM5fjbRL._UF1000,1000_QL80_.jpg"},
    {title:"THE HUNGER GAMES",price:4299,pages:390,img:"https://cdn.waterstones.com/bookjackets/large/9781/4071/9781407132082.jpg"},
    {title:"THE GREAT INDIAN NOVEL",price:4599,pages:450,img:"https://rukminim2.flixcart.com/image/480/640/kjd6nww0-0/book/o/5/w/the-great-indian-novel-original-imafyxyfkbfut4t6.jpeg?q=20"},
    {title:"RAMAYANA",price:4999,pages:600,img:"https://m.media-amazon.com/images/I/91AlWwBjrTL.jpg"},
    {title:"MAHABHARATA",price:5499,pages:800,img:"https://m.media-amazon.com/images/I/81gxiU-w93L.jpg"},
    {title:"A LITTLE LIFE",price:3999,pages:350,img:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSSS5ZM9Uc2GXXN59BsKK4Cyawh1VRYKFtLluMzcYdiHktYpX9t"},
    {title:"GAMES OF THRONE",price:4799,pages:700,img:"https://m.media-amazon.com/images/I/71Jzezm8CBL._AC_UF1000,1000_QL80_.jpg"},
    {title:"POWER OF SUBCONSCIOUS MIND",price:3999,pages:300,img:"https://m.media-amazon.com/images/I/81gTwYAhU7L._AC_UF1000,1000_QL80_.jpg"},
    {title:"TO KILL A MOCKINGBIRD",price:4199,pages:350,img:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1612238791i/56916837.jpg"},
    {title:"PRIDE AND PREJUDICE",price:3999,pages:280,img:"https://m.media-amazon.com/images/I/81Scutrtj4L._UF1000,1000_QL80_.jpg"},
    {title:"THE KITE RUNNER",price:4399,pages:340,img:"https://m.media-amazon.com/images/I/81YXfTztoZL._AC_UF1000,1000_QL80_.jpg"},
    {title:"THE BOOK THIEF",price:4599,pages:520,img:"https://cdn.penguin.co.in/wp-content/uploads/2023/06/9781909531611.jpg"},
    {title:"THE SILENT PATIENT",price:3999,pages:320,img:"https://m.media-amazon.com/images/I/81y9uCHoxrL._UF1000,1000_QL80_.jpg"},
    {title:"48 LAWS",price:4799,pages:480,img:"https://m.media-amazon.com/images/I/61J3Uu4jOLL.jpg"},
    {title:"A BRIEF HISTORY OF TIME",price:4999,pages:260,img:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1333578746i/3869.jpg"},
    {title:"RICH DAD POOR DAD",price:3999,pages:300,img:"https://cdn.penguin.co.in/wp-content/uploads/2023/12/9781612681139-1-scaled.jpg"}
  ];

  const openModal = (book) => {
    setSelectedBook(book);
    setShow(true);
    setQty(1);
  };

  const addToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingIndex = cart.findIndex(item => item.title === selectedBook.title);

    if (existingIndex !== -1) {
      cart[existingIndex].qty += qty;
    } else {
      cart.push({...selectedBook, qty});
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("cartUpdated"));
    setShow(false);
  };

  return (
    <Container className="my-5">
      <Row className="g-4">

        {books.map((book, i) => (
          <Col md={3} key={i}>
            <Card className="book-card">

              <div className="img-box">
                <Card.Img src={book.img} />
              </div>

              <Card.Body>

                <h5>{book.title}</h5>

                <p className="price">₹ {book.price}</p>
                <p className="pages">{book.pages} pages</p>

                <Button className="cart-btn" onClick={() => openModal(book)}>
                  <FiShoppingCart size={18} />
                </Button>

              </Card.Body>

            </Card>
          </Col>
        ))}

      </Row>

      {/* MODAL */}
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Body className="rgb-modal">

          {selectedBook && (
            <>
              <img src={selectedBook.img} alt={selectedBook.title} />
              <h3>{selectedBook.title}</h3>

              <p>₹ {selectedBook.price}</p>
              <p>{selectedBook.pages} pages</p>

              <select value={qty} onChange={(e)=>setQty(Number(e.target.value))}>
                {[1,2,3,4,5].map(n=>(
                  <option key={n}>{n}</option>
                ))}
              </select>

              <Button className="rgb-btn" onClick={addToCart}>
                Confirm Add
              </Button>
            </>
          )}

        </Modal.Body>
      </Modal>

    </Container>
  );
}