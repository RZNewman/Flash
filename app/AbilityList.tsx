import { Container, Title, Text, Select } from "@mantine/core";
import { AbilCSVData, Ability } from "./page";
import Card, { HitText, XText } from "./Card";
import { useEffect, useState } from "react";

export default function AbilityList(props: AbilCSVData) {
  const { structure, lists, classLists } = props;
  if (Object.entries(structure).length == 0) return;

  const SuperLists = Object.keys(structure);
  const [displayAbilities, setAbilityList] = useState<Ability[]>([]);
  const [AbilityLists, setAbilityLists] = useState<string[]>([]);

  useEffect(() => {
    if (AbilityLists.length == 1) setAbilityList(lists[AbilityLists[0]]);
    else setAbilityList([]);
  }, [AbilityLists]);

  return (
    <Container>
      <Title order={1}>Flash Ability List</Title>
      {SuperLists.length > 0 && (
        <Select
          placeholder="List Type"
          mr="md"
          tt="capitalize"
          data={SuperLists}
          onChange={(superList) => {
            console.log(structure);
            console.log(superList);
            if (superList) setAbilityLists(structure[superList]);
          }}
        />
      )}
      {AbilityLists.length > 1 && (
        <Select
          placeholder="Sub Type"
          mr="md"
          tt="capitalize"
          data={AbilityLists}
          onChange={(subList) => {
            if (subList) setAbilityList(lists[subList]);
          }}
        />
      )}
      {displayAbilities.map((a, i) => (
        <Card
          abil={a}
          id={i}
          abilList={
            classLists.findIndex((c) => c == a.Name) >= 0
              ? lists[a.Name]
              : undefined
          }
        ></Card>
      ))}
    </Container>
  );
}
