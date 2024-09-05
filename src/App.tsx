import { BrowserRouter } from "react-router-dom";
// import { lazy } from "react";

// Components
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
// import Loader from "./components/Loader/Loader";

//ui componnents
import MainContainer from "./components/UI/MainContainer/MainContainer";
import AnimatedRoutes from "./components/AnimatedRoutes/AnimatedRoutes";

//data
import { services } from "@/utils/services";

//hooks
import ScrollToTop from "@utils/hooks/ScrollToTop";

// Lazy load the pages
// const HomePage = lazy(() => import("./pages/HomePage"));
// const SinglePage = lazy(() => import("./pages/SinglePage"));
// const ServicesPage = lazy(() => import("./pages/ServicesPage"));
// const MyJourneyPage = lazy(() => import("./pages/MyJourneyPage"));

//pages
// import HomePage from "./pages/HomePage";
// import SinglePage from "./pages/SinglePage";
// import ServicesPage from "./pages/ServicesPage";
// import MyJourneyPage from "./pages/MyJourneyPage";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <MainContainer>
          <ScrollToTop />
          <AnimatedRoutes services={services} />
        </MainContainer>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
