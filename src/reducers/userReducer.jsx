export default (state =
    {
        userName: "",
        progression: 0,
        bookmarks: [],
    }, action) => {
    switch (action.type) {
        case "NEXT_ARTICLE": {
            return { ...state, progression: state.progression + 1 }
        }
    }

}
