import styles from '@/styles/pages/loading.module.scss'

import Image from 'next/image'

import pokeball from '@/assets/pokeball.png'

const Loading = () => {
  return (
    <div className={styles.loading}>
      <span className={styles.loading_text}>Catching them all...</span>
      <span className={styles.spinner}>
        <Image src={pokeball} alt='Pokeball' width={60} height={60} />
      </span>
    </div>
  )
}

export default Loading
