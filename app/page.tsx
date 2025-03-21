"use client";

import { useState } from "react";
import Papa from "papaparse";

export default function Home() {
  const [abilityDB, setAbilityCSV] = useState([]);

  fetch("./Abil.csv")
    .then((response) => response.text())
    .then((responseText) => {
      const csv = Papa.parse(responseText, {
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
    });

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
