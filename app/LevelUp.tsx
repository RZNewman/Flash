import {
  Container,
  Title,
  Text,
  TextProps,
  Grid,
  Accordion,
} from "@mantine/core";
import { RuleData } from "./RulesData";
import { LevelReward, Levels } from "./CharacterData";
import { ReactNode } from "react";

function interleaf(elements: ReactNode[], spacer: ReactNode) {
  const outElements: ReactNode[] = [];
  elements.forEach((element) => {
    outElements.push(element);
    outElements.push(spacer);
  });
  outElements.pop();
  return outElements;
}

function LevelOptions(level: LevelReward) {
  return (
    <Container bd="1px solid grey" mt="sm" mb="sm">
      {"abilities" in level && (
        <Text>
          Pick {level.abilities} new{" "}
          {level.abilities > 1 ? "Abilities" : "Ability"}
        </Text>
      )}
      {"attack" in level && <Text>+{level.attack} attack</Text>}
      {"hp" in level && <Text>+{level.hp} HP</Text>}
      {"skill" in level && <Text>Gain a new skill at level {level.skill}</Text>}
      {"skillDistribution" in level && (
        <Text>
          Distribute {level.skillDistribution} points among your learned skills
        </Text>
      )}
      {"defense" in level && <Text>+{level.defense} to a defense</Text>}
      {"defenseAll" in level && (
        <Text>+{level.defenseAll} to all defenses</Text>
      )}
      {"style" in level && <Text>Pick a new Style</Text>}
      {"styleType" in level && (
        <Text>
          Pick a type of Style for a future Style: Beast, Warrior, Elementalist,
          Scholar
        </Text>
      )}
      {"class" in level && <Text>Pick a Class</Text>}
      {"subClass" in level && <Text>Pick a Sub Class</Text>}
      {"power" in level && (
        <Text>
          Your power is now {Math.max(level.power, 1)}. You can learn new
          Abilities of rank {level.power}
        </Text>
      )}
      {"AND" in level && level.AND.map((Lvl, ind) => <LevelOptions {...Lvl} />)}
      {"OR" in level &&
        interleaf(
          level.OR.map((Lvl, ind) => <LevelOptions {...Lvl} />),
          <Text>OR</Text>
        )}
    </Container>
  );
}

export default function LevelUp() {
  return (
    <Container mt="sm">
      {Levels.map((level, ind) => (
        <Container m={0} p={0} key={ind}>
          <Text>Level {ind + 1}:</Text>
          <LevelOptions {...level} />
        </Container>
      ))}
    </Container>
  );
}
