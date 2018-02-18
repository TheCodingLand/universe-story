

const initialState = {
    userName: "",
    progression: 0,
    bookmarks: [],

}



export default function userReducer(state = initialState
    , action) {
    switch (action.type) {
        case "NEXT_ARTICLE": {
            console.log("NEXT_ARTICLE CALLED")
            state = { ...state, progression: state.progression + 1 }
            console.log(state)
            return state
        }
        case "PREVIOUS_ARTICLE": {
            return { ...state, progression: state.progression - 1 }
        }
        case "SET_ARTICLE": {
            return { ...state, progression: action.payload }
        }
        case "BOOKMARK_ARTICLE": {
            console.log(action.payload)
            if (state.bookmarks.includes(action.payload)) {
                let arr = state.bookmarks.filter(item => item !== action.payload)
                return { ...state, bookmarks: arr }
            }
            else {
                return { ...state, bookmarks: state.bookmarks.concat(action.payload) }
            }
        }
        default:
            return state
    }
    return state

}
