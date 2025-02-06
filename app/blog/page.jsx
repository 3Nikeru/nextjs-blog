import PostCard from "@/components/PostCard/page"
import styles from "./blog.module.css"
import Pagination from "@/components/Pagination/Pagination";

const PostPerPage = 10;

const fetchData = async(page)=>{
  const start = (page - 1) * PostPerPage;
  const respose = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${PostPerPage}`, {next:{revalidate:3600}});
  if(!respose.ok) throw new Error('something went wrong with page')
    return respose.json()
}
const getTotalPosts = async ()=>{
  const respose = await fetch('https://jsonplaceholder.typicode.com/posts');
  if(!respose.ok) throw new Error('something went wrong')
    return respose.json()
}

const blogPage = async({searchParams}) => {
  const page = parseInt(searchParams.page) || 1;
  const posts = await fetchData(page);
  const totalPosts = await getTotalPosts();
  const totalPages = Math.ceil(totalPosts.length / PostPerPage) 
  
  return (
    <>
      <div className={styles.container}>
        {posts.map((post, index) => (
          <div className={styles.post}>
            <PostCard post={post} index={index}/>
          </div>
        ))}
        
      </div>
        <Pagination currentPage={page} totalPages={totalPages} />
    </>
  )
}

export default blogPage