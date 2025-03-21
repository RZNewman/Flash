"use client";

import { useState } from "react";
import Papa from "papaparse";

export default function Home() {
  const [abilityDB, setAbilityCSV] = useState<Record<string, any>[]>([]);

  fetch("./Abil.csv")
    .then((response) => response.text())
    .then((responseText) => {
      const csv = Papa.parse<Record<string, any>>(responseText, {
        header: true,
      });
      const parsedData = csv?.data;
      // const rows = Object.keys(parsedData[0]);

      // const columns = Object.values(parsedData[0]);

      // const abilities:Record<string,any>[] = [];
      // rows.forEach((e, i) => {
      //   const abil = {}

      //   abilities.push(([e], columns[i]));
      // });
      console.log(parsedData);
      setAbilityCSV(parsedData);
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
