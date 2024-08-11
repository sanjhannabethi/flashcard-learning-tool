import React, { useState } from "react";
import FlashcardList from "./FlashcardList";
import './app.css'

function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS)
  return (
    <FlashcardList flashcards = {flashcards}/>
  );
}

const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    question: 'What is 2 + 2?',
    answer: '4',
    options: [
      '2',
      '3',
      '4',
      '5'
    ]
  },
  {
    id: 2,
    question: 'What is 7 + 9?',
    answer: '16',
    options: [
      '15',
      '14',
      '16',
      '17'
    ]
  }
]
export default App;
