import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStaats';
import FeedbackForm from './components/FeedbackForm';
import AboutIconLink from './components/AboutIconLink';
import AboutPage from './pages/AboutPage';

import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path='/'
          element={
            <div className='container'>
              <FeedbackForm />
              <FeedbackStats />
              <FeedbackList />
            </div>
          }
          exact
        ></Route>
        <Route path='/about' element={<AboutPage />} />
      </Routes>
      <AboutIconLink />
    </Router>
  );
}
export default App;
