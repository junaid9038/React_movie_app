import { Component } from "react";

class Moviecard extends Component{
    // use state in react
  
   handleFav = () => {  // Fix the method name here
    this.setState({
      fav: !this.state.fav
    });
  }

  handleAddToCart =() =>{
    this.setState({
        IsIncart : !this.state.IsIncart
    });
  }

  addstars =() =>{
    //form1
    // this.setState({
    //     stars:this.state.stars +0.5 
    // });
    if(this.state.stars >= 5){
        return;
    }

    //second from
    this.setState((prevState) => {
        return{
            stars: prevState.stars +0.5
        }
    });
    // this.state.stars += 0.5;
    // console.log('this.state:',this.state)
  }
  desstars =() =>{
    //form1
    if(this.state.stars <= 0){
        return;
    }
    this.setState({
        stars:this.state.stars -0.5 
    },()=> console.log('stars inside callback :',this.state.stars));
    
  }
    
    render(){
        // destructing of the state
        // console.log(this.props);
        // const {movies: data} = this.props;
        // console.log(data);
        const {movies,addStars,decStars,togglefav,toggleCart} = this.props;
        
        const {title,plot,price,rating,stars,fav,isInCart} = this.props.movies;
        return (
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img src="https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8815512_p_v8_ax.jpg" alt="Poster" />
                    </div>


                    <div className="right">
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">Rs.{price}</div>

                        <div className="footer">
                            <div className="rating">{rating}</div>
                            <div className="star-dis">
                                    <img src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png" className="str-btn" alt="decrease" 
                                    onClick={()=>{decStars(movies)}}/>
                                    <img src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" className="stars" alt="stars" />
                                    <img src="https://cdn-icons-png.flaticon.com/128/748/748113.png" className="str-btn" alt="increase"
                                    onClick={() => {addStars(movies)}}/>
                                    {/* bind prevent to this value from lost*/}
                                    <span className="starCount">{stars}</span>

                                
                            </div>
                            {/* {fav ? <button className="unfavourite-btn" onClick={this.handleFav}>Un-favourite </button>:
                            <button className="favourite-btn" onClick={this.handleFav}>Favourite </button> } */}
                            
                                <button className={fav?"unfavourite-btn":"favourite-btn"} onClick={()=>{togglefav(movies)}}>{fav?"unfavourite":"favourite"} </button>
                            
                             <button className={isInCart?"unfavourite-btn":"cart-btn"} onClick={()=>{toggleCart(movies)}}>{isInCart?"Remove from cart":"Add to cart"}</button>


                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Moviecard;