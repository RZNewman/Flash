import {
  Container,
  Title,
  Text,
  TextProps,
  Grid,
  Accordion,
} from "@mantine/core";
import { Status } from "./page";

type StatusProps = Status & { key: number };

export default function StatusCard(props: StatusProps) {
  return (
    <Container key={props.key}>
      <Text span>{props.Name} - </Text>
      <Text span>{props.Effects}</Text>
    </Container>
  );
}
