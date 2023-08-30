import Link from 'next/link';

export default function DownloadCard({ title, desc1, desc2, btnText }) {
  const styles = {
    backgroundColor: '#262626',
    padding: '32px',
    overflow: 'hidden',
    borderRadius: '24px',
    margin: '32px 0',
  };

  return (
    <div style={styles}>
      <h1 style={{ marginTop: '0' }}>{title}</h1>
      <p>{desc1}</p>
      {desc2 && <p>{desc2}</p>}
      <Link href="/download" className="btn-download">
        {btnText}
      </Link>
    </div>
  );
}
