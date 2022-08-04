import { PlusCircle } from "phosphor-react"
import styles from "./InputTodo.module.css"

export function InputTodo() {
  return (
    <form className={styles.form_container} >
      <input 
        type="text" 
        placeholder="Adicione uma nova tarefa"
      />
      <button type="submit">
        Criar
        <PlusCircle size={16} weight="bold" color="white"/>
      </button>
    </form>
  )
}