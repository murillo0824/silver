
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      

      

      
    </div>
  )
}

export async function getStaticProps(){

  return {
    props:{
      title:"home",
      nowpage:1,
    }
  }
}