import React from "react";

function MoveiCard(props){
 
    console.log("this.props",props)
    const{title,plot,poster,price,rating,star,fav,isInCart}=props.movies;
    const {removestar,addstars,handlefav,hadleCart}=props;
  
    return (
      <div className="main ">
        <div className="movie-card">
         <div className="left" >
         <img alt="poster" src={poster}/>
         </div>
         <div className="right">
           <div className="title">{title}</div>
           <div className="plot">{plot}</div>
           <div className="price">{price}</div>
           <div className="footer">
             <div className="rating">{rating}</div>
             <div className="star-dis">

              <img className="str-btn"alt="stars" src="https://cdn-icons-png.flaticon.com/128/56/56889.png"/>

              <img className="stars"alt="decrease" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" onClick={()=>removestar(props.movies)}/>
              
              <img className="str-btn"alt="increse" src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png" onClick={()=>addstars(props.movies)}/>
              <span className="">{star}</span>
             </div>
             {/* {
                fav?
                <button className="favourite-btn" onClick={this.handlefav}>Favourate</button>:
                <button className="unfavourite-btn" onClick={this.handlefav} >Un-favourate</button>
             }
             */}

             {
                <button className={fav?"unfavourite-btn":"favourite-btn"} onClick={()=>handlefav(props.movies)}>{fav?"Un-favourate":"Favourate"}</button>
             }
           <button onClick={()=>hadleCart(props.movies)} className={isInCart ? "cart-btn2" : "cart-btn"}>
             {isInCart ? "Remove from cart" : "Add to cart"}
            </button>

           </div>
         </div>
        </div>
      </div>
      )
  }


  export default MoveiCard;
