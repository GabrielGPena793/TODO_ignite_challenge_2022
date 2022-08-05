import { Check, Trash } from "phosphor-react";
import styles from "./Tasks.module.css"
import { TasksObject } from "../Page/Todo"

interface TODOSProps {
  tasks: TasksObject[];
  onCheckedTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

export function Tasks({ tasks, onCheckedTask, onDeleteTask }: TODOSProps) {
  return (
    <>
      {tasks.map(task => (
        <div key={task.id} className={styles.task_container}>
          <div
            className={task.checked ? styles.task_checked : styles.task_container_check}
            onClick={() => onCheckedTask(task.id)}
          >
            {
              task.checked &&
              <Check
                size={20}
                weight="bold"
                className={styles.check}
                color="var(--white)"
              />
            }
          </div>

          <p className={`${styles.task_container_text} ${task.checked && styles.text_check}`}>
            {task.text}
          </p>

          <button onClick={() => onDeleteTask(task.id)} className={styles.task_container_delete}>
            <Trash size={18} weight="regular" color="var(--gray-300)" />
          </button>
        </div>
      ))
      }
    </>
  )
}