import { Header } from "../components/Header";
import { InputTodo } from "../components/InputTodo";
import styles from "./Todo.module.css"

export function Todo() {
  return (
    <>
      <Header />
      <main className={styles.main_container}>
        <div className={styles.main_container_form}>
          <InputTodo />

        </div>
      </main>
    </>
  )
}