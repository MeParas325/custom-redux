const INCREMENT = 'post/increment'
const DECREMENT = 'post/decrement'
const INCREASE_BY = 'post/increaseBy'
const DECREASE_BY = 'post/decreaseBy'

const myCreateStore = (reducer) => {

    let state = {
        post: 0,
        name: "Paras"
    }

    let listeners = []

    const store = {

        getState: () => {
            console.log(state)
        },

        dispatch: (action) => {
            state = reducer(state, action)
            listeners.forEach((listener) => {
                listener()
            })
        },

        subscribe: (listener) => {
            listeners.push(listener)
            return function() {
                listeners = []
            }
        },
    }

    return store
}

const reducer = (state, action) => {
    switch (action.type) {
        case INCREMENT:
            return {...state, post: state.post + 1}
        case DECREMENT:
            return {...state, post: state.post - 1}
        case INCREASE_BY:
            return {...state, post: state.post + action.payload}
        case DECREASE_BY:
            return {...state, post: state.post - action.payload}
        default:
            return state
    }
}

const store = myCreateStore(reducer)

const listener = () => {
    store.getState()
}

const unsubscribe = store.subscribe(listener) 
store.dispatch({type: INCREMENT})
store.dispatch({type: DECREMENT})
store.dispatch({type: INCREASE_BY, payload: 10})
unsubscribe()
store.dispatch({type: DECREASE_BY, payload: 20})



