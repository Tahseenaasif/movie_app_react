import MovieList from "./MovieList.js"
// import Student from "./Student.js";
import Navbar from "./Navbar.js"
import './styles.css'; 
import "./new.css"
import React from "react";
import {movies} from "./moviesData.js"
// import HeadingOne from "./headingone.js";
// import HeadingTwo from "./headingtwo.js";
class App extends React.Component{
  constructor(){
    super();
    this.state={
      movies :movies,
      cartItemCount: 0
    };
    
}
 
handleIncStar=(movie)=>{
  // console.log("this is movie in handleInStar",movie)
  const {movies}=this.state;
   const mid=this.state.movies.indexOf(movie)
   if(movies[mid].star>=5){
    return;
}
   movies[mid].star+=0.5;
 
  this.setState({
    movies:movies
  })
  // this.state.stars+=0.5;
 // console.log("this is  this.state.stars", this.state.stars);

}

handleDecStar=(movie)=>{
  // console.log("this is movie in handleDecStar",movie);
   const {movies}=this.state;
   const mid=this.state.movies.indexOf(movie);

   if(movies[mid].star<=0){
    return;
 }
  
  movies[mid].star-=0.5;
  this.setState({
    movies:movies
 })

}

handleFav=(movie)=>{
  const {movies}=this.state;
   const mid=this.state.movies.indexOf(movie);
   movies[mid].fav=!movies[mid].fav
  this.setState({
    movies:movies
 })
}

hadleCart=(movie)=>{
  const {movies}=this.state;
  const mid=this.state.movies.indexOf(movie);
  movies[mid].isInCart=!movies[mid].isInCart

  if( movies[mid].isInCart){
    this.state.cartItemCount+=1;
   }else{
    this.state.cartItemCount-=1;
   }
 this.setState({
   movies:movies
})

}

render() {
  const {movies}=this.state;
  console.log("this.state.cartItemCount",this.state.cartItemCount)
   return(
    <>
      <Navbar cartitemcount={this.state.cartItemCount}/>
      <MovieList movies={movies}
                addstars={this.handleIncStar}
                removestar={this.handleDecStar}
                handlefav={this.handleFav}
                hadleCart={this.hadleCart}
      />
    </>
   )
}

}

// Student.defaultProps={
//   stuname:"Student",
//   marks:"N/A"
// }


export default App;
