import React, { useState } from 'react'
import Flashcard from './Flashcard'

export default function FlashcardList({ flashcards }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
    };

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + flashcards.length) % flashcards.length);
    };

    return (
        <div>
            {/* <div className="card-grid">
                {flashcards.map(flashcard => {
                    return <Flashcard flashcard={flashcard} key={flashcard.id} />
                })}

            </div> */}
            <div className="card-grid">
                {/* Render only the current flashcard */}
                <Flashcard flashcard={flashcards[currentIndex]} key={flashcards[currentIndex].id} />
            </div>
            <div>
            <button onClick={goToPrevious}>Previous</button>
            <button onClick={goToNext}>Next</button>
        </div>
      </div>
    )
}
