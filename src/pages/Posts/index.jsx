import styles from './Posts.module.scss';
import { useEffect, useState } from "react";
import {useSearchParams} from "react-router-dom";
import Loading from "../../components/Loading/index.jsx";
import Pagination from "../../components/Pagination/index.jsx";
import {Link} from "react-router"; // Import component Pagination

function Posts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [params, setParams] = useSearchParams();

    // State cho phân trang
    const [page, setPage] = useState(() => +params.get("page") || 1);
    const [totalPosts, setTotalPosts] = useState(0);
    const limit = 10; // Số lượng bài post trên mỗi trang

    // Effect để fetch data khi 'page' thay đổi
    useEffect(() => {
        setLoading(true);
        fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Failed to fetch posts.");
                }
                // Lấy tổng số posts từ header 'x-total-count'
                const total = parseInt(response.headers.get('x-total-count'), 10);
                setTotalPosts(total);
                return response.json();
            })
            .then(data => setPosts(data))
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    }, [page]); // Chỉ phụ thuộc vào page

    // Effect để cập nhật URL search params khi 'page' thay đổi
    useEffect(() => {
        setParams({ page });
    }, [page, setParams]);

    // Hàm xử lý khi thay đổi trang
    const handlePageChange = (newPage) => {
        setPage(newPage);
    };

    if (loading) {
        return <Loading />
    }

    // Tính tổng số trang
    const totalPages = Math.ceil(totalPosts / limit);

    return (
        <div className={styles.posts}>
            <h2>Posts</h2>
            <ul>
                {posts.map((post) => (
                   <Link key={post.id} to={`/posts/${post.id}`} className={styles.postLink}>
                       <li>
                           <h3>{post.title}</h3>
                           <p>{post.body}</p>
                       </li>
                   </Link>
                ))}
            </ul>

            {/* Sử dụng component Pagination */}
            <Pagination
                currentPage={page}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </div>
    )
}

export default Posts;