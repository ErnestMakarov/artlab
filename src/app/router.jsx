import { createBrowserRouter } from "react-router";

import Layout from "../components/layout/Layout.jsx";
import HomePage from "../pages/Home/Home.jsx";
import AboutPage from "../pages/About/About.jsx";
import DirectionsPage from "../pages/Directions/Directions.jsx";
import PricesPage from "../pages/Prices/Prices.jsx";
import GalleryPage from "../pages/Gallery/Gallery.jsx";
import ContactsPage from "../pages/Contacts/Contacts.jsx";
import PrivacyPage from "../pages/Privacy/Privacy.jsx";
import NotFound from "../pages/NotFound/NotFound.jsx";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/directions",
        element: <DirectionsPage />,
      },
      {
        path: "/prices",
        element: <PricesPage />,
      },
      {
        path: "/gallery",
        element: <GalleryPage />,
      },
      {
        path: "/contacts",
        element: <ContactsPage />,
      },
      {
        path: "/privacy",
        element: <PrivacyPage />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
