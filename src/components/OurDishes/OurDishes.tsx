import styles from './OurDishes.module.css'
import { InfoCard } from "../InfoCard/InfoCard"



function InfoCardContainer() {
  const infoCards = [
    {
      title: 'Hotpot', description: 'With our hotpot,  we’ve managed to put a new spin on an old classic. Simplicity is the name of the game: we use fresh ingredients and offer a variety of high-quality food at an affordable price. Are you ready for visiting us with friends and family?',
    },
    {
      title: 'Cocktails', description: 'Gather and clamor cause our BBQ fire is ON! We’re excited to be bringing you the meatiest experience right by our doorstep. Sit, sip and snack on the city’s best smoked meats right at our restaurant. ',
    },
    {
      title: 'BBQ', description: 'Best known for our delectable BBQ & Hotpot. We are stepping up our bar game with the launch of our first-ever experiential cocktail menu. Our bar is a fantastic way to spice up date night, after-work cocktails, or enjoy a much classier version of weekend night on the town.',
    }
  ]
  return (
    <>
      <section className={styles['our-dishes']}>
        <h2 className={styles['our-dishes__title']}>Our Dishes</h2>
        <div className={styles['our-dishes__info-card-container']}>
          {
            infoCards.map((infoCard) => {
              return (
                <InfoCard infoCardImage="/assets/images/food.png" infoCardTitle={infoCard.title} infoCardDescription={infoCard.description} />
              )
            })
          }
        </div>
      </section>
    </>
  )
}

export default InfoCardContainer