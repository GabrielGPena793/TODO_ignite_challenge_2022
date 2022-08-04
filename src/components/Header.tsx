import styles from "./Header.module.css"
import logoImg from "../assets/logo.png"

export function Header() {
  return (
    <header className={styles.header_todo}>
      <img src={logoImg} alt="Logo" />
    </header>
  )
}