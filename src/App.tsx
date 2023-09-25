
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ViewMovie from './pages/ViewMovie';
import ErrorPage from './pages/ErrorPage';
import SavedMovies from './pages/SavedMovies';
import Footer from './components/Footer';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import ViewFeature from './pages/ViewFeature';
import Header from './components/Header';
import PagePersons from './pages/PopularPersons/PagePersons';

const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div data-theme={"lemonade"} className='bg-gray-300 min-h-screen lg:w-2/3 lg:mx-auto'>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />  
            <Route path={`/movie/:movieId`} element={<ViewMovie/>} /> 
            <Route path={`/feature/:feat`} element={<ViewFeature/>} /> 
            <Route path="*"  element={<ErrorPage/>} />
            <Route path="/popular" element={<PagePersons/>} />
            <Route path="/saved-movies" element={<SavedMovies />} />
          </Routes>
          <Footer />
        </div>
       
      </Router>
    </QueryClientProvider>
   
  )
}

export default App
