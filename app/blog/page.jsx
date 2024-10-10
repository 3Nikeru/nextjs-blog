import PostCard from "@/components/PostCard/page"
import styles from "./blog.module.css"

const getTotalPosts = async ()=>{
  const respose = await fetch('https://jsonplaceholder.typicode.com/posts');
  if(!respose.ok) throw new Error('something went wrong')
    return respose.json()
}

const blogPage = async() => {
  const posts = await getTotalPosts();
  // console.log(posts);
  
  return (
    <div className={styles.container}>
      {posts.map(post => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post}/>
        </div>
      ))}
      
    </div>
  )
}

export default blogPage
