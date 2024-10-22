import Image from "next/image"
import styles from './singlePost.module.css'
import PostUser from "@/components/PostUser/page"
import PostImageClient from "@/components/PostImageClient";

const getTotalPosts = async(slug) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
  if(!response.ok) throw new Error('something went wrong');
  return response.json();
}

const singlePage = async({params, searchParams}) => {
  const {slug} = params;
  const post = await getTotalPosts(slug);
  const imageUrl = searchParams.imageUrl || '/post.jpg';
  
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <PostImageClient imageUrl={imageUrl} failBackImage='/post.jpg' alt={post.title} className={styles.img}/>
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Image 
            src='/avatar.jpg'
            alt="avatar"
            className={styles.avatar}
            width={64}
            height={64}
            />
            <PostUser userId={post.id}/>
        </div>
        <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailTitle}>01.01.2024</span>
        </div>
        <div className={styles.content}>{post.body}</div>
      </div>
    </div>
  )
}

export default singlePage
