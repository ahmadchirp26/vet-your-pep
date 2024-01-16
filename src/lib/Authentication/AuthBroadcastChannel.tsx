export const AuthBroadcastChannel = () => {
  if (typeof BroadcastChannel !== "undefined") {
    return new BroadcastChannel("auth-broadcast");
  }
  return {
    postMessage: () => {
      return;
    },
    addEventListener: () => {
      return;
    },
    removeEventListener: () => {
      return;
    },
  };
};
