import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Layout.module.scss"

export default function Layout({ title = "none title", nowpage,children }) {
  return (
    <div>
      <Head>
        <title>
          {title}
        </title>
      </Head>
      <header>
        <nav className={styles.global_nav}>
          <ul className={styles.golobal_nav__list}>
            <li className={nowpage==1 ? styles.isSelected:null}>
              <Link href="/">
                <a>
                  Home
                </a>
              </Link>
            </li>
            <li className={nowpage==2 ? styles.isSelected:null}>
              <Link href="/">
                <a>
                  Gallery
                </a>
              </Link>
            </li>
            <li className={nowpage==3 ? styles.isSelected:null}>
              <Link href="/">
                <a>
                  Contact
                </a>
              </Link>
            </li>
          </ul>
          <ul className={styles.global_nav__list__smartphone}>
            <li className={nowpage==1 ? styles.isSelected:null}>
              <Link href="/">
                <a>
                  Home
                </a>
              </Link>
            </li>
            <li className={nowpage==2 ? styles.isSelected:null}>
              <Link href="/">
                <a>
                  Gallery
                </a>
              </Link>
            </li>
            <li className={nowpage==3 ? styles.isSelected:null}>
              <Link href="/">
                <a>
                  Contact
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        {children}
      </main>
    </div>
  )
}
