import DataCard from '../src/components/DataCard';
import styles from './../styles/Home.module.css';
import Link from 'next/link';
import { homeData } from './../src/constants/homeData';
import PricingCard from '../src/components/PricingCard';
import { pricingData } from './../src/constants/pricingData';
import stylesPricing from './../styles/Pricing.module.css';

export default function Home() {
  return (
    <>
      <section className="w-100">
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1>Securely connect any device, anywhere.</h1>
            <p>
              ZeroTier lets you build modern, secure multi-point virtualized
              networks of almost any type. From robust peer-to-peer networking
              to multi-cloud mesh infrastructure, we enable global connectivity
              with the simplicity of a local network.
            </p>
            <Link
              href="https://accounts.zerotier.com/auth/realms/zerotier/protocol/openid-connect/auth?client_id=zt-central&redirect_uri=https%3A%2F%2Fmy.zerotier.com%2Fauth%2Fcallback&response_type=code&scope=openid+profile+email+offline_access&state=653b546ac9cf4a22a076c90b59e9aa97&code_challenge=LVBLgWK6uRKaaZoNxl_-TzuYAPkoE1x2q4VZ2CO-c7g&code_challenge_method=S256&response_mode=query"
              target="_blank"
              className="yellow-btn"
            >
              Get ZeroTier
            </Link>
            <Link className="btn-black" href="/features">
              Learn More
            </Link>
          </div>
          <img
            src="https://images.ctfassets.net/upz5g6ntpb42/49gBC4KFBaOZyIR1IbLve9/f0a3b50a46cca61837370acad6fbd49f/flat-abstract-wireframe-background-v4.jpg?w=1920&h=1080&q=80&fm=webp"
            className="bannerImage"
          />
        </div>
        <p className={styles.heroFooter}>
          🔔 NEW! ZeroTier Summer 2023 Release:{' '}
          <Link
            href="https://www.zerotier.com/download/?utm_source=HPd&_gl=1*z2kitc*_up*MQ..*_ga*MTI4MzE5NDQ1LjE2OTMzNDA2ODI.*_ga_NX38HPVY1Z*MTY5MzM0MDY3OS4xLjAuMTY5MzM0MDY3OS4wLjAuMA.."
            target="_blank"
          >
            Download 1.12.1
          </Link>{' '}
          -{' '}
          <Link
            href="https://www.zerotier.com/blog/zerotier-summer-2023-release-1-12-0/?utm_source=HPrm"
            target="_blank"
          >
            Read More
          </Link>
        </p>
        {homeData &&
          homeData.length &&
          homeData?.map((item) => {
            return (
              <DataCard
                desc={item?.desc}
                author={item?.author}
                imageUrl={item?.imageUrl}
              />
            );
          })}
        <div className={stylesPricing.heroSection}>
          <h1>Pricing</h1>
          <p>ZeroTier makes networking easy for everyone - anywhere.</p>
        </div>
        <div className={stylesPricing.pricingCard}>
          {pricingData &&
            pricingData.length &&
            pricingData?.map((item) => {
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
      </section>
    </>
  );
}
