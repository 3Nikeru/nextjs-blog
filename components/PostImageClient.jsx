'use client'
import Image from "next/image"

const PostImageClient = ({imageUrl, failBackImage, alt}) => {
    return (
        <Image 
            src={imageUrl || failBackImage}
            alt={alt}
            fill
        />
    )
} 
export default PostImageClient