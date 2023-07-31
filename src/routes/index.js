import React, { Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
const Home = React.lazy(() => import("../pages/home"));

export default function Routers() {
  useEffect(() => {}, []);

  return (
    <div>
      <Suspense fallback={<p>Loading </p>}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </div>
  );
}
