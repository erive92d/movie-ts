
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ViewDetails from './pages/ViewDetails';
import ErrorPage from './pages/ErrorPage';
import SavedMovies from './pages/Movies/SavedMovies';
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
      <div className='bg-black'>

      
      <Router>
        <div data-theme={"aqua"} className=' bg-gradient-to-tr to-gray-600 from-black text-cyan-500 min-h-screen lg:w-2/3 lg:mx-auto'>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path={`/:format/:movieId`} element={<ViewDetails />} />
            <Route path={`/feature/:feat`} element={<ViewFeature />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="/popular" element={<PagePersons />} />
            <Route path="/saved-movies" element={<SavedMovies />} />
          </Routes>
          <Footer />
        </div>

      </Router>
      </div>
    </QueryClientProvider>

  )
}

export default App
