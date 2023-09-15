
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ViewMovie from './pages/ViewMovie';
import ErrorPage from './pages/ErrorPage';
import SavedMovies from './pages/SavedMovies';
import Footer from './components/Footer';
function App() {

  return (
    <Router>
      <div data-theme={"dark"}>
        <Routes>
          <Route path="/" element={<Home />} />  
          <Route path={`/movie/:movieId`} element={<ViewMovie/>} />   
          <Route path="*"  element={<ErrorPage/>} />
          <Route path="/saved-movies" element={<SavedMovies />} />
        </Routes>
      </div>
      <Footer />
    </Router>
    
  )
}

export default App
