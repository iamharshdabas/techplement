import { Route, Routes } from "react-router-dom";

import HomePage from "@/pages/home";
import AuthorPage from "@/pages/author";
import SearchPage from "@/pages/search";

function App() {
  return (
    <Routes>
      <Route element={<HomePage />} path="/" />
      <Route element={<SearchPage />} path="/search" />
      <Route element={<AuthorPage />} path="/:author" />
    </Routes>
  );
}

export default App;
