import { Route, Router, Routes } from "solid-app-router";
import { lazy, Suspense } from "solid-js";
import { render } from "solid-js/web";

import Header from "./components/Header";
import Access from "./pages/Access";
const demo = lazy(() => import("./pages/Demo"));
const liveSchedule = lazy(() => import("./pages/LiveSchedule"));
const mattia = lazy(() => import("./pages/Mattia"));

render(
  () => (
    <Router>
      <Suspense fallback="Loading...">
        <Header />
        <Routes>
          <Route path="/" component={mattia} />
          <Route path="/liveschedule" component={liveSchedule} />
          <Route path="/demo" component={demo} />
        </Routes>
        <Access />
      </Suspense>
    </Router>
  ),
  document.getElementById("root") as HTMLElement
);
