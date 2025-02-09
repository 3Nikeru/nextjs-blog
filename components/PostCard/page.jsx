import Image from "next/image"
import Link from "next/link"
import styles from './postcard.module.css'
import { useState, useEffect } from "react"

const PostCard = ({ post, index }) => {
  const [imageUrl, setImageUrl] = useState('/post.jpg')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const accessKey = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY
  const baseUrl = "https://api.unsplash.com/search/photos"

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const query = encodeURIComponent(post.title) || 'cars'
        const images = await fetch(`${baseUrl}?query=${query}&per_page=30&client_id=${accessKey}&per_page=10`)

        if (!images.ok) {
          const errorText = await images.text()
          console.log(`${errorText}`)
          throw new Error('Failed to fetch images')
        }

        const data = await images.json()
        const img = data.results[index % data.results.length]
        const imageUrl = img ? img.urls.small : '/post.jpg'
        setImageUrl(imageUrl)
      } catch (error) {
        console.error('Error loading image:', error)
        setError('Error loading image')
      } finally {
        setLoading(false)
      }
    }

    fetchImage()
  }, [post.title, accessKey, baseUrl, index])

  if (loading) {
    return <div className={styles.container}><p>Loading...</p></div>
  }

  if (error) {
    return (
      <div className={styles.container}>
        <p>{error}</p>
      </div>
    )
  }

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
        </div>
        <span className={styles.data}>03/10/2024</span>
      </div>
      <div className={styles.button}>
        <h1 className={styles.title}>{post.title.slice(0, 25)}...</h1>
        <p className={styles.desc}>{post.body.slice(0, 100)}...</p>
        <Link
          href={{
            pathname: `/blog/${post.id}`,
            query: { imageUrl }
          }}
          className={styles.link}
        >
          Read me
        </Link>
      </div>
    </div>
  )
}

export default PostCard