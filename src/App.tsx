
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ViewMovie from './pages/ViewMovie';
import ErrorPage from './pages/ErrorPage';

function App() {

  return (
    <Router>
      <div className="bg-black min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />  
          <Route path={`/movie/:movieId`} element={<ViewMovie/>} />   
          <Route path="*"  element={<ErrorPage/>} />
        </Routes>
      </div>
    </Router>
    
  )
}

export default App
