import { BrowserRouter, Route, Routes } from "react-router-dom";

// Components
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

//ui componnents
import MainContainer from "./components/UI/MainContainer/MainContainer";

//data
import { services } from "@/utils/services";

//hooks
import ScrollToTop from "@utils/hooks/ScrollToTop";
//pages
import HomePage from "./pages/HomePage";
import SinglePage from "./pages/SinglePage";
import ServicesPage from "./pages/ServicesPage";
import MyJourneyPage from "./pages/MyJourneyPage";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <MainContainer>
          <ScrollToTop />
          <Routes>
            <Route index path="/" element={<HomePage services={services} />} />
            <Route path="/my-journey" element={<MyJourneyPage />} />
            <Route
              path="/projects/"
              element={<ServicesPage services={services} />}
            />
            <Route path="/projects/:id" element={<SinglePage />} />
            {/* Not found */}
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </MainContainer>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
