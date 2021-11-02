import Link from "next/link";
import { useRouter } from "next/router";
import { getPostData,getAllIds } from "../../lib/gallery";


export default function GalleryDetail({post}){
  
  const router = useRouter();
  if(router.isFallback || !post){
    return <div>loading ....</div>
  }


  return(
    <>
      <h3>
        {post.title}
      </h3>
    </>
  )
}


export async function getStaticPaths(){
  const paths = await getAllIds();
  return{
    paths,
    fallback:true
  };

}

export async function getStaticProps({ params }){
  const { post:post } = await getPostData(params.id);
  return {
    props:{
      post,
    },
    revalidate:5,
  };
}