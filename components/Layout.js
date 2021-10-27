import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Layout.module.scss";
import Image from "next/image";
import { AiFillHome } from "react-icons/ai";
import { GrGallery } from "react-icons/gr";
import {IoMdContact} from "react-icons/io"
import {RiGalleryFill} from "react-icons/ri"

export default function Layout({ title = "none title", nowpage, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <div className={styles.titlecont}>
          <div className={styles.logocont}>
            <Link href="/">
              <Image
                src="/image/logo_mark.png"
                width={181}
                height={198}
                className={styles.logo}
              />
            </Link>
          </div>
          <Link href="/">
            <div className={styles.title}>
              <p className={styles.title__main}>Silver</p>
              <p className={styles.title__sub}>Organizer and cleaner</p>
            </div>
          </Link>
        </div>

        <nav className={styles.global_nav}>
          <ul className={styles.golobal_nav__list}>
            <li className={nowpage == 1 ? styles.isSelected : null}>
              <Link href="/">
                <a>
                  <AiFillHome /> Home
                </a>
              </Link>
            </li>
            <li className={nowpage == 2 ? styles.isSelected : null}>
              <Link href="/">
                <a><RiGalleryFill/> Gallery</a>
              </Link>
            </li>
            <li className={nowpage == 3 ? styles.isSelected : null}>
              <Link href="/">
                <a><IoMdContact />Contact</a>
              </Link>
            </li>
          </ul>
          <ul className={styles.global_nav__list__smartphone}>
            <li className={nowpage == 1 ? styles.isSelected : null}>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li className={nowpage == 2 ? styles.isSelected : null}>
              <Link href="/">
                <a>Gallery</a>
              </Link>
            </li>
            <li className={nowpage == 3 ? styles.isSelected : null}>
              <Link href="/">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
}
