import fetch from 'node-fetch';

const NEXT_PUBLIC_MCCMS_API_ENDPOIN = process.env.NEXT_PUBLIC_MCCMS_API_ENDPOIN;

const NEXT_PUBLIC_API_KEY = process.env.NEXT_PUBLIC_MCCMS_API_KEY;

export async function getAllPosts(){
  const res = await fetch(new URL(`${NEXT_PUBLIC_MCCMS_API_ENDPOIN}fotogarally`),{headers: { "X-MICROCMS-API-KEY": NEXT_PUBLIC_API_KEY } });
  const posts = await res.json();
  const data = posts.contents;
  return data;
};

export async function getAllIds(){
  const res = await fetch(new URL(`${NEXT_PUBLIC_MCCMS_API_ENDPOIN}fotogarally`),{headers: { "X-MICROCMS-API-KEY": NEXT_PUBLIC_API_KEY } });
  const posts = await res.json();
  const data = posts.contents;

  return data.map((post)=>{
    return {
      params:{id:post.id}
    }
  });
};

export async function getPostData(id){
  const res = await fetch(new URL(`${NEXT_PUBLIC_MCCMS_API_ENDPOIN}fotogarally/${id}`),{headers: { "X-MICROCMS-API-KEY": NEXT_PUBLIC_API_KEY } });
  const post = await res.json();
  
  return {post}
}