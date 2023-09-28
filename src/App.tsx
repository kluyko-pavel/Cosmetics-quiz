import "./config.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QuizPage, ResultPage } from "./pages";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <div className="main-content">
          <Routes>
            <Route path="/">
              <Route index element={<QuizPage />} />
              <Route path="results" element={<ResultPage />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
