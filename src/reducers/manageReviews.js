import cuid from 'cuid';

export default function manageReviews(state={reviews: []}, action) {
    switch(action.type){
        case 'ADD_REVIEW':
            return {
                ...state,
                reviews: state.reviews.concat({text: action.review.text, restaurantId: action.review.restaurantId, id: cuid()})
            }
        case 'DELETE_REVIEW':
            return {
                ...state,
                reviews: state.reviews.filter(review => review.id !== action.id)
            }
        case 'DELETE_RESTAURANT':
            return {
                ...state,
                reviews: state.reviews.filter(review => review.restaurantId !== action.id)
            }
        default:
            return state
    }
}