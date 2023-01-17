import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Story from "./pages/Story";
import Events from "./pages/Events";
import Stay from "./pages/Stay";
import Sightseeing from "./pages/Sightseeing";
import Around from "./pages/Around";
import RSVP from "./pages/RSVP";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./scrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="story" element={<Story />} />
          <Route path="events" element={<Events />} />
          <Route path="around" element={<Around />} />
          <Route path="stay" element={<Stay />} />
          <Route path="sightseeing" element={<Sightseeing />} />
          <Route path="rsvp" element={<RSVP />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
