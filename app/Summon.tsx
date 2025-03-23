import { Container, Title, Text } from "@mantine/core";
import { Ability } from "./page";
import { HitText, XText } from "./Card";
import Attack, { AttackProps } from "./Attack";

type SummonProps = {
  attack: AttackProps;
  health: string;
  move: string;
  attackCount: string;
};

export default function Summon(props: SummonProps) {
  const { attack, health, move, attackCount } = props;
  if (!move && !attack?.damage) return;

  return (
    <Container
      m="md"
      p={0}
      bd="3px solid grey"
      bg="gray.1"
      style={{ borderRadius: "10px" }}
    >
      {health && (
        <Text span ml="md" size="md">
          Health: {XText(health)}
        </Text>
      )}
      {move && (
        <Text span ml="md" size="md">
          Move: {XText(move)}
        </Text>
      )}

      {attackCount && <Text ml="md">{attackCount + " attacks:"}</Text>}
      <Attack {...attack}></Attack>
    </Container>
  );
}
