import React from "react";

const MovieReviews = ({reviews}) => (
    <div className="review-list">
       {reviews.map(review => <MovieReviews title={review.display_title} by={review.byline} summary={review.summary_short} />)}
    </div>
)

export default MovieReviews;