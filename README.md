# Trigger module resolution errors

Things to try in [ID.ts](./ID.ts):
- Add and remove `!` at `value.sample /**/ .length` (Does not produce invalid syntax)
- Convert indentation to tabs and then to spaces (Does not produce invalid syntax)
- Toggle comment `// const justaconstant = 5`
