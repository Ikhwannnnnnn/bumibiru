import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loading from './components/Loading';
import Maps from './pages/Maps';
import Main from './pages/Main';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Router> 
      <Loading />
      <div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/maps" element={<Maps />} />
        </Routes>
      </div>
    </Router>  
  );
}

export default App;
