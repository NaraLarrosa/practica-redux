// import { legacy_createStore as createStore } from 'redux';
const createStore = require('redux').createStore;
const combineReducers = require('redux').combineReducers;

//*****Actions*****
const BUY_POKEMON = 'BUY_POKEMON';
const RETURN_POKEMON = 'RETURN_POKEMON';

const buy_pokemon_action = (cant) => {
    return {
        type: BUY_POKEMON,
        payload: cant
    }
};

const return_pokemon_action = (cant) => {
    return {
        type: RETURN_POKEMON,
        payload: cant
    }
};

const BUY_YOSHI = 'BUY_YOSHI';
const RETURN_YOSHI = 'RETURN_YOSHI';

const buy_yoshi_action = (cant) => {
    return {
        type: BUY_YOSHI,
        payload: cant
    }
};

const return_yoshi_action = (cant) => {
    return {
        type: RETURN_YOSHI,
        payload: cant
    }
};

const BUY_SWITCH = 'BUY_SWITCH';

const buy_switch_action = (cant) => {
    return {
        type: BUY_SWITCH,
        payload: cant
    }
};

//*****Reducers*****
const default_games_state = {
    pokemon: 10,
    yoshi: 10
}; //primer estado

const games_reducer = (state = default_games_state , action) => {
    switch(action.type) {
        case BUY_POKEMON: {
            return {
                ...state,
                pokemon: state.pokemon - action.payload
            };
        };
        case RETURN_POKEMON: {
            return {
                ...state,
                pokemon: state.pokemon + action.payload
            };
        };
        case BUY_YOSHI: {
            return {
                ...state,
                yoshi: state.yoshi - action.payload
            };
        };
        case RETURN_YOSHI: {
            return {
                ...state,
                yoshi: state.yoshi + action.payload
            };
        };
        default: return state; //estado actual
    }
};

const default_consoles_state = {
    ps5: 30,
    switch: 30
};

const consoles_reducer = (state = default_consoles_state , action) => {
    switch(action.type) {
        case BUY_SWITCH: {
            return {
                ...state,
                switch: state.switch - action.payload
            };
        };
        default: return state; //estado actual
    }
};

const rootReducers= combineReducers({
    games_reducer,
    consoles_reducer
});

//*****Store*****
const store = createStore(rootReducers);

console.log('Estado inicial: ', store.getState());
store.subscribe(() => {
    console.log('Cambio de estado: ', store.getState());
});
// store.dispatch(buy_pokemon_action(3)); // dispatch reparte el mensaje, envia las actions
// store.dispatch(return_pokemon_action(2));

store.dispatch(buy_switch_action(2));