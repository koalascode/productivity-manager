import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import DailyHighlight from '../components/dailyhighlight'
import ToDoList from '../components/todolist'
import NavBar from '../components/navbar'

export default function Home() {
  return (
    <div className={styles.container}>
      <NavBar />

      <div className={styles.widgetmain}>
        <DailyHighlight />
        <ToDoList />
      </div>
      
    </div>
  )
}
