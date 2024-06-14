import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import CreateEvent from "./pages/CreateEvent.jsx"; // Import the new CreateEvent page
import EventDetails from "./pages/EventDetails.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/create-event" element={<CreateEvent />} /> {/* Add route for CreateEvent */}
      <Route path="/event-details" element={<EventDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
