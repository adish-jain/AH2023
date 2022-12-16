import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Story from "./pages/Story";
import Events from "./pages/Events";
import Stay from "./pages/Stay";
import Sightseeing from "./pages/Sightseeing";
import Around from "./pages/Around";
import RSVP from "./pages/RSVP";
// import NoPage from "./pages/NoPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="story" element={<Story />} />
          <Route path="events" element={<Events />} />
          <Route path="around" element={<Around />} />
          <Route path="stay" element={<Stay />} />
          <Route path="sightseeing" element={<Sightseeing />} />
          <Route path="rsvp" element={<RSVP />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
