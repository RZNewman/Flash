import { Container, Title, Text } from "@mantine/core";
import { Ability } from "./page";

type CardProps = {
  abil: Ability;
};

export default function Card(props: CardProps) {
  const { abil } = props;
  return (
    <Container m="md" bd="5px solid grey">
      <Title order={3} style={{ borderBottom: "3px solid grey" }}>
        {abil["Name"]}
      </Title>
      <Text fs="italic" size="s" pl="sm">
        {abil["Sub list"]}
      </Text>

      <Text span fw={700} pr="sm">
        {abil["Action Cost"]}:
      </Text>
      <Text span>{abil.Notes}</Text>
    </Container>
  );
}
