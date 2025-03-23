import { Container, Title, Text, TextProps } from "@mantine/core";
import { Ability } from "./page";
import Attack from "./Attack";

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
  return tagText(text, /(\d+|\d?d)?X(\/2)?/, { c: "violet.8" });
}
export function HitText(text: string) {
  return tagText(text, /\//, { c: "orange.8", size: "lg" });
}

function tagText(text: string, pattern: RegExp, props: TextProps) {
  let result: RegExpExecArray | null;
  let loop = true;
  const pairs = [];
  let position = 0;
  while (loop) {
    result = pattern.exec(text.substring(position));
    loop = result !== null;
    if (result) {
      const start = position + result.index;
      position += result.index + result[0].length;
      const pair = [start, position];
      //console.log(pair);
      pairs.push(pair);
      //console.log(result[0] + ":" + text.substring(result.index, position));
    }
  }
  if (pairs.length == 0) return text;

  const elements = [];
  position = 0;
  pairs.forEach((pair) => {
    const start = pair[0];
    const end = pair[1];
    elements.push(text.substring(position, start));
    elements.push(
      <Text span {...props}>
        {text.substring(start, end)}
      </Text>
    );
    position = end;
  });
  elements.push(text.substring(position));
  return elements;
}

export default function Card(props: CardProps) {
  const { abil, id } = props;
  return (
    <Container
      m="md"
      p={0}
      bd="5px solid grey"
      key={id}
      style={{ borderRadius: "10px" }}
    >
      <Container
        m={0}
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
        {abil.Notes}
      </Container>
      <Attack
        hit={abil["Hit type"]}
        damage={abil.Damage}
        damageType={abil["Damage type"]}
        range={abil.Range}
      ></Attack>
    </Container>
  );
}
