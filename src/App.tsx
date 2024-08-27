import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

// Components
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
// import Loader from "./components/Loader/Loader";

//ui componnents
import MainContainer from "./components/UI/MainContainer/MainContainer";

//data
import { services } from "@/utils/services";

//hooks
import ScrollToTop from "@utils/hooks/ScrollToTop";

// Lazy load the pages
const HomePage = lazy(() => import("./pages/HomePage"));
const SinglePage = lazy(() => import("./pages/SinglePage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const MyJourneyPage = lazy(() => import("./pages/MyJourneyPage"));

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <MainContainer className="">
          <ScrollToTop />
          <Suspense fallback={<h2></h2>}>
            <Routes>
              <Route
                index
                path="/"
                element={<HomePage services={services} />}
              />
              <Route path="/my-journey" element={<MyJourneyPage />} />
              <Route
                path="/projects/"
                element={<ServicesPage services={services} />}
              />
              <Route path="/projects/:id" element={<SinglePage />} />
              {/* Not found */}
              <Route path="*" element={<h1>404 Not Found</h1>} />
            </Routes>
          </Suspense>
        </MainContainer>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
