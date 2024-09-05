import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { lazy } from "react";

import { TServices } from "@/utils/types/types";

// Lazy load the pages
const HomePage = lazy(() => import("@/pages/HomePage"));
const SinglePage = lazy(() => import("@/pages/SinglePage"));
const ServicesPage = lazy(() => import("@/pages/ServicesPage"));
const MyJourneyPage = lazy(() => import("@/pages/MyJourneyPage"));

export default function AnimatedRoutes({
  services,
}: {
  services: TServices[];
}) {
  const location = useLocation();

  const pageTransitionVariants = {
    initial: {
      y: 10,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
    exit: {
      y: -10,
      opacity: 0,
    },
  };

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          index
          path="/"
          element={
            <motion.div
              variants={pageTransitionVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut" }}
              key="home"
            >
              <HomePage services={services} />
            </motion.div>
          }
        />
        <Route
          path="/my-journey"
          element={
            <motion.div
              variants={pageTransitionVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut" }}
              key="my-journey"
            >
              <MyJourneyPage />
            </motion.div>
          }
        />
        <Route
          path="/projects"
          element={
            <motion.div
              variants={pageTransitionVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut" }}
              key="projects"
            >
              <ServicesPage services={services} />
            </motion.div>
          }
        />
        <Route
          path="/projects/:id"
          element={
            <motion.div
              variants={pageTransitionVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut" }}
              key="single-page"
            >
              <SinglePage />
            </motion.div>
          }
        />
        {/* 404 route */}
        <Route
          path="*"
          element={
            <motion.div
              variants={pageTransitionVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut" }}
              key="404"
            >
              <h1>404 Not Found</h1>
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}
