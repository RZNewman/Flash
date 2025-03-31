import { Container, Title, Text, Select } from "@mantine/core";
import { AbilCSVData, Ability } from "./page";
import Card, { HitText, XText } from "./Card";
import { useEffect, useState } from "react";
import AbilityList from "./AbilityList";
import StatusCard from "./Status";

type Section = "Abilities" | "Statuses";

const Sections: Section[] = ["Abilities", "Statuses"];

export default function Navigation(props: AbilCSVData) {
  const [section, setSection] = useState<Section>("Abilities");
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
    </Container>
  );
}
