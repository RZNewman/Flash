import {
  Container,
  Title,
  Text,
  TextProps,
  Grid,
  Accordion,
} from "@mantine/core";
import { RuleData } from "./RulesData";

type RuleProps = RuleData & { key: number };

export default function RuleCard(props: RuleProps) {
  return (
    <Container
      key={props.key}
      p={0}
      bd="4px solid grey"
      mt="sm"
      style={{ borderRadius: "10px" }}
    >
      <Container
        m={0}
        mb="xs"
        bg="violet.9"
        style={{ borderBottom: "3px solid grey" }}
        p={0}
      >
        <Text pl="sm">{props.name}</Text>
      </Container>

      <Text pl="sm">{props.rule}</Text>
    </Container>
  );
}
