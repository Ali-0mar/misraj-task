import React, { useContext } from 'react';
import { AppContext } from '../../State/Context';
import  IPost  from '../../Interfaces/IPost';
import Spinner from "../Spinner/Spinner";
import "./Table.scss";

// Don't hate me for this but, I'm using the native HTML Table Element
const Table: React.FC<{openModal:()=>void}> = ({openModal}) => {
    const { posts, loading, error } = useContext(AppContext);
    if (loading) return <Spinner/>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <>
            <div className='btn-container'>
                <button
                    onClick={openModal}
                    className='btn'
                >
                    Create A new Post
                </button>
            </div>
            <div className='main'>
                <table>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                </tr>
                </thead>
                <tbody>
                {posts.map((post: IPost) => (
                    <tr key={post.id}>
                        <td>{post.id}</td>
                        <td>{post.title}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        </>
    );
};

export default Table;