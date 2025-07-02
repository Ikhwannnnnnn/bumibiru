import { Routes, Route } from 'react-router-dom';
import Loading from './components/Loading';
import Maps from './pages/Maps';
import Main from './pages/Main';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <>
      <Loading />
      <div>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/maps" element={<Maps />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
