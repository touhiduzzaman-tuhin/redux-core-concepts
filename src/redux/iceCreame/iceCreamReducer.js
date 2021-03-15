import { BUY_ICE_CREAM } from "./iceCreameType"

const initialState = {
    noOfIceCream : 20
}

export const iceCreamReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_ICE_CREAM:
            return {
                ...state,
                noOfIceCream : state.noOfIceCream - 1
            }
        
        default :
            return state;
    }
}