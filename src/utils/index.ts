export function randomId(key = '000000000') {
  return (key + Math.random().toString(36).slice(2, 9)).slice(-9);
}

export function isString(value: unknown): value is string {
  return typeof value === 'string';
}

export function isNumber(value: unknown): value is number {
  return typeof value === 'number';
}

export function isArray<T>(value: unknown): value is T[] {
  return Array.isArray(value);
}

export function isEmpty<T>(array: T[] | string): boolean {
  try {
    return array.length === 0;
  } catch {
    return false;
  }
}

export type MergeClassesType = string | number | MergeClassesType[] | Record<string, boolean>;

export function mergeClasses(names: MergeClassesType): string {
  if (isString(names) || isNumber(names)) {
    return `${names}`;
  }

  if (isArray(names)) {
    return names.reduce<string>((acc, name) => {
      const tmp = mergeClasses(name);

      if (tmp) {
        return isEmpty(acc) ? tmp : `${acc} ${tmp}`;
      }

      return acc;
    }, '');
  }

  return Object.entries(names).reduce<string>((acc, [name, shouldApplyClass]) => {
    if (!shouldApplyClass) {
      return acc;
    }

    return isEmpty(acc) ? name : `${acc} ${name}`;
  }, '');
}
