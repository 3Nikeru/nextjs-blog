import Image from "next/image"
import Link from "next/link"
import styles from './postcard.module.css'

const PostCard = async({post, index}) => {
  const accessKey = process.env.NEXT_PUBLICK_UNSPLASH_ACCESS_KEY
  const baseUrl = "https://api.unsplash.com/photos/"
  const images = await fetch(`${baseUrl}?query=${post.title}&client_id=${accessKey}`)
  // const data = await images.json();
  // const img = data.results[index % data.results.length]
  // console.log(img);
  
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
        <h1 className={styles.title}>{post.title.slice(0, 25)}...</h1>
        <p className={styles.desc}>{post.body.slice(0, 100)}...</p>
        <Link href={`/blog/${post.id}`} className={styles.link}>Read me</Link>
        </div>
    </div>
  )
}

export default PostCard
