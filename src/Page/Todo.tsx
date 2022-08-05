import { Header } from "../components/Header";
import { InputTodo } from "../components/InputTodo";
import styles from "./Todo.module.css"
import { v4 as uuidV4 } from 'uuid';

import emptyTasksImg from "../assets/Clipboard.png"
import { Tasks } from "../components/Tasks";
import { useEffect, useState } from "react";
 
export interface TasksObject {
  id: string;
  text: string;
  checked: boolean;
}

export function Todo() {

  const [todos, setTodos] = useState<TasksObject[]>([])

  const [tasksCompleted, setTasksCompleted] = useState(0)

  const TodosLength = todos.length;

  function handleTaskChecked(id: string) {
    const tasks =  todos.map(todo => {
      if(todo.id === id) {
        todo.checked = !todo.checked;
      }

      return todo;
    });

    setTodos(tasks)
  }

  function handleTaskDelete(id: string) {
    const tasks = todos.filter(todo => todo.id !== id);

    setTodos(tasks)
  }

  function createTask(text: string) {
    const newTask = {
      id: uuidV4(),
      text,
      checked: false,
    }

    setTodos(oldState => [...oldState, newTask])
  }

  useEffect(() => {
    const tasksChecked = todos.filter(todo => todo.checked === true);

    setTasksCompleted(tasksChecked.length)
  }, [todos])

  return (
    <>
      <Header />
      <main className={styles.main_container}>
        <div className={styles.main_container_form}>
          <InputTodo 
            onCreateTask={createTask}
          />
          <div>
            <div className={styles.header_container_tasks}>
              <p className={styles.created_tasks}>Tarefas criadas <span>{TodosLength}</span></p>
              <p className={styles.completed_tasks}>
                Concluídas 
                <span>
                  {tasksCompleted > 0 ? `${tasksCompleted} de ${TodosLength}` : 0}
                </span>
              </p>
            </div>
            {TodosLength === 0 ?
              <div className={styles.no_tasks_container}>
                <img src={emptyTasksImg} alt="Clipboard indicando que não há tasks" />
                <p className={styles.paragraph_first}>Você ainda não tem tarefas cadastradas</p>
                <p className={styles.paragraph_second}> Crie tarefas e organize seus itens a fazer</p>
              </div>
              :
              <Tasks
                tasks={todos}
                onCheckedTask={handleTaskChecked}
                onDeleteTask={handleTaskDelete}
              />
            }
          </div>
        </div>
      </main>
    </>
  )
}