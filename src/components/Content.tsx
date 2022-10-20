import styles from '@/styles/components/content.module.scss'

import Card from '@/components/PokemonCard'

import pokemon from '@/data/pokemon.json'

const Content = () => {
  return (
    <div className={styles.content}>
      <div className={styles.content_container_card}>
        {pokemon.entries.map((entry) => (
          <Card key={entry.id} total={pokemon.total} entries={[entry]} />
        ))}
      </div>
    </div>
  )
}

export default Content
