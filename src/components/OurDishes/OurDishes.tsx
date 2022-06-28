import styles from './OurDishes.module.css'
import { InfoCard } from "../InfoCard/InfoCard"

function InfoCardContainer() {
  return (
    <>
      <section className={styles['our-dishes']}>
        <h2 className={styles['our-dishes__title']}>Our Dishes</h2>
        <div className={styles['our-dishes__info-card-container']}>
          <InfoCard infoCardImage="/assets/images/food.png" infoCardTitle="Hotpot" infoCardDescription="With our hotpot,  we’ve managed to put a new spin on an old classic. Simplicity is the name of the game: we use fresh ingredients and offer a variety of high-quality food at an affordable price. Are you ready for visiting us with friends and family?" />
        </div>
      </section>
    </>
  )
}

export default InfoCardContainer