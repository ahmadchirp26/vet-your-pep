interface PaginationProps {
  limit: number;
  offset: number;
}
interface ListsFilter {
  q?: string;
}
export const channelKeys = {
  all: ["channels"] as const,
  list: (filters: PaginationProps & ListsFilter) =>
    [...channelKeys.all, "lists", filters] as const,
};
