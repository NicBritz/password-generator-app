import Head from "next/head";
import Image from "next/image";
import Footer from "../components/footer";
import PasswordGenerator from "../components/passwordGenerator";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Password Generator App</title>
        <meta
          name="description"
          content="A password generator made with Next.js following a design by Frontend Mentor"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
      </Head>

      <main className={styles.main}>
        <div className={styles.container}>
          <PasswordGenerator />
          <Footer />
        </div>
      </main>
    </>
  );
}
