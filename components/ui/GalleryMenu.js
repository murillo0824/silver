import Link from "next/link";
import { useState, useContext } from "react";
import styles from "../../styles/components/Gallery.module.scss";
import Image from "next/image";


export default function Gallerymenu({ gallery }) {
  return (
    <>
      <Link href={`/gallery/${gallery.id}`}>
        <div className={styles.gallerymenu}>
          <div className={styles.gallerymenu__label}>
            <div className={styles.gallerymenu__label__before}>
              <img
                src={gallery.before_foto.url}
                
              />
            </div>
            <div className={styles.gallerymenu__label__after}>
              <img
                src={gallery.after_foto.url}
                
              />
            </div>
          </div>
          <div className={styles.gallerymenu__caption}>
            <div className={styles.gallerymenu__caption__title}>
              {gallery.title}
            </div>
            <div className={styles.gallerymenu__caption__date}>
              {dateChange(gallery.createdAt)}
            </div>
            
          </div>
        </div>
      </Link>
    </>
  );
}

function dateChange(datetime){
  const dateChange = new Date(datetime);
  const local = dateChange.toLocaleDateString();
  return local
}