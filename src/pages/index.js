import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline} ✨</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/cv">
            CV Online ! 📄
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Anis SAIED portfolio"
    >
      <main>
        <div class="col col--8 col--offset-2 margin-vert--md">
          <div class="hero">
            <div class="container">
              <h1 class="hero__title">{siteConfig.title}</h1>
              <p class="hero__subtitle">
                <strong><h2>{siteConfig.tagline}</h2></strong>VueJS, Python,
                    Java and More ...
              </p>
              <div>
              <div class="button-group button-group--block">
                <Link className="button button--secondary" to="/projects">
                  Projets
                </Link>
                <Link className="button button--secondary" to="/cv">
                  CV
                </Link>
              </div>
              </div>
            </div>
          </div>
          
        </div>
      </main>
    </Layout>
  ); /* <HomepageHeader /> <HomepageFeatures />
          <div class="avatar avatar--vertical">
          <img
            class="avatar__photo avatar__photo--xl"
            src="https://lh3.googleusercontent.com/a/ACg8ocKf0BvBJwnBqKP6okfaNCJha9fkxvVLcpKrA-bRAmNDNJc=s96-c-rg-br100"
          />
          <div class="avatar__intro">
            <div class="avatar__name">Anis SAIED</div>
            <small class="avatar__subtitle">
              Full-Stack Developer | VueJS, Python, Java and More ...
              <br />
              Currently working at Freelancer. <br />
              Connect with me on
              <a href="https://linkedin.com/in/anis-saied"> @anis-saied</a>.
            </small>
          </div>
        </div>*/
}
