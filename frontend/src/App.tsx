import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import EntertainerPage from './pages/EntertainerPage';
import EntertainerDetailsPage from './pages/EntertainerDetailsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/entertainers' element={<EntertainerPage />} />
        <Route path='/entertainers/:id' element={<EntertainerDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
