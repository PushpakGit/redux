import {FETCH_POSTS, CREATE_POSTS} from '../Actions'

const initialState = {
    posts:[]
}

export default function postsApp (state=initialState,action) {
    switch(action.type){
        case FETCH_POSTS:
            return {
                ...state,
                posts:[...action.payload]
            }
        case CREATE_POSTS:
            let list = [...state.posts]
            return {
                ...state,
                posts:[action.newPost,...list]
            }
        default:
            return state
    }
}