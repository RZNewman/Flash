"use client";

import { useEffect, useState } from "react";
import Papa from "papaparse";
import Card from "./Card";
import { Container, Text, Title } from "@mantine/core";

// const Name = "Name"
// const List = "List"
// const SubList = "Sub list"
// const Tier = "Tier"
// const Notes = "Notes"
// const ActionCost = "Action Cost"
// const DayLimit = "Day limit"
// const FightLimit = "Fight limit"
// const PointCost = "Point cost"
// const Length = "Length"
// const WidthLine = "Width Line"
// const Shape = "Shape"
// const AttackRange = "Range"
// const Targets = "Targets"
// const Duration = "Duration"
// const HitType = "Hit type"
// const Damage = "Damage"
// const DamageType = "Damage type"
// const Health = "Health"
// const TempHp = "Temp Hp"
// const SummonHP = "SummonHP"
// const SummonMove = "SummonMove"
// const SummonDmg = "SummonDmg"
// const SummonAtkNum = "SummonAtkNum"
// const SharedUsage = "Shared usage"

export type AbilKey =
  | "Name"
  | "List"
  | "Sub list"
  | "Tier"
  | "Notes"
  | "Action Cost"
  | "Day limit"
  | "Fight limit"
  | "Point cost"
  | "Length"
  | "Width Line"
  | "Shape"
  | "Range"
  | "Targets"
  | "Duration"
  | "Hit type"
  | "Damage"
  | "Damage type"
  | "Health"
  | "Temp Hp"
  | "SummonHP"
  | "SummonMove"
  | "SummonDmg"
  | "SummonAtkNum"
  | "Shared usage";

export type Ability = Record<AbilKey, string>;

function isValid(abil: Ability) {
  return abil.Name && (abil.Notes || abil["Action Cost"]);
}

export default function Home() {
  const [abilityDB, setAbilityCSV] = useState<Ability[]>([]);

  useEffect(() => {
    fetch("./Abil.csv")
      .then((response) => response.text())
      .then((responseText) => {
        const csv = Papa.parse<Ability>(responseText, {
          header: true,
        });
        var abilities = csv?.data;
        abilities.forEach((abil) => {
          (Object.keys(abil) as AbilKey[]).forEach((prop) => {
            if (abil[prop] == "") {
              delete abil[prop];
            }
          });
        });
        abilities = abilities.filter(isValid);
        console.log(abilities);
        setAbilityCSV(abilities);
      });
  }, []);

  return (
    <Container>
      <Title order={1}>Flash Ability List</Title>
      {abilityDB.map((e, i) => (
        <Card abil={e}></Card>
      ))}
    </Container>
  );
}
