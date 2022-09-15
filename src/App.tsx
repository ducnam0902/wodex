import { lazy, Suspense } from "react";
import Skeleton from "@mui/material/Skeleton";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "./themes/theme";
import { Routes, Route, BrowserRouter } from "react-router-dom";

const Navigation = lazy(() => import("./pages/Navigation"));
const Home = lazy(() => import("./pages/Home"));
const Shop = lazy(() => import("./pages/Shop"));
const Blog = lazy(() => import("./pages/Blog"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Contact = lazy(() => import("./pages/Contact"));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <Suspense fallback={<Skeleton />}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigation />}>
              <Route index element={<Home />} />
              <Route path="wodex/shop" element={<Shop />} />
              <Route path="wodex/blog" element={<Blog />} />
              <Route path="wodex/about-us" element={<AboutUs />} />
              <Route path="wodex/contact" element={<Contact />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
