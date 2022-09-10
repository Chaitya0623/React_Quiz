import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Quiz from "./Quiz";
import { QuizProvider } from "./quizContext";

ReactDOM.render(
  // StrictMode helps inchighlighting potential problems like identifying unsafe lifecycles, warning during fetching API's
  // JSX format is used to use HTML format in JavaScript
  <React.StrictMode>
    {/* QuizProvider helps in forming a quiz */}
    <QuizProvider>
      <Quiz />
    </QuizProvider>
  </React.StrictMode>,
  document.getElementById("root")
);