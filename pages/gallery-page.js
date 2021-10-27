import useSWR from "swr";
import { useEffect, useState } from "react";
import axios from "axios";



const NEXT_PUBLIC_MCCMS_API_ENDPOIN = process.env.NEXT_PUBLIC_MCCMS_API_ENDPOIN;

const NEXT_PUBLIC_API_KEY = process.env.NEXT_PUBLIC_MCCMS_API_KEY;
const fetcher = (url) =>
  axios
    .get(url, { headers: { "X-MICROCMS-API-KEY": NEXT_PUBLIC_API_KEY } })
    .then((res) => res.data);

export default function GelleryPage() {
  const {
    data: blogData,
    error,
    mutate,
  } = useSWR(`${NEXT_PUBLIC_MCCMS_API_ENDPOIN}blog`, fetcher);
  useEffect(() => {
    mutate();
  }, []);

  if (error) {
    return (
      <div>
        error <br />
        {console.log(error)}
      </div>
    );
  }
  if (!blogData) {
    return <p>loading....</p>;
  }

  return (
    <div>
      {blogData.contents &&
        blogData.contents.map((item) => <div key={item.id}>{item.title}</div>)}

    </div>
  );
}


export async function getStaticProps(){

  return {
    props:{
      title:"Gallery",
      nowpage:2,
    }
  }
}
