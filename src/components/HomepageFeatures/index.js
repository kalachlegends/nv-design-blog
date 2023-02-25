import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Translate, { translate } from "@docusaurus/Translate";

const FeatureList = [
  {
    title: translate({
      message: "Create branches to branch out the plot",
    }),
    img: require("@site/static/img/tree-novella.png").default,
    description: (
      <Translate>
        With the help of the novella Designer application, you can create many
        branches of the plot development
      </Translate>
    ),
  },
  {
    title: translate({ message: "Expandable editor" }),
    img: require("@site/static/img/workspace.png").default,
    description: (
      <Translate>
        With the help of the novella designer editor, you can create an event's
        on each of the slides
      </Translate>
    ),
  },
  {
    title: translate({ message: "Multi-Platform" }),
    img: require("@site/static/img/linux.png").default,
    description: (
      <Translate>
        Novels can be viewed on the computer and on the phone. So tin is the
        desktop version of novella designer
      </Translate>
    ),
  },
];

function Feature({ img, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center padding-horiz--md">
        <img class={styles.img} src={img} />
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
