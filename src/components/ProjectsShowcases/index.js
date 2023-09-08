import React, { useEffect } from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
const puppeteer = require('puppeteer');

const ProjectList = [
  {
    title: "Ipein Notes",
    logo: require("@site/static/img/projects/ipein/logo.png").default,
    description: (
      <>
        Découvrez mes projets de développement de logiciels passionnants.
        <br />
        Chaque projet est une histoire en soi, une solution à un défi, et une
        démonstration de mes compétences en action.
        <br />
        <button className="button button--link">
          <a href="/projects">Parcourir mes projets</a>
        </button>
      </>
    ),
    imglink: "https://anis-saied.github.io/ipein",
    demoLink: "https://anis-saied.github.io/ipein",
    detailsLink: "https://github.com/anis-saied/ipein",
    githubLink: "https://github.com/anis-saied/ipein",
  },
];

async function takeScreenshot(url, outputPath) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Navigate to the website
  await page.goto(url);
  
  // Take a screenshot of the page
  await page.screenshot({ path: outputPath });
  
  await browser.close();
}

const Project = ({ logo, title, description, imglink, demoLink, detailsLink, githubLink }) => {
  useEffect(() => {
    // Call the takeScreenshot function to capture the screenshot
    takeScreenshot(imglink, 'path/to/screenshot.png')
      .then(() => {
        console.log('Screenshot taken successfully!');
      })
      .catch((error) => {
        console.error('Error taking screenshot:', error);
      });
  }, []);

  return (
    <div class="col col--4 col--offset-4 margin-vert--md" className={styles.features}>
      <div class="card">
        <div class="card__header">
          <div class="avatar">
            <img
              class="avatar__photo"
              src={logo}
            />
            <div class="avatar__intro">
              <div class="avatar__name">{title}</div>
              <small class="avatar__subtitle">{description}</small>
            </div>
          </div>
        </div>
        <div class="card__image">
          <img
            src="path/to/screenshot.png"
            alt="Image alt text"
            title="Project Title Text 1"
          />
        </div>
        <div class="card__footer">
          <div class="button-group button-group--block">
            <button class="button button--secondary">
              <a href={demoLink} target="_blank">Demo</a>
            </button>
            <button class="button button--secondary">
              <a href={detailsLink} target="_blank">Details</a>
            </button>
            <button class="button button--secondary">
              <a href={githubLink} target="_blank">View on GitHub</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ProjectsShowcases() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {ProjectList.map((props, idx) => (
            <Project key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}