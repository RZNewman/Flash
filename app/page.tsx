"use client";

import { useState } from "react";
import Papa from "papaparse";
import AbilityCSV from "./Abil.csv";

export default function Home() {
  const [abilityDB, setAbilityCSV] = useState([]);

  const reader = new FileReader();

  // Event listener on reader when the file
  // loads, we parse it and set the data.
  reader.onload = async ({ target }) => {
    if (!target) return;
    if (!target.result) return;
    const csv = Papa.parse(target.result, {
      header: true,
    });
    const parsedData = csv?.data;
    const rows = Object.keys(parsedData[0]);

    const columns = Object.values(parsedData[0]);
    const res = rows.reduce((acc, e, i) => {
      return [...acc, [[e], columns[i]]];
    }, []);
    console.log(res);
    setAbilityCSV(res);
  };
  reader.readAsText(AbilityCSV);

  return (
    <main>
      <div>Next.js on GitHub Pages test</div>
      {abilityDB.map((e, i) => (
        <div key={i} className="item">
          {e[0]}:{e[1]}
        </div>
      ))}
    </main>
  );
}
