import { Component } from "solid-js";
import "beercss";
import "material-dynamic-colors";

const Header: Component = () => {
  return (
    <header class="fill">
      <nav>
        <button class="circle transparent">
          <i>menu</i>
        </button>
        <h5 class="max center-align">Title</h5>
      </nav>
    </header>
  );
};

export default Header;
