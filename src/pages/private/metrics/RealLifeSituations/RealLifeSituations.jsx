import React, { useState } from 'react'
import findAll from '../../../../services/hooks/findAll';
import { addRow } from '../../../../services/hooks/addRow';

function RealLifeSituations() {

  const situations = findAll("situations");

  const [languageId, setLanguageId] = useState(0);
  const [situation, setSituation] = useState("");
  const [level, setLevel] = useState("");

  function addSituation() {

    const situationRow = {
      language_id: languageId,
      situation:situation,
      level: level,
      table_name: "situations"
    };

    addRow(situationRow);

  }

  return (
    <>
      <div className={`header-basic`}>
        <h2>Real Life SItuations</h2>
        <span>only those necessary to complete levels.</span>
      </div>

      {situations.map(s => (
        <p key={s.id}>{s.situation} </p>
      ))}

      <input type="text" value={languageId}
        onChange={e => setLanguageId(e.target.value)} />
      <input type="text" value={situation}
        onChange={e => setSituation(e.target.value)} />
      <input type="text" value={level}
        onChange={e => setLevel(e.target.value)} />

      <button onClick={addSituation}>Agregame</button>
    </>
  )
}

export default RealLifeSituations