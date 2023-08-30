import PlayStore from '../src/components/playStore';
import styles from './../styles/Features.module.css';
import { featuresData } from './../src/constants/featuresData';
import PricingCard from '../src/components/PricingCard';

export default function Features() {
  return (
    <section className="w-100">
      <div className={styles.heroSection}>
        <h1>Features</h1>
        <img
          src="https://images.ctfassets.net/upz5g6ntpb42/6qvJ5hAmJPDXk6PlkeHjVi/1a3f1889e3002efdbc5f3c1808e44ec1/abstract-features-bg.jpg?w=1920&h=1080&q=80&fm=webp"
          className="bannerImage"
        />
      </div>
      <div className={styles.pricingData}>
        <h1>Get Started</h1>
        <div className={styles.pricingCard}>
          {featuresData &&
            featuresData.length &&
            featuresData?.map((item) => {
              return (
                <PricingCard
                  title={item.title}
                  desc1={item.desc1}
                  desc2={item.desc2}
                  btnText={item.btnText}
                  border={item.border}
                  imageUrl={item.imageUrl}
                  btnUrl={item.btnUrl}
                />
              );
            })}
        </div>
      </div>
      <PlayStore classVar="platformFeatureContainer"/>
    </section>
  );
}
