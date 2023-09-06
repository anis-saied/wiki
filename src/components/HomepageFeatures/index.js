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
      </>
    ),
  },
  {
    title: "Compétences",
    Svg: require("@site/static/img/innovative.svg").default,
    description: (
      <>
        Je possède une large gamme de compétences en développement de logiciels,
        de la conception à la mise en œuvre. <br />
        Mes compétences couvrent la programmation, la gestion de bases de
        données, la sécurité et bien plus encore..
      </>
    ),
  },
  {
    title: "À propos de moi",
    Svg: require("@site/static/img/cv.svg").default,
    description: (
      <>
        Je suis un passionné de technologie avec une mission : créer des
        logiciels exceptionnels qui font une différence.
        <br />
        Découvrez qui je suis, mon parcours et ma vision du développement de
        logiciels.
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
