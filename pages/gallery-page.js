import useSWR from "swr";
import { useEffect, useState } from "react";
import axios from "axios";
import Gallerymenu from "../components/ui/GalleryMenu";
import styles from "../styles/Gallerypage.module.scss";

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
  } = useSWR(`${NEXT_PUBLIC_MCCMS_API_ENDPOIN}fotogarally`, fetcher);
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
      <div className={styles.galleryCont}>
        {blogData.contents &&
          blogData.contents.map((item) => (
            <Gallerymenu gallery={item} key={item.id} />
          ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: "Gallery",
      nowpage: 2,
    },
  };
}
