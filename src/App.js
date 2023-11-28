import "./App.css";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import MainLayout from "./Layouts/WrapperLayout";
import ROUTES from "./routes/routes";
import { useEffect } from "react";

function App() {
  const appRoutes = Object.keys(ROUTES).map((key) => {
    const route = ROUTES[key];
    if (!route.isSecured) return { ...route };
    return { ...route };
  });

  const wrapperLayout = (child, key) => {
    console.log(child, "child");
    return <MainLayout>{child}</MainLayout>;
  };

  const ScrollToTop = () => {
    const { pathname } = useLocation();
  
    useEffect(() => {
      const hash = window.location.hash;
      if (hash !== '') {
        // If there's a hash in the URL, scroll to the element
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // If there's no hash, scroll to the top of the page
        window.scrollTo(0, 0);
      }
    }, [pathname]);
  
    return null;
  };

  console.log(appRoutes, "appRoutes");
  return (
    <div className="App">
      {/* <MainLayout>
      </MainLayout> */}

      <BrowserRouter>
      <ScrollToTop/>
        <Routes>
          {appRoutes &&
            Object.keys(appRoutes).map((key) => {
              const route = appRoutes[key];
              return (
                <Route
                  key={route.key}
                  path={route.path}
                  exact={route.exact}
                  element={wrapperLayout(<route.Component />, route.key)}
                />
              );
            })}
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
