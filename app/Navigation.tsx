import { Container, Title, Text, Select } from "@mantine/core";
import { AbilCSVData, Ability } from "./page";
import Card, { HitText, XText } from "./Card";
import { useEffect, useState } from "react";
import AbilityList from "./AbilityList";
import StatusCard from "./Status";
import { Rules } from "./RulesData";
import RuleCard from "./Rule";
import { Armors, Formulas, Skills } from "./CharacterData";
import LevelUp from "./LevelUp";

type Section =
  | "Abilities"
  | "Statuses"
  | "Rules"
  | "Skills"
  | "Formulas"
  | "Armor"
  | "Level ups";

const Sections: Section[] = [
  "Abilities",
  "Statuses",
  "Rules",
  "Skills",
  "Armor",
  "Level ups",
  "Formulas",
];

export default function Navigation(props: AbilCSVData) {
  const [section, setSection] = useState<Section>("Rules");
  if (Object.entries(props.structure).length == 0) return;

  return (
    <Container p={0}>
      <Text span size="xl" fw={700} mr="lg">
        Flash
      </Text>
      <Select
        value={section}
        data={Sections}
        onChange={(val) => {
          if (val) setSection(val as Section);
        }}
      />
      {section == "Abilities" && <AbilityList {...props}></AbilityList>}
      {section == "Statuses" && (
        <Container p={0}>
          {props.statuses.map((stat, ind) => (
            <StatusCard {...stat} key={ind}></StatusCard>
          ))}
        </Container>
      )}
      {section == "Rules" && (
        <Container p={0}>
          {Rules.map((stat, ind) => (
            <RuleCard {...stat} key={ind}></RuleCard>
          ))}
        </Container>
      )}
      {section == "Skills" && (
        <Container p={0}>
          {Skills.map((skill, ind) => (
            <Text key={ind}>{skill}</Text>
          ))}
        </Container>
      )}
      {section == "Formulas" && (
        <Container p={0}>
          {Formulas.map((f, ind) => (
            <Text key={ind}>{f}</Text>
          ))}
        </Container>
      )}
      {section == "Armor" && (
        <Container p={0}>
          {Armors.map((armor, ind) => (
            <Container key={ind} bd="2px solid grey" mt="md">
              <Text size="lg" fw={700}>
                {armor.name}
              </Text>
              <Text>Movement: {armor.move}</Text>
              {armor.bonusMove && (
                <Text>Fast/Slow Movement: {armor.bonusMove}</Text>
              )}
              {armor.defense && <Text>Defense: {armor.defense}</Text>}
            </Container>
          ))}
        </Container>
      )}
      {section == "Level ups" && <LevelUp></LevelUp>}
    </Container>
  );
}
