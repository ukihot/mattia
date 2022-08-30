import type { Component } from "solid-js";

import logo from "../assets/logo.jpg";
import styles from "../App.module.css";

const Demo: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>とりあえず白紙つくったから試作</p>
      </header>
    </div>
  );
};

export default Demo;
