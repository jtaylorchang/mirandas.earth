import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./styles.module.css";

const Home = () => {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout title="Miranda's Earth" description="Miranda's Earth">
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--outline button--secondary button--lg whiteButton",
                styles.button
              )}
              to="https://mirandas.earth/blog"
            >
              Read my Blog
            </Link>

            <Link
              className={clsx(
                "button button--outline button--secondary button--lg whiteButton",
                styles.button
              )}
              to="https://www.linkedin.com/in/mirandapjohnson/"
            >
              Connect on LinkedIn
            </Link>
          </div>
        </div>
      </header>

      <div className="container">
        <p className={clsx(styles.mainContent)}>
          My name is Miranda Johnson and I studied Earth, Society, and
          Environmental Sustainability with a certificate in Environmental
          Writing and a minor in Business at the University of Illinois at
          Urbana-Champaign. I was one of 4 students to graduate with high
          distinction and I was the graduation speaker for my major. Read about
          my work at the University and my internships at non-profits!
        </p>
      </div>
    </Layout>
  );
};

export default Home;
