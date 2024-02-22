export const customerKeys = {
  all: ["customers"] as const,
  detail: (id: string) => [...customerKeys.all, id] as const,
  followers: (id: string) => [...customerKeys.detail(id), "followers"] as const,
  following: (id: string) => [...customerKeys.detail(id), "following"] as const,
};
