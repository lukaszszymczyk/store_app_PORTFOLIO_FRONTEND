import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import styles from "./style.module.scss";

export function Footer(): JSX.Element {
  return (
    <div className={styles.footer}>
      <div className={styles.footerStoreApp}>
        <p className={styles.footerStoreAppText}>Store App</p>

        <div className={styles.footerStoreAppLinks}>
          <a
            className={styles.link}
            href="https://github.com/lukaszszymczyk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i>
              <BsGithub className={styles.linkIcon} />
            </i>
          </a>
          <a
            className={styles.link}
            href="https://www.linkedin.com/in/lukasz-szymczyk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i>
              <BsLinkedin className={styles.linkIcon} />
            </i>
          </a>
        </div>
      </div>
    </div>
  );
}
