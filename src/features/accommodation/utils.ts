import type { RegexKey } from "./redux/types.ts";

export const accommodationRegex: Record<RegexKey, RegExp> = {
  "length-4-128": /^.{4,128}$/,
  "no-numbers": /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü]+$/,
  "length-128-2048": /^.{128,2048}$/,
};
