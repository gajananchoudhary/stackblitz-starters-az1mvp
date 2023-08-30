export default function DataCard({ desc, author, imageUrl }) {
  const styles = {
    backgroundImage:
      'linear-gradient(133deg, rgb(253, 178, 93), rgb(68, 54, 202))',
    padding: '32px',
    overflow: 'hidden',
    borderRadius: '24px',
    margin: '32px 0',
    display: 'flex',
  };

  return (
    <div style={styles}>
      <img
        src={imageUrl}
        width="48px"
        height="48px"
        style={{ marginRight: '20px' }}
      />
      <div>
        <p style={{ marginTop: '0' }}>“{desc}”</p>
        <p>{author}</p>
      </div>
    </div>
  );
}
