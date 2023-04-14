import Image from "next/image";
import Link from "next/link";

export default function FeaturedImage({ post }) {
    let img = '';

    const defaultFeaturedImage = `http://sampleblog.ts2.in/wp-content/uploads/2023/04/pexels-photo-2387873.jpeg`;
    const defaultWidth = "300";
    const defaultHeight = "200";

    console.log(post.featuredImage?.node?.mediaDetails);

    if(post.featuredImage) {
        let size = post.featuredImage?.node?.mediaDetails?.sizes[0];        
        img = {
            src: size.sourceUrl,
            // src: defaultFeaturedImage,
            width: size.width,
            height: size.height
        }
    }
    else {
        img = {
            src: defaultFeaturedImage,
            width: defaultWidth,
            height: defaultHeight
        }
    }

    return (
        <Link href={`/blog/${post.slug}`}>
            <Image src={img?.src} width={img?.width} height={img?.height} alt={post.title} className="h-full object-cover rounded-xl"/>
        </Link>
    )
}