import { Container, Title, Text } from "@mantine/core";
import { Ability } from "./page";

type CardProps = {
  abil: Ability;
};

function translateActionCost(a: string) {
  switch (a.toLowerCase()) {
    case "1":
      return "1 Action";
    case "1a":
      return "1 Action Attack";
    case "0":
      return "On your turn";
    case "f":
      return "Fast";
    case "s":
      return "Slow";
    case "r":
      return "Reaction";
    case "c":
      return "Colossal";
    case "i":
      return "Instant";
    case "amod":
      return "On any attack";
  }
}

export default function Card(props: CardProps) {
  const { abil } = props;
  return (
    <Container m="md" bd="5px solid grey">
      <Title order={3} style={{ borderBottom: "3px solid grey" }}>
        {abil["Name"]}
      </Title>
      <Text fs="italic" size="s" pl="sm">
        {abil["Sub list"]} {abil.Tier}
      </Text>

      {abil["Action Cost"] && (
        <Text span fw={700} pr="sm">
          {translateActionCost(abil["Action Cost"])}:
        </Text>
      )}
      <Text span>{abil.Notes}</Text>
    </Container>
  );
}
