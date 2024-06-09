import React from "react";
import { Routes, Route , Navigate} from "react-router-dom";
import Home from "./pages/Home/Home";
import Quiz from "./pages/Quiz/Quiz";
import Results from "./pages/Results/Results";
import { useSelector } from "react-redux";
import { RootState } from "../src/states/store";

const App: React.FC = (): JSX.Element => {
  const { loading } = useSelector((state: RootState) => state.quiz);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />       
        {!loading && (
          <Route
            path="/quiz"
            element={
              <Quiz
              />
            }
          />
        )}     
        <Route path="/results" element={<Results />} />
        <Route path="*" element={<Navigate to="/" />} />     
      </Routes>
    </>
  );
};

export default App;

