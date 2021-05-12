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
    </Layout>
  );
};

export default Home;
