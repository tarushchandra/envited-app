import CreateEvent from "./components/CreateEvent";
import Event from "./components/Event";
import Landing from "./components/Landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/create" element={<CreateEvent />} />
          <Route path="/event" element={<Event />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
