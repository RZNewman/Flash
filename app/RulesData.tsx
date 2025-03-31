export type RuleData = {
  name: string;
  rule: string;
};

export const Rules: RuleData[] = [
  {
    name: "Combat turn order",
    rule: `Each side takes the following turns, with the players usually acting first.
    (Declare Colossal)
    Fast
    Slow
    (Resolve Colossal)
    `,
  },
  {
    name: "Fast turns",
    rule: "Fast turns allow 1 action, or fast actions. When taking a fast turn, you may move up to you fast movement",
  },
  {
    name: "Slow turns",
    rule: "Slow turns allow 2 actions, or slow actions. When taking a slow action, you may move up to you slow movement",
  },
  {
    name: "Instant actions",
    rule: "Instant actions can be done at any time",
  },
  {
    name: "Colossal actions",
    rule: "Colossal actions must be declared at the start of a round, and resolve at the end if they are not interrupted",
  },
  {
    name: "Defenses",
    rule: "Defenses are broken into three categories: Will, Focus, and Intuition. When making an attack, roll a d20 and add applicable bonuses, then compare against the relevant defense to determine a light/medium/heavy hit",
  },
  {
    name: "Crit",
    rule: "When rolling a 20 on an attack, the attack is a critical hit (one tier above heavy), dealing the effects of a heavy hit plus 2LVL additional damage",
  },
  {
    name: "Threatened",
    rule: "When a unit is engaged in melee range of an enemy unit, ranged attacks and spells have their hits downgraded 1 tier",
  },
  {
    name: "Cover",
    rule: "When a unit has cover from an attack, a hit against it is downgraded 1 tier",
  },
  {
    name: "Flanked",
    rule: "When a unit is engaged in melee range of two enemy units on opposite sides, hits against it are upgraded 1 tier",
  },
  {
    name: "Difficult Terrain",
    rule: "Difficult terrain takes twice as much movement to leave",
  },
  {
    name: "Concentration",
    rule: "Concentration effects last until the user takes a hit that beats their concentration score",
  },
  {
    name: "Stance",
    rule: "Stances last until the user is prone, restrained, or cannot attack. Also ends at the end of combat",
  },
  {
    name: "Ailment",
    rule: "Ailments last until the user is healed or helped",
  },
  {
    name: "Boons/Banes",
    rule: "These are dice that are added/subtracted to certain rolls or defenses, and are added together to determine the final result. These are only rolled once per round",
  },
  {
    name: "Dual wielding",
    rule: "When you have a weapon in both hands, roll an additional d20 when attacking; each weapon can hit as a separate swing",
  },
  {
    name: "Downed/Pets",
    rule: "When you are reduced to 0 health, take control of you pet in your space. If it reaches an ally, it is safe and untargetable. If it survives, it can revive you.",
  },
];
