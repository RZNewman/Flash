"use client";

import { useEffect, useState } from "react";
import Papa from "papaparse";
import Card from "./Card";
import { Container, List, Select, Text, Title } from "@mantine/core";
import AbilityList from "./AbilityList";
import Navigation from "./Navigation";

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

export type Status = {
  Name: string;
  Scales: string;
  Effects: string;
};

function isValid(abil: Ability) {
  return abil.Name && (abil.Notes || abil["Action Cost"]);
}

export type AbilCSVData = {
  structure: Record<string, string[]>;
  lists: Record<string, Ability[]>;
  classLists: string[];
  statuses: Status[];
};

export default function Home() {
  const [data, setData] = useState<AbilCSVData>({
    structure: {},
    lists: {},
    classLists: [],
    statuses: [],
  });

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

        const structure: Record<string, string[]> = {};
        const lists: Record<string, Ability[]> = {};
        const classLists: string[] = [];

        abilities.forEach((abil) => {
          const SuperList = abil.List;
          const SubList = abil["Sub list"];
          if (SuperList in structure) {
            if (!structure[SuperList].find((l) => l == SubList)) {
              structure[SuperList].push(SubList);
            }
          } else {
            structure[SuperList] = [SubList];
          }

          if (SubList in lists) {
            lists[SubList].push(abil);
          } else {
            lists[SubList] = [abil];
          }
        });

        const classes = structure["Class"];
        //Some lists are class specific; remove them
        classes.forEach((c) => {
          if (structure[c]) {
            classLists.push(structure[c][0]);
            delete structure[c];
          }
        });

        const specs = structure["Spec"];
        //Some lists are incomplete; remove them
        specs.forEach((spec) => {
          const subSpecs = structure[spec];
          const subSpecsCopy = Array.from(subSpecs);
          subSpecsCopy.forEach((subSpec) => {
            if (lists[subSpec].length < 6) {
              subSpecs.splice(
                subSpecs.findIndex((s) => s == subSpec),
                1
              );
            }
          });
          structure[spec] = subSpecs;
        });

        console.log(abilities);
        console.log(structure);

        fetch("./Status.csv")
          .then((response) => response.text())
          .then((responseText) => {
            const csv = Papa.parse<Status>(responseText, {
              header: true,
            });
            var statuses = csv?.data;

            console.log(statuses);
            setData({ structure, lists, classLists, statuses });
          });
      });
  }, []);

  return <Navigation {...data}></Navigation>;
}
