import { SeedingResult } from './seeding';
import { Player } from "./player";

export interface Team {
    FullName: string;
    FlagName: string;
    Acronym: string;
    SeedingResults?: SeedingResult[];
    Seed: number;
    LastYearPlacing: number;
    AverageRank?: number;
    Players: Player[];
}
