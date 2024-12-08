import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ViewDetails from "./pages/Movies/ViewDetails";
import ErrorPage from "./pages/ErrorPage";
import SavedMovies from "./pages/Movies/SavedMovies";
import Footer from "./components/Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ViewFeature from "./pages/ViewFeature";
import Header from "./components/Header";
import PagePersons from "./pages/PopularPersons/PagePersons";
import SearchPage from "./pages/SearchPage";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-black">
        <Router>
          <div
            data-theme={"aqua"}
            className="bg-black text-gray-200 min-h-screen  px-12 py-10 "
          >
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<SearchPage />} />
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
  );
}

export default App;
