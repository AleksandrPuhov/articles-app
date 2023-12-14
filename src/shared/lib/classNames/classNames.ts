type Mods = Record<string, boolean | string>;

export function classNames(
  cls: Array<string | undefined>,
  mods?: Mods
): string {
  return [
    ...cls.filter((value) => Boolean(value)),
    ...Object.entries(mods || {})
      .filter(([, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(" ");
}
