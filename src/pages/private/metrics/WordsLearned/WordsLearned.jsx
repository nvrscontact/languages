import React, { useEffect, useState } from 'react'
import styles from './WordsLearned.module.css';
import readWords from '../../../../services/hooks/readWords';
import { addWord } from '../../../../services/hooks/addWord';


function WordsLearned() {

  const words = readWords();

  const [languageId, setLanguageId] = useState(0);
  const [word, setWord] = useState("");
  const [level,setLevel] = useState("");

 function handleSubmit(){

    /* We create an object and we send it as parameter to addWord function*/
    const newWord = {
      language_id: languageId,
      word:word,
      level:level
    };

    addWord(newWord);

  }

  return (
    
    <>
    <div className={styles.wordsLearned}>

      <div className={`header-basic`}>
        <h2>Words Learned</h2>
        <span>only those necessary to complete levels.</span>
      </div>

      <section>
          Formulario:

            <input value={languageId}
            onChange={e => setLanguageId(e.target.value)} />
            <input value={word}
            onChange={e => setWord(e.target.value)} />
            <input value={level}
            onChange={e => setLevel(e.target.value)} />


          <button onClick={handleSubmit}>Presioname</button>

      </section>

      <section className={styles.levelSection}>
        <details>
          <summary>A1- Words</summary>

          <div>
            {words.map(w => ( 
              <p key={w.id}>{w.word}</p>
            ) )}
          </div>
        </details>
      </section>
      

    </div>
    </>
  )
}

export default WordsLearned

