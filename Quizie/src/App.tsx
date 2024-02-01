import { useEffect, useState } from "react";
import Quiz from "./components/Quiz";

interface Question {
  question: string;
  correct_answer: string;
  incorrect_answer: string[];
}

function App() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);

  const fetchQuestions = async () => {
    try {
      const url = "https://opentdb.com/api.php?amount=10";
      const response = await fetch(url);
      const data = await response.json();

      if (data.results && data.results.length > 0) {
        setQuestions(data.results);
      } else {
        console.log("No questions returned in the API response");
      }
    } catch (error) {
      console.log("Error fetching questions: ", error);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  const handleAnswerSelected = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((currentQuestionIndex + 1) % questions.length);
  };

  return (
    <div className="app-container">
      <h1>Quiz App</h1>
      <Quiz data={questions} />
    </div>
  );
}

export default App;
