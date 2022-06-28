import styles from './InfoCard.module.css'
import Image from 'next/image'

interface Props {
  infoCardImage: string,
  infoCardTitle: string,
  infoCardDescription: string
}

export function InfoCard({ infoCardImage, infoCardTitle, infoCardDescription }: Props) {
  return (
    <>
      <article className={styles['info-card']}>
        <div className={styles['info-card__image-wrapper']}>
          <Image src={infoCardImage} alt="Food" width={500} height={500} className={styles['info-card__image-wrapper__image']} />
        </div>
        <h3 className={styles['info-card__title']}>{infoCardTitle}</h3>
        <p className={styles['info-card__description']}>{infoCardDescription}</p>
      </article>
    </>
  )
}