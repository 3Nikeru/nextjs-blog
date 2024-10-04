import Image from "next/image"
import Link from "next/link"
import styles from './postcard.module.css'

const PostCard = ({post}) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
            <Image
                fill
                src="/post.jpg"
                alt="post"
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                className={styles.img}
            />
        </div>
        <span className={styles.data}>03/10/2024</span>
      </div>
      <div className={styles.button}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.body}</p>
        <Link href={`/blog/${post.id}`} className={styles.link}>Read me</Link>
        </div>
    </div>
  )
}

export default PostCard
