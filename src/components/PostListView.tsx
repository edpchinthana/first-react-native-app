import React, {useEffect} from "react";
import {ScrollView, View, Text, VirtualizedList, FlatList, ListRenderItemInfo} from "react-native";
import {Post} from "../models/post";
import {useDispatch, useSelector} from "react-redux";
import {getAllPosts} from "../repositories/postRepository";
import PostListItem from "./PostListItem";

const PostListView : React.FC = () => {
    const postList: Post[] = useSelector((state:any) => state.posts);
    const dispatch = useDispatch();

    useEffect(()=>{
       if(postList.length==0){
           dispatch(getAllPosts());
       }
    }, []);

    return (
        <FlatList
            data={postList}
            renderItem={(item:ListRenderItemInfo<Post>)=>
                <PostListItem post={item.item} key={item.item.id}/>
            }
            keyExtractor={(item, index) => item.id.toString()}
        />
    );
}

export default PostListView;
