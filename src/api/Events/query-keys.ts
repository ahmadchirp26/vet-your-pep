// interface PaginationProps {
//   limit: number;
//   offset: number;
// }
// interface ListsFilter {
//   q?: string;
// }
export const eventKeys = {
  all: ["events"] as const,
  //   list: (filters: PaginationProps & ListsFilter) =>
  //     [...eventKeys.all, "lists", filters] as const,
  detail: (id?: string) =>
    id
      ? ([...eventKeys.all, "detail", id] as const)
      : ([...eventKeys.all, "detail"] as const),
};
