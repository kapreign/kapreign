import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./Layouts/WrapperLayout";
import ROUTES from "./routes/routes";

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

  console.log(appRoutes, "appRoutes");
  return (
    <div className="App">
      {/* <MainLayout>
      </MainLayout> */}

      <BrowserRouter>
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
