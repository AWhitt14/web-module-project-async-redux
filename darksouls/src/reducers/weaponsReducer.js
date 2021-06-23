const initialState = {
    weapons: [],
    loading: false,
    error: '',
}

export const setWeapons = 'SET_WEAPONS';
export const clearWeapons = 'CLEAR_WEAPONS';
export const getWeapons = 'GET_WEAPONS';
export const fetchError = 'FETCH_ERROR';

export const weaponsReducer = (state = initialState, action) => {
    switch (action.type) {
        case getWeapons:
            return {...state, loading: true}
        case setWeapons:
            return {...state, loading: false, weapons: action.payload}
        case clearWeapons:
            return {...state, weapons: []}
        case fetchError:
            return {...state, loading: false, error: action.payload}
        default:
            return {...state}
    }
}