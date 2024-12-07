
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ViewDetails from './pages/Movies/ViewDetails';
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
      <div>
      <Router>
        <div data-theme={"aqua"} className='bg-black text-white min-h-screen'>
          <Header />
          <div className='lg:w-3/4 mx-auto'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path={`/:format/:movieId`} element={<ViewDetails />} />
            <Route path={`/feature/:feat`} element={<ViewFeature />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="/popular" element={<PagePersons />} />
            <Route path="/saved-movies" element={<SavedMovies />} />
          </Routes>
          </div>
          <Footer />
        </div>

      </Router>
      </div>
    </QueryClientProvider>

  )
}

export default App
