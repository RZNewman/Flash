import { Container, Title, Text, Select } from "@mantine/core";
import { AbilCSVData, Ability } from "./page";
import Card, { HitText, XText } from "./Card";
import { useEffect, useState } from "react";
import { ClassRestrictions } from "./CharacterData";

export default function AbilityList(props: AbilCSVData) {
  const { structure, lists, classLists } = props;
  if (Object.entries(structure).length == 0) return;

  const SuperLists = Object.keys(structure);
  const [SubType, setSubType] = useState<string>("");
  const [SuperType, setSuperType] = useState<string>("");

  useEffect(() => {
    if (structure[SuperType] && structure[SuperType].length == 1)
      setSubType(structure[SuperType][0]);
    else setSubType("");
  }, [SuperType]);

  return (
    <Container p={0}>
      {SuperLists.length > 0 && (
        <Select
          placeholder="List Type"
          mr="md"
          tt="capitalize"
          data={SuperLists}
          onChange={(superList) => {
            console.log(structure);
            console.log(superList);
            if (superList) setSuperType(superList);
          }}
        />
      )}
      {SuperType && structure[SuperType].length > 1 && (
        <Select
          placeholder="Sub Type"
          mr="md"
          tt="capitalize"
          data={structure[SuperType]}
          onChange={(subList) => {
            if (subList) setSubType(subList);
          }}
        />
      )}
      {SuperType == "Class" && SubType && (
        <Text m="md" fs="italic" size="lg">
          Style Restrictions: {ClassRestrictions[SubType].join(", ")}
        </Text>
      )}
      {SubType &&
        lists[SubType].map((a, i) => (
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
