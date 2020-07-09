import  { types }  from '../types/types';


const INITIAL_STATE = {
    modalOpen: false
}

const { UI_OPEN_MODAL, UI_CLOSE_MODAL } = types

export const uiReducer = ( state = INITIAL_STATE, action  ) => {
    switch (action.type) {
        case UI_OPEN_MODAL:
            return { ...state, modalOpen: true }  
        case UI_CLOSE_MODAL:
            return { ...state, modalOpen: false }  
        default:
            return { ...state }
    }

}