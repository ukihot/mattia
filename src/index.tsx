import { Route, Router, Routes } from "solid-app-router";
import { lazy, Suspense } from "solid-js";
import { render } from "solid-js/web";

import Header from "./components/Header";
const liveSchedule = lazy(() => import("./pages/liveSchedule"));
const mattia = lazy(() => import("./pages/Mattia"));

render(
  () => (
    <Router>
      <Suspense fallback="Loading...">
        <Header />
        <Routes>
          <Route path="/" component={mattia} />
          <Route path="/liveSchedule" component={liveSchedule} />
        </Routes>
      </Suspense>
    </Router>
  ),
  document.getElementById("root") as HTMLElement
);
