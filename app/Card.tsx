import { Container, Title, Text } from "@mantine/core";
import { Ability } from "./page";

type CardProps = {
  abil: Ability;
};

export default function Card(props: CardProps) {
  const { abil } = props;
  return (
    <Container p="20px">
      <Title order={3}> {abil["Name"]}</Title>
      <Text fs="italic" size="s">
        {abil["Sub list"]}
      </Text>
      <Container>
        <Text inline={true}>{abil["Action Cost"]}:</Text>
        <Text inline={true}>{abil.Notes}</Text>
      </Container>
    </Container>
  );
}
