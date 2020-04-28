import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
    constructor() {
        super()
        this.state = {
            reviews: [],
            searchTerm: ''
        }
    }

    handleSubmit = query => {
        fetch(`${URL}&query=${query}`)
        .then(response => response.json())
        .then(reviewData => this.setState({ reviews: reviewData.results }))
    }

    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onClick={this.handleSubmit}>

                </form>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}