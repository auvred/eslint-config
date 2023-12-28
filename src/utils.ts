export function renameRules<T>(
  rules: Record<string, T>,
  mapFromTo: Record<string, string>,
): Record<string, T> {
  return Object.fromEntries(
    Object.entries(rules).map(([key, value]) => {
      for (const [from, to] of Object.entries(mapFromTo)) {
        if (key.startsWith(from)) {
          return [to + key.slice(from.length), value];
        }
      }
      return [key, value];
    }),
  );
}

export function autoRenameRules<T>(
  rules: Record<string, T>,
): Record<string, T> {
  return renameRules(rules, {
    "@typescript-eslint/": "ts/",
  });
}
