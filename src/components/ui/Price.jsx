import React from "react-router-dom";


const Price = ({ salePrice, originalPrice }) => {
    return(
          <div className="book__price">
        {salePrice ? (
          <>
            <span className="book__price--normal">${originalPrice}</span>$
            {salePrice}
          </>)
         : (
         <>${originalPrice}</>
        )}
      </div>
    )
}

export default Price;

/* add .toFixed(2)  to the salePrice and originalPrice*/