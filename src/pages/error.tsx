import styles from '@/styles/pages/error.module.scss'

const Error = () => {
  return (
    <div className={styles.error}>
      <h1>404</h1>
      <p>
        Something went wrong. We weren&apos; t able to find any Pokemon. Please
        try again later.
      </p>
    </div>
  )
}

export default Error
