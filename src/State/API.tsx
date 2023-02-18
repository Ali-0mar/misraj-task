import { createClient, gql } from 'urql';
import IPost  from '../Interfaces/IPost';

const client = createClient({
    url: 'https://graphqlzero.almansi.me/api',
});

/**
 * @return Promise that resolves a List of Posts
 */
export const getAllPosts = async (): Promise<IPost[]> => {
    const query = gql`
        query {
            posts {
                data {
                    id
                    title
                }
            }
        }
    `;

    // @ts-ignore
    const { data } = await client.query(query).toPromise();
    return data.posts.data;
};

/**
 *
 * @param post post data to create a new postMessage
 * @return Promise that resolves the newly created Post
 */
export const createPost = async (post: IPost): Promise<IPost> => {
    console.log("Create Post")
    const mutation = gql`
        mutation (  $input: CreatePostInput!) {
            createPost(input: { id: $id, title: $title }) {
                id
                title
            }
        }
    `;

    const { data } = await client.mutation(mutation, post).toPromise();
    return data;
};
