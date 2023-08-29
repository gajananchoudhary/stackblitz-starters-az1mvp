import Head from 'next/head';
import Header from '../src/components/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>Caleb's article examples</title>
        <link rel="icon" type="image/ico" href="/img/goals.ico" />
      </Head>
      <Header />
      <section>
        <h1>Home Page</h1>
        <section id="contact">
          <h3 className="section-title">Contact Us</h3>
          <p className="section-body">
            You can Contact us via our various social media handles
          </p>
        </section>
      </section>
    </>
  );
}
