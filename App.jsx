import { useState } from "react"
import { languages } from "./languages"

/**
 * Goal: Allow the user to start guessing the letters
 * 
 * Challenge: Create a new array in state to hold user's
 * guessed letters. When the user chooses a letter, add
 * that letter to this state array.
 * 
 * Don't worry about whether it was a right or wrong 
 * guess yet.
 */

export default function AssemblyEndgame() {
    const [currentWord, setCurrentWord] = useState("react")
    
    const [guess, setGuess] = useState([])
    
    function handlebtn(event){
        console.log(event)
    }
    
    //console.log(guess)
    
    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    const languageElements = languages.map(lang => {
        const styles = {
            backgroundColor: lang.backgroundColor,
            color: lang.color
        }
        return (
            <span
                className="chip"
                style={styles}
                key={lang.name}
            >
                {lang.name}
            </span>
        )
    })
    
    const letterElements = currentWord.split("").map((letter, index) => (
        <span key={index}>{letter.toUpperCase()}</span>
    ))
    
    const keyboardElements = alphabet.split("").map(letter => (
        <button onClick={handlebtn} key={letter}>{letter.toUpperCase()}</button>
    ))

    return (
        <main>
            <header>
                <h1>Assembly: Endgame</h1>
                <p>Guess the word within 8 attempts to keep the
                programming world safe from Assembly!</p>
            </header>
            <section className="game-status">
                <h2>You win!</h2>
                <p>Well done! 🎉</p>
            </section>
            <section className="language-chips">
                {languageElements}
            </section>
            <section className="word">
                {letterElements}
            </section>
            <section className="keyboard">
                {keyboardElements}
            </section>
            <button className="new-game">New Game</button>
        </main>
    )
}
