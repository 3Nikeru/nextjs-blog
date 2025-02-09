import PostCard from "@/components/PostCard/page";
import styles from "./blog.module.css";
import Pagination from "@/components/Pagination/Pagination";

const PostPerPage = 10;

const fetchData = async (page) => {
  const start = (page - 1) * PostPerPage;
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${PostPerPage}`);
  if (!response.ok) throw new Error("Something went wrong with page");
  return response.json();
};

const getTotalPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) throw new Error("Something went wrong");
  return response.json();
};

// 🔥 Генерируем статические пути (например, /blog/page-1, /blog/page-2, ...)
export const generateStaticParams = async () => {
  const totalPosts = await getTotalPosts();
  const totalPages = Math.ceil(totalPosts.length / PostPerPage);

  return Array.from({ length: totalPages }, (_, i) => ({
    page: (i + 1).toString(),
  }));
};

const BlogPage = async ({ params }) => {
  const page = parseInt(params.page) || 1;
  const posts = await fetchData(page);
  const totalPosts = await getTotalPosts();
  const totalPages = Math.ceil(totalPosts.length / PostPerPage);

  return (
    <>
      <div className={styles.container}>
        {posts.map((post, index) => (
          <div className={styles.post} key={post.id}>
            <PostCard post={post} index={index} />
          </div>
        ))}
      </div>
      <Pagination currentPage={page} totalPages={totalPages} />
    </>
  );
};

export default BlogPage;