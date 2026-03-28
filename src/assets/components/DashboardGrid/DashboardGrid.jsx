import styles from './DashboardGrid.module.css'


function DashboardGrid({children}) {
  return (
    <div className={styles.DashboardGrid}>{children}</div>

  )
}

export default DashboardGrid