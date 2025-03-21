import { Container } from "@mantine/core";
import { Ability } from "./page";

type CardProps = {
  abil: Ability;
};

export default function Card(props: CardProps) {
  const { abil } = props;
  return (
    <Container>
      <Container>
        {abil["Name"]}:{abil["List"]}/{abil["Sub list"]}
      </Container>
      {abil["Action Cost"]}
      {abil.Notes}
    </Container>
  );
}
