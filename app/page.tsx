"use client";

import { useEffect, useState } from "react";
import Papa from "papaparse";

export default function Home() {
  const [abilityDB, setAbilityCSV] = useState<Record<string, any>[]>([]);

  useEffect(() => {
    fetch("./Abil.csv")
      .then((response) => response.text())
      .then((responseText) => {
        const csv = Papa.parse<Record<string, any>>(responseText, {
          header: true,
        });
        const abilities = csv?.data;
        abilities.forEach((abil) => {
          Object.keys(abil).forEach((prop) => {
            if (abil[prop] == "") {
              delete abil[prop];
            }
          });
        });
        console.log(abilities);
        setAbilityCSV(abilities);
      });
  }, []);

  return (
    <main>
      <div>Next.js on GitHub Pages test</div>
      {abilityDB.map((e, i) => (
        <div key={i} className="item">
          {e["Name"]}:{e["List"]}/{e["Sub List"]}
        </div>
      ))}
    </main>
  );
}
