export type BaseType<_this extends string, base> = {
	readonly kind: "BaseType";
	readonly _this: _this;
	readonly base: base;
};

export const BaseType = <_this extends string, base>(
	_this: _this,
	base: base
): BaseType<_this, base> => ({
	kind: "BaseType",
	_this,
	base,
});
