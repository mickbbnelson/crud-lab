import cuid from 'cuid';
export const cuidFn = cuid;
 
export default function manageRestaurants(state = {restaurants: []}, action) {
    switch (action.type) {
        case 'ADD_RESTAURANT':
            const restaurant = {
               id: cuidFn,
               text: action.text
            }
        return { restaurant: state.restaurants.concat(restaurant) };

        default:
            return state
    }
}
