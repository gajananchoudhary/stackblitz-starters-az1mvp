import Link from 'next/link';
import styles from '../../styles/PricingCard.module.css';

export default function PricingCard({
  title,
  desc1,
  desc2,
  btnText,
  border,
  imageUrl,
  btnUrl,
}) {
  return (
    <div className={styles.card} style={{ border: `2px solid ${border}` }}>
      <img src={imageUrl} width="64" />
      <h1>{title}</h1>
      <p>{desc1}</p>
      {desc2 ? <p>{desc2}</p> : <div className={styles.offers}>
        <p>✓ 1 Admin</p> <p>✓ 25 Nodes</p> <p>✓ Unlimited Networks</p>{' '}
        <p>✖ Business SSO: n/a</p> <p>✓ Community Support</p> <p></p>{' '}
        <p>FREE</p> <p></p>
      </div>}
      {btnText && <Link href={btnUrl} className="btn-download">
        {btnText}
      </Link>}
    </div>
  );
}
