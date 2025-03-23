import { Container, Title, Text } from "@mantine/core";
import { Ability } from "./page";
import { HitText } from "./Card";

type AttackProps = {
  hit: string;
  range: string;
  damage: string;
  damageType: string;
};

function getRange(range: string) {
  if ((range = "W")) return range;
  return range + "ft";
}

export default function Attack(props: AttackProps) {
  const { hit, range, damage, damageType } = props;
  if (!hit) return;

  return (
    <Container
      m="md"
      p={0}
      bd="3px solid grey"
      bg="gray.4"
      style={{ borderRadius: "10px" }}
    >
      <Text span size="lg" m="lg">
        Hit: {hit}
      </Text>
      <Text span size="md">
        Range: {getRange(range)} {damage && " - Damage: "}
        {damage && HitText(damage)}
        {damageType && " " + damageType}
      </Text>
    </Container>
  );
}
