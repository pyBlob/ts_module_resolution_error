export type ZType<zType extends string = string> = {
	readonly zType: zType;
};

export const ZType = <zType extends string>(zType: zType): ZType<zType> => ({
	zType,
});
