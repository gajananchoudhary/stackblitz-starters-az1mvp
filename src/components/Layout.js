import Header from './Header';
import Footer from './Footer';
export default function Layout({ children }) {
  const styles = {
    display: 'flex',
    flexDirection: 'row',
  };
  return (
    <div className={`position-relative`}>
      <Header />
      <main style={styles} className="container">
        {children}
      </main>
      <Footer />
    </div>
  );
}
