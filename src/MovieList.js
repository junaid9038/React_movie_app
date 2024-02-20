import { Component } from "react";
import Moviecard from "./Moviescard";

class MovieList extends Component{

    constructor(){ 
        super();
        this.state={
            // title : 'The Avengers!',
            // plot :'suppernatual Power shown in the movie.',
            // price:199,
            // rating :8.9,
            // stars : 0,
            // fav : false,
            // IsIncart : false

            movies : [

                {
                    title: 'The Avengers',                  
                    plot:
                      "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
                    poster:
                      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
                    rating: '8.0',            
                    price: 99,            
                    stars: 0,
                    fav: false,
                    isInCart: false                  
                  },
                  {
                    title: 'The Dark Knight',                  
                    plot:
                      'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
                    poster:
                      'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',                  
                    rating: '9.0',            
                    price: 199,            
                    stars: 0,            
                    fav: false,
                    isInCart: false                  
                  },
                  {
                    title: 'Iron Man',                 
                    plot:
                      'After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.',                  
                    poster:
                      'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg',                  
                    rating: '7.9',            
                    price: 139,            
                    stars: 0,            
                    fav: false,
                    isInCart: false                  
                  }
        
            ]
        }
        // this.addstars = this.addstars.bind(this) this is another way to bind this value
    }

    handleIncstar = (movie) =>{
        const {movies} = this.state;
        const mid = movies.indexOf(movie);

        if(movies[mid].stars >= 5){
            return;
        }

        movies[mid].stars += 0.5;

        this.setState({
            movies:movies

        })

    }

    handleDerStars = (movie) =>{
        const {movies} = this.state;
        const mid = movies.indexOf(movie)

        if(movies[mid].stars <= 0){
            return;
        }
        movies[mid].stars -= 0.5;

        this.setState({
            movies:movies
        })

    }

    handleToggleFav =(movie)=>{
        const {movies} =this.state;
        const mid = movies.indexOf(movie)
        movies[mid].fav = !movies[mid].fav;

        this.setState({
            movies:movies
        })
    }

    handleToggleCart = (movie) =>{
        const {movies} = this.state;
        const mid = movies.indexOf(movie);
        movies[mid].isInCart = !movies[mid].isInCart;

        this.setState({
            movie
        })
    }
    

    render(){
       // const{title,plot,price,rating,stars,fav,IsIncart,poster} =this.state.movies;
        const {movies} = this.state
        return (
            <>
            {/* <Moviecard title ={title} plot ={plot} price = {price} stars={stars} rating ={rating} fav ={fav} IsIncart ={IsIncart}/> */}
            
            {movies.map((movie) =><Moviecard movies = {movie} 
                                  addStars= {this.handleIncstar}
                                  decStars ={this.handleDerStars}
                                  togglefav ={this.handleToggleFav}
                                  toggleCart ={this.handleToggleCart}
                                  /> )}
            </>

            )
    }
}

export default MovieList;