import { Container, Title, Text } from "@mantine/core";
import { Ability } from "./page";

type CardProps = {
  abil: Ability;
};

export default function Card(props: CardProps) {
  const { abil } = props;
  return (
    <Container p="md" bd="5px">
      <Title order={3} style={{ borderBottom: "3px" }}>
        {abil["Name"]}
      </Title>
      <Text fs="italic" size="s" pl="sm">
        {abil["Sub list"]}
      </Text>
      <Container>
        <Text span fw={700}>
          {abil["Action Cost"]}:
        </Text>
        <Text span>{abil.Notes}</Text>
      </Container>
    </Container>
  );
}
