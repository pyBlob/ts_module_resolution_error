import { baseZBoolean, ZBoolean } from "./ZBoolean.js";

export type Not<value extends ZBoolean> = value extends ZBoolean<never>
    ? ZBoolean<never>
    : value extends ZBoolean<true>
    ? ZBoolean<false>
    : value extends ZBoolean<false>
    ? ZBoolean<true>
    : ZBoolean;

export const Not = <value extends ZBoolean>(value: value): Not<value> =>
    ("sample" in value && value.sample !== undefined
        ? value.sample /**/.length === 0
            ? baseZBoolean.create([])
            : value.sample.every((sample) => sample === true)
            ? baseZBoolean.create([false])
            : value.sample.every((sample) => sample === false)
            ? baseZBoolean.create([true])
            : baseZBoolean
        : baseZBoolean) as any;

// const justaconstant = 5
