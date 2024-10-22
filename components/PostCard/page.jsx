import Image from "next/image"
import Link from "next/link"
import styles from './postcard.module.css'

const PostCard = async({post, index}) => {
  const accessKey = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY
  const baseUrl = "https://api.unsplash.com/search/photos"
  try {
    const query = encodeURIComponent(post.title) || 'cars';
    const images = await fetch(`${baseUrl}?query=${query}&per_page=30&client_id=${accessKey}&per_page=10`)
    if(!images.ok){
      const errorText = await images.text();
      console.log(`${errorText}`);
      throw new Error('failed images')      
    }
    const data = await images.json();
    const img = data.results[index % data.results.length];
    const imageUrl = img ? img.urls.small : '/post.jpg';
    return (
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.imgContainer}>
              <Image
                  fill
                  src={imageUrl}
                  alt="post"
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                  className={styles.img}
              />
              {/* <img src={imageUrl} alt={post.title} className={styles.img}/> */}
          </div>
          <span className={styles.data}>03/10/2024</span>
        </div>
        <div className={styles.button}>
          <h1 className={styles.title}>{post.title.slice(0, 25)}...</h1>
          <p className={styles.desc}>{post.body.slice(0, 100)}...</p>
          <Link href={{ 
            pathname:`/blog/${post.id}`,
            query: {imageUrl}
            }} className={styles.link}>Read me</Link>
          </div>
      </div>
    )
  } catch (error) {
    console.error('Error images', error);
    return (
      <div className={styles.container}>
        <p>Error loading!</p>
      </div>
    )
  }
  
  
  

}

export default PostCard
