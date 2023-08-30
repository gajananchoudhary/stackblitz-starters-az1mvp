import styles from './../styles/Download.module.css';

export default function Download() {
  return (
    <section className="w-100">
      <div className={styles.heroSection}>
        <h1>Download</h1>
        <h2>Latest Version | 1.12.1</h2>
        <img
          src="https://images.ctfassets.net/upz5g6ntpb42/137LSHK2tKJenPL6wDhLKE/4f154179a0ed4235ff098d7704d4ce6b/abstract-downloads-bg-v5.jpg?w=1920&h=1080&q=80&fm=webp"
          className="bannerImage"
        />
      </div>
    </section>
  );
}
