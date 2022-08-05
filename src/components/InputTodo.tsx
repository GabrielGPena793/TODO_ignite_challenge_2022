import { PlusCircle } from "phosphor-react"
import { FormEvent, InvalidEvent, useRef } from "react";
import styles from "./InputTodo.module.css"

interface InputTodoProps {
  onCreateTask: (text: string) => void;
}

export function InputTodo({ onCreateTask }: InputTodoProps) {

  const inputRef = useRef<HTMLInputElement>(null)

  function handleCreateTask(event: FormEvent) {
    event.preventDefault()

    const text = inputRef.current?.value;

    if(text) {
      onCreateTask(text)
      inputRef.current.value = "";
    }
  }

  function handleInvalidField(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Preencha o campo para adicionar a task")
  }

  function handleTextTaskChange(event: InvalidEvent<HTMLInputElement>){
    event.target.setCustomValidity("")
  }

  return (
    <form onSubmit={handleCreateTask} className={styles.form_container} >
      <input 
        type="text" 
        placeholder="Adicione uma nova tarefa"
        ref={inputRef}
        required
        onInvalid={handleInvalidField}
        onChange={handleTextTaskChange}
      />
      <button type="submit">
        Criar
        <PlusCircle size={16} weight="bold" color="white"/>
      </button>
    </form>
  )
}