import styles from '@/styles/components/card.module.scss'
import Image from 'next/image'

interface CardProps {
  key: string
  total: number
  entries: {
    number: string
    id: string
    name: string
    types: string
    image: {
      url: string
      width: number
      height: number
    }
  }[]
}

const Card = ({ entries }: CardProps) => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.card_number}>
          <span>{entries[0].id}</span>
        </div>
        <div className={styles.card_image}>
          <Image
            src={entries[0].image.url}
            alt='Pokemon'
            width={entries[0].image.width}
            height={entries[0].image.height}
          />
        </div>
        <div className={styles.card_footer}>
          <div className={styles.card_name}>
            <span>{entries[0].name}</span>
          </div>
          <div className={styles.card_type}>
            <span>{entries[0].types}</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
