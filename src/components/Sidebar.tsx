import { PencilLine } from "phosphor-react"
import { Avatar } from "./Avatar";

import styles from "./Sidebar.module.css"

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover}
        src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=370&q=50" 
      />

      <div className={styles.profile}>
        <Avatar src='https://github.com/rfmontes.png' />

        <strong>Rafael Fernandes</strong>
        <span>Fullstack Developer</span>
      </div>
    
      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}