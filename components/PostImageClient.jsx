"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

const PostImageClient = ({ alt }) => {
    const searchParams = useSearchParams();
    const [imageUrl, setImageUrl] = useState('/post.jpg');

    useEffect(() => {
        const imageParam = searchParams.get('imageUrl');
        if (imageParam) {
            setImageUrl(imageParam);
        }
    }, [searchParams]);

    return (
        <Image 
            src={imageUrl}
            alt={alt}
            fill
        />
    );
};

export default PostImageClient;