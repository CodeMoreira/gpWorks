import { colors } from "../../tailwind.config";

export {};

declare global {
  type MyCustomColors = keyof typeof colors;
}
