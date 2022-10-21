import styles from "../styles/footer.module.css";

const Footer = () => {
  return (
    <div className={styles.content}>
      Challenge by
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel="noreferrer"
      >
        Frontend Mentor
      </a>
      . Coded by
      <a
        href="https://www.frontendmentor.io/profile/NicBritz"
        target="_blank"
        rel="noreferrer"
      >
        Nic Britz{" "}
      </a>
    </div>
  );
};

export default Footer;
