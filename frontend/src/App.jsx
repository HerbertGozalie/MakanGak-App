//import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import DirectoryPage from "./Pages/DirectoryPage/DirectoryPage";
import AboutPage from "./Pages/AboutPage";
import ContactUsPage from "./Pages/ContactUsPage";
import RegisterPage from "./Pages/ProfilePage/RegisterPage/RegisterPage";
import LoginPage from "./Pages/ProfilePage/LoginPage/LoginPage";
import RestaurantPage from "./Pages/RestaurantPage/RestaurantPage";

function App() {
  //const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/DirectoryPage" element={<DirectoryPage />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/AboutPage" element={<AboutPage />} />
          <Route path="/ContactUsPage" element={<ContactUsPage />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/RegisterPage" element={<RegisterPage />} />
          <Route path="/RestaurantPage/:id" element={<RestaurantPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
