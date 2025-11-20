export interface Stack {
    name: string;
    badgeColor: string;
    textColor: string;
    type: "main" | "secondary" | "other"
}

export const stack: Stack[] = [
    { name: "Python", badgeColor: "306998", textColor: "FFE873", type: "main" },
    { name: "Django", badgeColor: "0D3C27", textColor: "FFFFFF", type: "main" },
    { name: "PostgreSQL", badgeColor: "28537E", textColor: "FFFFFF", type: "main" },
    { name: "JavaScript", badgeColor: "F0DB4F", textColor: "000000", type: "main" },
    { name: "TypeScript", badgeColor: "3b0764", textColor: "FFFFFF", type: "main" },
    { name: "React", badgeColor: "20232A", textColor: "61DAFB", type: "main" },
    { name: "Next.js", badgeColor: "1E40AF", textColor: "FFFFFF", type: "main" },
    { name: "TailwindCSS", badgeColor: "0e7490", textColor: "FFFFFF", type: "main" },
    { name: "Svelte", badgeColor: "F1413D", textColor: "FFFFFF", type: "secondary" },
    { name: "Unittest", badgeColor: "4D0099", textColor: "FFD700", type: "secondary" },
    { name: "Jest", badgeColor: "C21325", textColor: "FFFFFF", type: "secondary" },
    { name: "Cypress", badgeColor: "E5E5E5", textColor: "058A5E", type: "secondary" },
    { name: "Zod", badgeColor: "24524F", textColor: "058A5E", type: "secondary" },
    { name: "Express", badgeColor: "404D59", textColor: "61DAFB", type: "secondary" },
    { name: "Prisma", badgeColor: "991B1B", textColor: "FFFFFF", type: "secondary" },
    { name: "Vercel", badgeColor: "000000", textColor: "FFFFFF", type: "secondary" },
    { name: "Tone.js", badgeColor: "000000", textColor: "FFFFFF", type: "other" }
];

const technologies = stack.map((elm) => elm.name)
export type TechUnion = typeof technologies[number]