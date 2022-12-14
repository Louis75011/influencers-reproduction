import { BrowserRouter, Route, Routes } from "react-router-dom";
import FirebaseProvider from "./services/firebase";
import Layout from "./components/layout/Layout";
import Home from "./components/views/Home";
import Product from "./components/views/Product";
import Explore from "./components/views/Explore";
import Work from "./components/views/Work";
import Login from "./components/views/Login";
import JoinCreator from "./components/views/JoinCreator";
import JoinBrand from "./components/views/JoinBrand";
import SignupCreator from "./components/views/SignupCreator";
import SignupBrand from "./components/views/SignupBrand";
import Error from "./components/layout/Error";
import "./App.css";

export default function App() {
  return (
    <FirebaseProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/influencers" element={<Explore />} />
            <Route path="/work" element={<Work />} />
            <Route path="/login" element={<Login />} />
            <Route path="/creator" element={<JoinCreator />} />
            <Route path="/brand" element={<JoinBrand />} />
            <Route path="/creator-signup" element={<SignupCreator />} />
            <Route path="/brand-signup" element={<SignupBrand />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </FirebaseProvider>
  );
}
