import { Ability } from "./page";

type CardProps = {
  abil: Ability;
};

export default function Card(props: CardProps) {
  const { abil } = props;
  return (
    <div>
      <div>
        {abil["Name"]}:{abil["List"]}/{abil["Sub list"]}
      </div>
      {abil["Action Cost"]}
      {abil.Notes}
    </div>
  );
}
