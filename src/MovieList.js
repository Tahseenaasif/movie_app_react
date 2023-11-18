import React from "react";
import MovieCard from "./Moviecard.js";
export default class MovieList extends React.Component {

  render() {
    const {movies,addstars,removestar,handlefav,hadleCart}=this.props;
      
     return(
     <>
     {
      movies.map((movie,i)=>
      <MovieCard key={i} movies={movie} 
                 addstars={addstars}
                 removestar={removestar}
                 handlefav={handlefav}
                 hadleCart={hadleCart}
      
      />
     )
     
       }
     </>
     );
      
  }
}
