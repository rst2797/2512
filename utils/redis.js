import { Redis } from "ioredis";

export const rediss = new Redis(
  "rediss://default:049778b911e04996a15bbe0642425e53@us1-frank-jawfish-37844.upstash.io:37844"
);