export const Skills = [
  "Tough",
  "Maneuver",
  "Precision",
  "Perception",
  "Silvertounge",
  "Perform",
  "Discernment",
  "Knowledge",
  "Understanding",
  "Control",
];
export const Formulas = [
  "Light hit threshold = 4 + Defense Bonus + Armor",
  "Light + 4 = Medium ; Medium + Heavy",
  "Health = 5 + 5*Lvl + 5*HP + 2*Lvl*HP",
  "Concentration Threshold = 10 + 2*HP",
];

export type Spec = "Beast" | "Warrior" | "Elementalist" | "Scholar";

export const ClassRestrictions: Record<string, Spec[]> = {
  Sorcerer: ["Scholar", "Elementalist"],
  Cleric: ["Scholar", "Elementalist"],
  Wizard: ["Scholar", "Elementalist"],
  Warlock: ["Scholar", "Elementalist", "Warrior"],
  Bard: ["Scholar", "Elementalist", "Warrior"],
  Druid: ["Elementalist", "Beast"],
  Paladin: ["Scholar", "Warrior"],
  Magitech: ["Elementalist", "Warrior"],
  Rogue: ["Scholar", "Warrior"],
  Hexblade: ["Beast", "Warrior", "Scholar"],
  Monk: ["Beast", "Warrior", "Elementalist"],
  Ranger: ["Beast", "Warrior"],
  Primordial: ["Beast", "Warrior"],
  Fighter: ["Beast", "Warrior"],
};

export type Armor = {
  name: string;
  move: number;
  bonusMove?: number;
  defense?: number;
};

export const Armors: Armor[] = [
  { name: "None", move: 30, bonusMove: 10 },
  { name: "Padded", move: 30, defense: 2 },
  { name: "Chain", move: 25, defense: 4 },
  { name: "Plate", move: 20, defense: 6 },
];

export type LevelReward =
  | {
      abilities: number;
    }
  | {
      attack: number;
    }
  | {
      hp: number;
    }
  | {
      skill: number;
    }
  | {
      skillDistribution: number;
    }
  | {
      defense: number;
    }
  | {
      defenseAll: number;
    }
  | { style: true }
  | { styleType: true }
  | { class: number }
  | { subClass: number }
  | { power: number }
  | { OR: LevelReward[] }
  | { AND: LevelReward[] };

export const Levels: LevelReward[] = [
  {
    AND: [
      { power: 0 },
      { styleType: true },
      { skill: 8 },
      { skill: 4 },
      { skill: 4 },
    ],
  },
  {
    AND: [
      { style: true },
      { abilities: 2 },
      { OR: [{ attack: 1 }, { hp: 1 }] },
    ],
  },
  {
    AND: [
      { power: 1 },
      { class: 1 },
      { abilities: 1 },
      { defense: 5 },
      { defense: 2 },
    ],
  },
  {
    AND: [
      { style: true },
      { abilities: 1 },
      { OR: [{ attack: 1 }, { hp: 1 }] },
    ],
  },
  {
    AND: [
      { power: 2 },
      { class: 2 },
      { abilities: 1 },
      { OR: [{ hp: 1 }, { skill: 4 }, { skillDistribution: 6 }] },
    ],
  },
  {
    AND: [
      { subClass: 1 },
      { abilities: 1 },
      { attack: 1 },
      { defense: 4 },
      { defense: 1 },
    ],
  },
  {
    AND: [
      { power: 3 },
      { class: 3 },
      { abilities: 1 },
      { OR: [{ attack: 1 }, { skillDistribution: 8 }] },
    ],
  },
  {
    AND: [
      { abilities: 1 },
      { subClass: 2 },
      { OR: [{ attack: 1 }, { hp: 1 }, { style: true }] },
    ],
  },
  {
    AND: [
      { power: 4 },
      { subClass: 3 },
      { abilities: 1 },
      {
        OR: [
          { attack: 1 },
          { AND: [{ defense: 4 }, { defense: 3 }] },
          { defenseAll: 2 },
        ],
      },
    ],
  },
  {
    AND: [
      { abilities: 1 },
      { hp: 1 },
      { OR: [{ hp: 1 }, { skill: 6 }, { skillDistribution: 8 }] },
    ],
  },
];
