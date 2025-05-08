import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./views/layouts/main-layout/MainLayout";
import { Suspense } from "react";
import Dashboard from "./views/pages/Dashboard/Dashboard";
import Product from "./views/pages/Product/ProductList";

// ============================================================================================================================================ //
// ========================================================== FLEXORA-POS - APP =============================================================== //
// ============================================================================================================================================ //

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <Suspense fallback={""}>
              <MainLayout />
            </Suspense>
          }
        >
          <Route
            path="/"
            element={
              <Suspense fallback={""}>
                <Dashboard />
              </Suspense>
            }
          />
          <Route
            path="/Product"
            element={
              <Suspense fallback={""}>
                <Product />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
