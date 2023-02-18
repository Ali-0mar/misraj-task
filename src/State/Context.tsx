import React, { createContext, useState, useEffect } from 'react';
import  IPost  from '../Interfaces/IPost';
import { getAllPosts} from './API';

interface State  {
    posts: IPost[];
    loading: boolean;
    error: Error | null;
    addPost: (post: IPost) => void;
};

export const AppContext = createContext<State>({
    posts: [],
    loading: false,
    error: null,
    addPost: () => {},
});

const AppProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const [posts, setPosts] = useState<IPost[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        setLoading(true);
        getAllPosts()
            .then((data) => setPosts(data))
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }, []);

     const addPost = (post: IPost) => {
         setPosts((prev: IPost[]) => (
             // I Added the new added post to the start of the array tp make the screen recording easy
             [
                 post,
                 ...prev]
         ));
         // This function makes a mutation to create the new post and add it to the dataBase,
         // but It requires additional fields and changes to the form, so I'm adding to the local state only
    //     createPost(post)
    //         .then((data) => setPosts((prev) => [...prev, data]))
    //         .catch((error) => setError(error));
    };

    const value: State = {
        posts,
        loading,
        error,
        addPost
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
