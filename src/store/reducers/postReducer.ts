import {Post} from "../../models/post";
import {Action} from "../../models/action";

const initialState: Post[] = [];

const postReducer = (state = initialState, action: Action) => {
    switch (action.type){
        case "FETCH_ALL_POSTS":
            return action.payload;
        default:
            return state;
    }
}

export default postReducer;
