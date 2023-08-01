export const ADD_TO_FAVS = (payload) => {
    return {
        type: "ADD_CART",
        payload: payload
    }
}

// remove items
export const REMOVE_FAVS = (id) => {
    return {
        type: "RMV_CART",
        payload: id
    }
}