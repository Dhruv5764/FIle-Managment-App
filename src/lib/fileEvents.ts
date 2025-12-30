type Listener = () => void;

const listeners: Listener[] = [];

export const fileSignal = {
  emit() {
    listeners.forEach((l) => l());
  },
  subscribe(fn: Listener) {
    listeners.push(fn);
    return () => {
      const i = listeners.indexOf(fn);
      if (i > -1) listeners.splice(i, 1);
    };
  },
};
