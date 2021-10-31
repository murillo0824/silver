
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

export default function Contacts() {
  return (
    <div className={styles.container}>
      

      

      
    </div>
  )
}

export async function getStaticProps(){

  return {
    props:{
      title:"contacts",
      nowpage:3,
    }
  }
}