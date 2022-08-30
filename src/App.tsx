import type { Component } from 'solid-js';
import { Router, Routes, Route, Link } from "solid-app-router";
import logo from './logo.svg';
import styles from './App.module.css';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          とりあえず白紙つくったから試作
        </p>
      </header>
    </div>
  );
};

export default App;
