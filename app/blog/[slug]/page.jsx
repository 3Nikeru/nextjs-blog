import Image from "next/image"
import styles from './singlePost.module.css'
import PostUser from "@/components/PostUser/page"

const getTotalPosts = async(slug) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
  if(!response.ok) throw new Error('something went wrong');
  return response.json();
}

const singlePage = async({params}) => {
  const {slug} = params;
  const post = await getTotalPosts(slug);
  // console.log(params.slug);
  
  return (
    <div>
      <Image/>
      <PostUser userId={post.id}/>
    </div>
  )
}

export default singlePage
