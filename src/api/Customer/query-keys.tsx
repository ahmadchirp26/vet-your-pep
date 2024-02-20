export const customerKeys = {
  all: ["getCustomer"] as const,
  detail: (id: string) => [...customerKeys.all, id] as const,
};
