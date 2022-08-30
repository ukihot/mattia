import { Route, Router, Routes } from "solid-app-router";
import { lazy, Suspense } from "solid-js";
import { render } from "solid-js/web";

import Header from "./components/Header";
import Access from "./pages/Access";
import Demo from "./pages/Demo"
const liveSchedule = lazy(() => import("./pages/liveSchedule"));
const mattia = lazy(() => import("./pages/Mattia"));

render(
  () => (
    <Router>
      <Suspense fallback="Loading...">
        <Header />
        <Routes>
          <Route path="/" component={mattia} />
          <Route path="/liveschedule" component={liveSchedule} />
          <Route path="/demo" component={Demo} />
        </Routes>
        <Access />
      </Suspense>
    </Router>
  ),
  document.getElementById("root") as HTMLElement
);
