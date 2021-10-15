import { ZType } from "./ZType.js";

export type ZBoolean<T extends boolean = boolean> = ZType<"boolean"> & {
	readonly sample?: readonly T[];
	readonly create: createZBoolean;
};

export type createZBoolean = <value extends boolean>(
	values: readonly value[]
) => ZBoolean<value>;
export const createZBoolean: createZBoolean = (values) => ({
	...baseZBoolean,
	sample: values,
});

export const baseZBoolean: ZBoolean = {
	...ZType("boolean"),
	create: createZBoolean,
};
