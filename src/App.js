import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components";

function App() {
  return (
    <div className="App">
      {/* MonkHood - Your Zen Professional Planner */}
      <Router>
        <Routes>
          <Route exact path="/" element={<Layout />} />
          <Route exact path="/:component" element={<Layout />} />
          <Route exact path="/create-ad" element={<Layout />} />
          <Route path="*" element={<Layout />} />
          {/* <Route
              exact
              path="/user/:create-ad"
              element={
                  <SchedulerLayout />
              }
            /> */}
          {/* <Route path="*" element={<Page404 />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
