import styles from '@/styles/components/header.module.scss'

const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.header_text}>
          <h2>The Online Pokedex</h2>
        </div>
      </div>
    </>
  )
}

export default Header
