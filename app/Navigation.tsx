import { Container, Title, Text, Select } from "@mantine/core";
import { AbilCSVData, Ability } from "./page";
import Card, { HitText, XText } from "./Card";
import { useEffect, useState } from "react";
import AbilityList from "./AbilityList";
import StatusCard from "./Status";
import { Rules } from "./RulesData";
import RuleCard from "./Rule";

type Section = "Abilities" | "Statuses" | "Rules";

const Sections: Section[] = ["Abilities", "Statuses", "Rules"];

export default function Navigation(props: AbilCSVData) {
  const [section, setSection] = useState<Section>("Rules");
  if (Object.entries(props.structure).length == 0) return;

  return (
    <Container>
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
        <Container>
          {props.statuses.map((stat, ind) => (
            <StatusCard {...stat} key={ind}></StatusCard>
          ))}
        </Container>
      )}
      {section == "Rules" && (
        <Container>
          {Rules.map((stat, ind) => (
            <RuleCard {...stat} key={ind}></RuleCard>
          ))}
        </Container>
      )}
    </Container>
  );
}
