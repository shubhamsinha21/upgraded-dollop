import React, { useState, useEffect } from "react";

interface Question {
question:string;
correct_answer:string;
incorrect_answer:
}

const Quiz = () => {
  const [questions, setQuestions] = useState<string[]>([]);

  return <div>Quiz</div>;
};

export default Quiz;
