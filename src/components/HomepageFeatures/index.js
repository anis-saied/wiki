import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Projets",
    Svg: require("@site/static/img/project_completed.svg").default,
    description: (
      <>
        Découvrez mes projets de développement de logiciels passionnants.
        <br />
        Chaque projet est une histoire en soi, une solution à un défi, et une
        démonstration de mes compétences en action.
        <br />
        <button class="button button--link"><a href="/projects">Parcourir mes projets</a></button>
      </>
    ),
  },
  {
    title: "Tutoriels",
    Svg: require("@site/static/img/innovative.svg").default,
    description: (
      <>
        Parcourez mes guides de développement logiciel, incluant des conseils,
        les dernières nouveautés et des astuces pratiques.
         <br />
        <button class="button button--link"><a href="/docs/intro">Parcourir mes tutoriels</a></button>
      </>
    ),
  },
  {
    title: "À propos de moi",
    Svg: require("@site/static/img/cv.svg").default,
    description: (
      <>
        Passionné de technologie, je crée des logiciels qui font la différence.
        <br />
        Découvrez qui je suis et mon parcours et mes compétences.
        <br />
        <button class="button button--link"><a href="/cv">Voir mon CV</a></button>
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
