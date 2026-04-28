import './cssfiles/Books.css';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import { useState } from 'react';

export default function Books() {

  const [show, setShow] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [qty, setQty] = useState(1);

  const books = [
    {
      title: "THE SHINNING",
      img: "https://m.media-amazon.com/images/I/71LWM5fjbRL._UF1000,1000_QL80_.jpg",
      desc: "A horror novel by Stephen King.",
      author: "Stephen King",
      pages: 447,
      price: 3999,
      category: "Horror",
      rating: "4.5 ⭐"
    },
    {
      title: "THE HUNGER GAMES",
      img: "https://cdn.waterstones.com/bookjackets/large/9781/4071/9781407132082.jpg",
      desc: "A dystopian survival story.",
      author: "Suzanne Collins",
      pages: 374,
      price: 3999,
      category: "Fiction",
      rating: "4.6 ⭐"
    },
    {
      title: "THE GREAT INDIAN NOVEL",
      img: "https://rukminim2.flixcart.com/image/480/640/kjd6nww0-0/book/o/5/w/the-great-indian-novel-original-imafyxyfkbfut4t6.jpeg?q=20",
      desc: "Satirical Indian history.",
      author: "Shashi Tharoor",
      pages: 500,
      price: 3999,
      category: "Historical",
      rating: "4.4 ⭐"
    },
    {
      title: "RAMAYANA",
      img: "https://m.media-amazon.com/images/I/91AlWwBjrTL.jpg",
      desc: "Ancient Indian epic.",
      author: "Valmiki",
      pages: 800,
      price: 3999,
      category: "Mythology",
      rating: "4.8 ⭐"
    },
    {
      title: "MAHABHARATA",
      img: "https://m.media-amazon.com/images/I/81gxiU-w93L.jpg",
      desc: "Great Indian epic.",
      author: "Vyasa",
      pages: 1000,
      price: 3999,
      category: "Mythology",
      rating: "4.9 ⭐"
    },
    {
      title: "A LITTLE LIFE",
      img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSSS5ZM9Uc2GXXN59BsKK4Cyawh1VRYKFtLluMzcYdiHktYpX9t",
      desc: "Emotional story of friendship.",
      author: "Hanya Yanagihara",
      pages: 720,
      price: 3999,
      category: "Drama",
      rating: "4.6 ⭐"
    },
    {
      title: "GAMES OF THRONE",
      img: "https://m.media-amazon.com/images/I/71Jzezm8CBL._AC_UF1000,1000_QL80_.jpg",
      desc: "Epic fantasy world.",
      author: "George R.R. Martin",
      pages: 694,
      price: 3999,
      category: "Fantasy",
      rating: "4.7 ⭐"
    },
    {
      title: "POWER OF SUBCONSCIOUS MIND",
      img: "https://m.media-amazon.com/images/I/81gTwYAhU7L._AC_UF1000,1000_QL80_.jpg",
      desc: "Self-help mindset book.",
      author: "Joseph Murphy",
      pages: 312,
      price: 3999,
      category: "Self-help",
      rating: "4.5 ⭐"
    },
    {
      title: "TO KILL A MOCKINGBIRD",
      img: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1612238791i/56916837.jpg",
      desc: "Classic novel on justice.",
      author: "Harper Lee",
      pages: 281,
      price: 3999,
      category: "Classic",
      rating: "4.8 ⭐"
    },
    {
      title: "PRIDE AND PREJUDICE",
      img: "https://m.media-amazon.com/images/I/81Scutrtj4L._UF1000,1000_QL80_.jpg",
      desc: "Romantic classic.",
      author: "Jane Austen",
      pages: 432,
      price: 3999,
      category: "Romance",
      rating: "4.7 ⭐"
    },
    {
      title: "THE KITE RUNNER",
      img: "https://m.media-amazon.com/images/I/81YXfTztoZL._AC_UF1000,1000_QL80_.jpg",
      desc: "Story of friendship & guilt.",
      author: "Khaled Hosseini",
      pages: 371,
      price: 3999,
      category: "Drama",
      rating: "4.8 ⭐"
    },
    {
      title: "THE BOOK THIEF",
      img: "https://cdn.penguin.co.in/wp-content/uploads/2023/06/9781909531611.jpg",
      desc: "WW2 era story.",
      author: "Markus Zusak",
      pages: 552,
      price: 3999,
      category: "Historical",
      rating: "4.7 ⭐"
    },
    {
      title: "THE SILENT PATIENT",
      img: "https://m.media-amazon.com/images/I/81y9uCHoxrL._UF1000,1000_QL80_.jpg",
      desc: "Psychological thriller.",
      author: "Alex Michaelides",
      pages: 336,
      price: 3999,
      category: "Thriller",
      rating: "4.5 ⭐"
    },
    {
      title: "48 LAWS",
      img: "https://m.media-amazon.com/images/I/61J3Uu4jOLL.jpg",
      desc: "Power strategies.",
      author: "Robert Greene",
      pages: 480,
      price: 3999,
      category: "Self-help",
      rating: "4.6 ⭐"
    },
    {
      title: "A BRIEF HISTORY OF TIME",
      img: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1333578746i/3869.jpg",
      desc: "Cosmology explained.",
      author: "Stephen Hawking",
      pages: 256,
      price: 3999,
      category: "Science",
      rating: "4.7 ⭐"
    },
    {
      title: "RICH DAD POOR DAD",
      img: "https://cdn.penguin.co.in/wp-content/uploads/2023/12/9781612681139-1-scaled.jpg",
      desc: "Financial education.",
      author: "Robert Kiyosaki",
      pages: 336,
      price: 3999,
      category: "Finance",
      rating: "4.7 ⭐"
    }
  ];

  const handleShow = (book) => {
    setSelectedBook(book);
    setShow(true);
    setQty(1);
  };

  const handleClose = () => setShow(false);

  const addToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const index = cart.findIndex(item => item.title === selectedBook.title);

    if (index !== -1) {
      cart[index].qty += qty;
    } else {
      cart.push({ ...selectedBook, qty });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("cartUpdated"));

    setShow(false);
  };

  return (
    <div className="books-page">

      <h1 className="books-title">Explore Our Collection</h1>

      <Container>
        <Row className="g-4">

          {books.map((book, index) => (
            <Col md={3} sm={6} key={index}>
              
              <div className="book-box">

                <div className="book-img">
                  <img src={book.img} alt={book.title} />
                </div>

                <div className="book-info">
                  <h5>{book.title}</h5>
                  <button onClick={() => handleShow(book)}>
                    View Book
                  </button>
                </div>

              </div>

            </Col>
          ))}

        </Row>
      </Container>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body className="modal-body-custom">

          {selectedBook && (
            <>
              <img src={selectedBook.img} alt="" className="modal-img" />

              <h3 className="modal-title">{selectedBook.title}</h3>
              <p className="modal-desc">{selectedBook.desc}</p>

              <div className="book-details">
                <p><b>Author:</b> {selectedBook.author}</p>
                <p><b>Pages:</b> {selectedBook.pages}</p>
                <p><b>Category:</b> {selectedBook.category}</p>
                <p><b>Rating:</b> {selectedBook.rating}</p>
                <p className="price">₹ {selectedBook.price}</p>
              </div>

              <select className="qty-select" value={qty} onChange={(e)=>setQty(Number(e.target.value))}>
                {[1,2,3,4,5].map(n=>(<option key={n}>{n}</option>))}
              </select>

              <div className="modal-actions">
                <Button className="add-btn" onClick={addToCart}>Add to Cart</Button>
                <Button className="close-btn" onClick={handleClose}>Close</Button>
              </div>
            </>
          )}

        </Modal.Body>
      </Modal>

    </div>
  );
}