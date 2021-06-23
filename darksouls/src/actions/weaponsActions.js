import axios from 'axios';
import { setWeapons, clearWeapons, getWeapons, fetchError } from '../reducers/weaponsReducer';

export const fetchWeapons = () => (dispatch) => {
    dispatch({type: getWeapons});

    axios.get('https://jgalat.github.io/ds-weapons-api/')
    .then(x => {
        dispatch({type: setWeapons, payload: x.data})
    })
    .catch(er => {
        console.log(er)
        dispatch({type: fetchError, payload: er})
    })

}

export const clearData = (dispatch) => {
    dispatch({type: clearWeapons})
}