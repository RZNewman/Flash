export type RuleData = {
  name: string;
  rule: string;
};

export const Rules: RuleData[] = [
  {
    name: "Combat turn order",
    rule: `Each side takes a fast turn, then each side takes a slow turn, with the players usually acting first. Each character can only act on either the slow or fast turn in a round`,
  },
  {
    name: "Fast turns",
    rule: "Fast turns allow 1 action, or fast actions. When taking a fast turn where you don't use the move action, you may move up to you fast movement",
  },
  {
    name: "Slow turns",
    rule: "Slow turns allow 2 actions, or slow actions. When taking a slow turn where you don't use the move action, you may move up to you slow movement",
  },
  {
    name: "Instant actions",
    rule: "Instant actions can be done at any time",
  },
  {
    name: "Colossal actions",
    rule: "Colossal actions must be declared at the start of a round before any fast turn, and resolve at the end after all slow turns if they are not interrupted. You cannot take a slow or fast turn while using a colossal action",
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
    name: "Power",
    rule: "Your power for abilities. Represented by an X in descriptions. X/2 always rounds down. dX is the appropriate dice (1=d4, 2=d6, etc...)",
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
