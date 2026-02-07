
import React, { useEffect, useState, useRef } from "react";
import Rating from "./Rating";
import Price from "./Price";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


const Book = ({ book }) => {
  const [img, setImg] = useState();

  const mountedRef = useRef(true);

useEffect(() => {
  const image = new Image();
  image.src = book.url;
  image.onLoad = () =>{
    if(mountedRef.current){return (image)};
}
  return () => {
    //when the component unmounts
    mountedRef.current =  false;}
  
  }  )


  return (
  <div className="book">
{
img ?
<>
<Link to={`/books/${book.id}`}>
        <figure className="book__img--wrapper">
          <img src={img.src} alt="" className="book__img"   />
        </figure>
      </Link>
      <div className="book__title">
        <Link to={`/books/${book.id}`} className="book__title--link">
          {book.title}
        </Link>
      </div>
     <Rating rating={book.rating}/>
    <Price price={book.price} />

</> 
: (
  <>
   <div className="book__img--skeleton"></div>
    <div className="skeleton book__title--skeleton"></div>
    <div className="skeleton book__rating--skeleton"></div>
    <div className="skeleton book__price--skeleton"></div>
     </>
)}
   
 </div>
)
};

export default Book;
