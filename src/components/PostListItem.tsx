import React from "react";
import {Post} from "../models/post";
import {StyleSheet, Text, TextStyle, View} from "react-native";
import {Colors} from "react-native/Libraries/NewAppScreen";

interface PostListItemProps {
    post: Post
}

const PostListItem : React.FC<PostListItemProps> = (props: PostListItemProps) => {
    const post: Post = props.post;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                {post.title}
            </Text>
            <Text>
                by user {post.userId}
            </Text>
            <Text style={styles.body}>
                {post.body}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        backgroundColor: Colors.light,
        padding:10,
        borderRadius: 10,
        elevation: 5,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold"
    },
    body:{
        marginVertical: 10,
        textAlign: "justify",
    }
});

export default PostListItem;
