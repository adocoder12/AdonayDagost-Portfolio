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

function App() {
  return (
    <BrowserRouter>
      {/* ScrollToTop should be inside BrowserRouter but can stay at the top */}
      <ScrollToTop />

      <div className="app">
        <Header />

        {/* Only the middle section is constrained by MainContainer */}
        <MainContainer>
          <AnimatedRoutes services={services} />
        </MainContainer>

        {/* Footer is now a direct child of .app and will span 100% */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
