
export const NEXT_ARTICLE = 'NEXT_ARTICLE'
export const PREVIOUS_ARTICLE = 'PREVIOUS_ARTICLE'



export function nextArticle() {
    return {
        type: "NEXT_ARTICLE",
        payload: {
        }
    }

}


export function setArticle(index) {
    return {
        type: "SET_ARTICLE",
        payload: index
    }

}


export function bookmarkArticle(index) {
    console.log(index)
    return {
        type: "BOOKMARK_ARTICLE",
        payload: index

    }

}


export function previousArticle() {
    return {
        type: "PREVIOUS_ARTICLE",
        payload: {

        }
    }
}