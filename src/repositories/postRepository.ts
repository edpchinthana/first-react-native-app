import {Post} from "../models/post";
import {fetchAllPosts} from "../store/actions/postActions";
import API from "./API";
import {ThunkDispatch} from "redux-thunk";

export const getAllPosts = () => async (dispatch: ThunkDispatch<{}, {}, any>) => {
    try{
        const data: Post[] = await API.GET();
        dispatch(fetchAllPosts(data));
    }catch (e) {
        console.log(e);
    }
}
