import React from "react";

const MovieReviews = (props) => {
    let reviews = props.reviews.map((review, index) => {
    return < li key={index} className="review">
       <h1>title={review.display_title}</h1>  
       <h2>by={review.byline}</h2> 
       <h3>summary={review.summary_short}</h3>  
       </li>
        })
   
       return(
    <div className="review-list">
        <h3>{reviews}</h3>
    </div>
       ) 
    
}
export default MovieReviews;