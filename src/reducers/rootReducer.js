import { combineReducers } from 'redux'
import manageRestaurants from './manageRestaurants'
import manageReviews from './manageReviews'

const rootReducer = combineReducers({
    restaurants: manageRestaurants,
    reviews: manageReviews
})

export default rootReducer