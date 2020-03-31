import { SELECT_HERO, DATA_LOADED, HERO_LOADED} from "../constants/action-types";

const initialState = {
    selectedHero: {},
    allHeroes: []
};

function rootReducer(state = initialState, action) {
    if (action.type === SELECT_HERO) {
        return {...state, selectedHero: {...action.payload.hero} }
    }

    if (action.type === DATA_LOADED) {
        return Object.assign({}, state, {
            allHeroes: state.allHeroes.concat(action.payload)
        });
    }

    if (action.type === HERO_LOADED) {
        return {...state, selectedHero: {...action.payload} }
    }
    
    return state;
};

export default rootReducer;