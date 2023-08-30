import PricingCard from '../src/components/PricingCard';
import styles from './../styles/Pricing.module.css';
import { pricingData } from './../src/constants/pricingData';

export default function Pricing() {
  return (
    <section className="w-100">
      <div className={styles.heroSection}>
        <h1>Pricing</h1>
        <p>ZeroTier makes networking easy for everyone - anywhere.</p>
      </div>
      <div className={styles.pricingCard}>
        {pricingData &&
          pricingData.length &&
          pricingData?.map((item) => {
            return <PricingCard title={item.title} desc1={item.desc1} desc2={item.desc2} btnText={item.btnText} border={item.border} imageUrl={item.imageUrl} btnUrl={item.btnUrl}/>
          })}
      </div>
    </section>
  );
}


