import * as React from "react";
import { createRoot } from "react-dom/client"; // ✅ Import createRoot from correct package
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Home from "./pages/Home";
import Destination from "./pages/Destination.jsx";
import Airlines from "./pages/Airlines.jsx";

import Contact from "./pages/Contact.jsx";
import AboutUs from "./pages/About.jsx";
import Privacypolicy from "./pages/Privacypolicy.jsx";
import Term from "./pages/Term.jsx";
import Refundpolicy from "./pages/Refundpolicy.jsx";
import Disclaimer from "./pages/Disclaimer.jsx";
import Traveltip from "./pages/Traveltip.jsx";
import Faq from "./pages/Faq.jsx";


const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "destination", element: <Destination /> },
      { path: "airlines", element: <Airlines /> },
      { path: "about-us", element: <AboutUs/> },
      { path: "contact", element: <Contact /> },
      { path: "privacy-policy", element: <Privacypolicy/> },
      { path: "terms-conditions", element: <Term/> },
      { path: "refund-policy", element: <Refundpolicy/> },
      { path: "disclaimer", element: <Disclaimer/> },
      { path: "travel-tips", element: <Traveltip/> },
      { path: "faq", element: <Faq/> }
    ]
  }
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
