import styles from './Hero.module.css'
import { Button } from '../Buttons/Button'

export function Hero() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.hero__wrapper}>
          <h1 className={styles['hero__wrapper-title']}>BBQ Grill & Bar</h1>
          <p className={styles['hero__wrapper-description']}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            ultrices erat vitae metus congue sollicitudin. Aliquam erat
            volutpat.
          </p>
          <div className={styles['hero__wrapper-button-wrapper']}>
            <Button variant="red">🍽️ Book a table</Button>
            <Button variant="white">🥘️ See our menu</Button>
          </div>
        </div>
        <img
          src="/assets/images/hotpot.png"
          alt="Hotpot"
          className={styles.hero__image}
        />
      </section>
    </>
  )
}
