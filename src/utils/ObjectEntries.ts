type Entries<T> = { [K in keyof T]: [K, T[K]] }[keyof T];
const ObjectEntries = <T extends object>(t: T): Entries<T>[] => Object.entries(t) as any;

export default ObjectEntries;