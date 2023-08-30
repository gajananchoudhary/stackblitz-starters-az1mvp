import styles from './../styles/Features.module.css';

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
    </section>
  );
}
