interface UpdateStr<T> {
  id: string;
  changes: Partial<T>;
}

interface UpdateNum<T> {
  id: number;
  changes: Partial<T>;
}

export type Update<T> = UpdateStr<T> | UpdateNum<T>;
