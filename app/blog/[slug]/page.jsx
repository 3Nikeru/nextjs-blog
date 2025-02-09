import Image from "next/image";
import styles from './singlePost.module.css';
import PostUser from "@/components/PostUser/page";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const PostImageClient = dynamic(() => import('@/components/PostImageClient'), { ssr: false });

const getTotalPosts = async (slug) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
  if (!response.ok) throw new Error('Something went wrong');
  return response.json();
};

export const generateStaticParams = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return posts.map((post) => ({
    slug: post.id.toString(),
  }));
};

const SinglePage = async ({ params }) => {
  const { slug } = params;
  const post = await getTotalPosts(slug);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Suspense fallback={<div>Loading image...</div>}>
          <PostImageClient alt={post.title} />
        </Suspense>
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Image src="/avatar.jpg" alt="avatar" className={styles.avatar} width={64} height={64} />
          <PostUser userId={post.userId} />
        </div>
        <div className={styles.detailText}>
          <span className={styles.detailTitle}>Published</span>
          <span className={styles.detailTitle}>01.01.2024</span>
        </div>
        <div className={styles.content}>{post.body}</div>
      </div>
    </div>
  );
};

export default SinglePage;