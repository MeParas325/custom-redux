import {createStore} from 'redux'

const INCREMENT = 'post/increment'
const DECREMENT = 'post/decrement'
const INCREASE_BY = 'post/increaseBy'
const DECREASE_BY = 'post/decreaseBy'

const initialState = {
    name: "Paras",
    post: 0,
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, post: state.post + 1 }
    case DECREMENT:
      return { ...state, post: state.post - 1 }
    case INCREASE_BY:
      return { ...state, post: state.post + action.payload }
    case DECREASE_BY:
      return { ...state, post: state.post - action.payload }
    default:
      return state
  }
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.())

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch({type: INCREMENT})
store.dispatch({type: DECREMENT})
store.dispatch({type: INCREASE_BY, payload: 10})
store.dispatch({type: DECREASE_BY, payload: 30})