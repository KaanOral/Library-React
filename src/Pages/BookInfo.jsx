import React from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from "../components/ui/Rating";
import Price from "../components/ui/Price";
import Book from "../components/ui/Book";



const BookInfo = ({ books, addToCart }) => {
 const { id } = useParams();
 const book = books.find(book => +book.id === +id);
 console.log(book)
  return (
    <div className="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to="/books" className="book__link">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to="/books" className="book__link" >
                <h2 className="book__selected--title--top">Books</h2>
              </Link>
            </div>
            <div className="books__selected">
                <figure className="book__selected--figure">
                    <img src={book.url} alt="Book Cover" className="book__selected--img" />
                </figure>
                <div className="book__selected--description">
                    <h2 className="book__selected--title">{book.title}</h2>
               <Rating rating={book.rating} />
              <Price salePrice={book.salePrice} originalPrice={book.originalPrice} />
                </div>
                <div className="book__summary">
                <h3 className="book__summary--title">Summary</h3>
            </div>
            <p className="book__summary--para"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci deserunt praesentium mollitia voluptates repellat sint ex nam alias corporis. Earum perspiciatis quis repellat alias dolorem omnis accusantium ipsam blanditiis obcaecati!</p>
            <p className="book__summary--para"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci deserunt praesentium mollitia voluptates repellat sint ex nam alias corporis. Earum perspiciatis quis repellat alias dolorem omnis accusantium ipsam blanditiis obcaecati!</p>
            </div>
            <button className="btn" onClick={() => addToCart(book) }>
                Add to cart
            </button>
          </div>
        </div>

        <div className="books__container">
            <div className="row">
                <div className="book__selected--top">
                    <h2 className="book__selected--title--top">Recomended Books</h2>
                </div>
                <div className="books">
                {
                  books.filter(book => book.rating === 5 && +book.id !== +id)
                  .slice(0,4)
                  .map(book => <Book book={book} key={book.id} />)
                  } 
                </div>
            </div>
        </div>
      </main>
    </div>
  );
};

export default BookInfo;
