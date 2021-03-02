import {Post} from "../../models/post";
import {Action} from "../../models/action";

export const fetchAllPosts = (payload:Post[]): Action => ({
    type: "FETCH_ALL_POSTS",
    payload
});
