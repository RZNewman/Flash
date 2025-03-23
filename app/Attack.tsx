import { Container, Title, Text } from "@mantine/core";
import { Ability } from "./page";
import { HitText, XText } from "./Card";

export type AttackProps = {
  hit: string;
  damage: string;
  damageType?: string;
};

export default function Attack(props: AttackProps) {
  const { hit, damage, damageType } = props;
  if (!hit) return;

  return (
    <Container
      m="md"
      mt="xs"
      p={0}
      bd="3px solid grey"
      bg="gray.4"
      style={{ borderRadius: "10px" }}
    >
      <Text span size="lg" m="lg">
        Hit: {hit}
      </Text>
      <Text span size="md">
        {damage && "Damage: "}
        {damage && HitText(damage)}
        {damageType && " " + damageType}
      </Text>
    </Container>
  );
}
