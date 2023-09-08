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

        <div class="col col--4 col--offset-4 margin-vert--md">
          <div class="card">
            <div class="card__header">
              <div class="avatar">
                <img
                  class="avatar__photo"
                  src="https://avatars1.githubusercontent.com/u/69865343?s=460&v=4"
                />
                <div class="avatar__intro">
                  <div class="avatar__name">Anis SAIED</div>
                  <small class="avatar__subtitle">
                    <strong>Full-Stack Developer</strong>  <br /> VueJS, Python, Java and More ...
                  </small>
                </div>
              </div>
            </div>
            <div class="card__image">
              <img
                src="https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=350&q=80&h=350"
                alt="Image alt text"
                title="Logo Title Text 1"
              />
            </div>
            <div class="card__footer">
              <div class="button-group button-group--block">
                <button class="button button--secondary">
                  <a href="/projects">Projets</a>
                </button>
{/*                 <button class="button button--secondary">
                  <a href="/docs/intro">Projets</a>
                </button> */}
                <button class="button button--secondary">
                  <a href="cv">CV</a>
                </button>
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
