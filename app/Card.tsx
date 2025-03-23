import { Container, Title, Text, TextProps, Grid } from "@mantine/core";
import { Ability } from "./page";
import Attack from "./Attack";
import Summon from "./Summon";

type CardProps = {
  abil: Ability;
  id: number;
};

function translateActionCost(a: string) {
  switch (a.toLowerCase()) {
    case "1":
      return "1";
    case "1a":
      return "1 Atk";
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
    case "ooc":
      return "Out of combat";
  }
}

export function XText(text: string) {
  return tagText(text, [/([\d\.]+|\d?d)?X(\/2)?/], [{ c: "violet.5" }]);
}
export function HitText(text: string) {
  return tagText(
    text,
    [/\//, /([\d\.]+|\d?d)?X/],
    [{ c: "orange.8", size: "lg" }, { c: "violet.5" }]
  );
}

function tagText(text: string, patterns: RegExp[], propsList: TextProps[]) {
  if (!text) return "";
  let result: RegExpExecArray | null;
  let loop = true;
  const pairs: number[][] = [];
  let position: number;
  patterns.forEach((pattern, index) => {
    position = 0;
    loop = true;
    while (loop) {
      result = pattern.exec(text.substring(position));
      loop = result !== null;
      if (result) {
        const start = position + result.index;
        position += result.index + result[0].length;
        const pair = [start, position, index];
        //console.log(pair);
        pairs.push(pair);
        //console.log(result[0] + ":" + text.substring(result.index, position));
      }
    }
  });

  if (pairs.length == 0) return text;

  pairs.sort((p1, p2) => p1[0] - p2[0]);
  const elements = [];
  position = 0;
  pairs.forEach((pair) => {
    const start = pair[0];
    const end = pair[1];
    elements.push(text.substring(position, start));
    elements.push(
      <Text span {...propsList[pair[2]]}>
        {text.substring(start, end)}
      </Text>
    );
    position = end;
  });
  elements.push(text.substring(position));
  return elements;
}

function getRange(range: string) {
  if (range == "W" || range == "self") return range;
  return range + "ft";
}

export default function Card(props: CardProps) {
  const { abil, id } = props;
  const extras = {
    cost: abil["Point cost"],
    duration: abil.Duration,
    health: abil.Health,
    "temp health": abil["Temp Hp"],
    shape: abil.Shape,
    size: abil.Length,
    width: abil["Width Line"],
    targets: abil.Targets,
    range: abil.Range,
  };

  const extrasArray = Object.entries(extras).filter((pair) => pair[1]);

  return (
    <Container
      m="md"
      p={0}
      bd="5px solid grey"
      pb="xs"
      key={id}
      style={{ borderRadius: "10px" }}
    >
      <Container
        m={0}
        mb="xs"
        bg="violet.9"
        style={{ borderBottom: "3px solid grey" }}
        p={0}
      >
        <Text size="xl" fw={700} pl="sm">
          {abil["Name"]}
        </Text>
        <Text
          fs="italic"
          size="s"
          p={0}
          tt="capitalize"
          ta="right"
          lh={0}
          mr="md"
          pos="relative"
          top="-15px"
        >
          {abil["Sub list"]} {abil.Tier}
        </Text>
      </Container>
      {(abil["Day limit"] || abil["Fight limit"]) && (
        <Container>
          <Text pr="sm">
            {XText(abil["Day limit"] || abil["Fight limit"])} per{" "}
            {abil["Day limit"] ? "day" : "fight"}
          </Text>
        </Container>
      )}

      <Container>
        {abil["Action Cost"] && (
          <Text span fw={700} pr="sm">
            {translateActionCost(abil["Action Cost"])}:
          </Text>
        )}
        {HitText(abil.Notes)}
      </Container>
      {!abil.SummonDmg && (
        <Attack
          hit={abil["Hit type"]}
          damage={abil.Damage}
          damageType={abil["Damage type"]}
        ></Attack>
      )}
      <Summon
        health={abil.SummonHP}
        move={abil.SummonMove}
        attackCount={abil.SummonAtkNum}
        attack={{ damage: abil.SummonDmg, hit: abil["Hit type"] }}
      ></Summon>
      {extrasArray.length > 0 && (
        <Grid>
          {extrasArray.map((pair) => {
            return (
              <Container mr="sm">
                <Text span tt="capitalize" fw={700} mr="xs">
                  {pair[0]}:
                </Text>
                <Text span tt="capitalize">
                  {HitText(pair[1])}
                </Text>
              </Container>
            );
          })}
        </Grid>
      )}
    </Container>
  );
}
