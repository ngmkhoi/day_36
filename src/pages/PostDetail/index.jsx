import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './PostDetail.module.scss';
import Loading from '../../components/Loading';
import {useNavigate} from "react-router";

function PostDetail() {
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    // useParams() là hook để đọc các tham số động trên URL (ví dụ :postId)
    const { postId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPost = fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        const fetchComments = fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);

        Promise.all([fetchPost, fetchComments])
        .then( async ([postResponses, commentResponse]) => {
            if(!postResponses.ok) {
                if(postResponses.status === 404) {
                    navigate('/posts', { replace: true });
                    return;
                }
                throw new Error(postResponses.message);
            }

            if(!commentResponse.ok){
                throw new Error(commentResponse.message);
            }

            const postData = await postResponses.json();
            const commentData = await commentResponse.json();

            setPost(postData);
            setComments(commentData);
        }).catch(error => {
            setError(error.message);
        }).finally(() => setLoading(false));
    }, [postId, navigate]);

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <div className={styles.error}>{error}</div>;
    }

    return (
        <div className={styles.postDetail}>
            {/* --- Phần hiển thị thông tin bài viết (giữ nguyên) --- */}
            <h1>{post.title}</h1>
            <p className={styles.postBody}>{post.body}</p>
            <Link to="/posts" className={styles.backLink}>&larr; Back to all posts</Link>

            <hr className={styles.divider} />

            {/* --- Phần hiển thị comments mới --- */}
            <div className={styles.commentsSection}>
                <h2>Comments ({comments.length})</h2>
                {comments.length > 0 ? (
                    <ul>
                        {comments.map(comment => (
                            <li key={comment.id} className={styles.comment}>
                                <p className={styles.commentAuthor}>{comment.name} ({comment.email})</p>
                                <p className={styles.commentBody}>{comment.body}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No comments yet.</p>
                )}
            </div>
        </div>
    );
}

export default PostDetail;