export const tabs: string[] = [
  "Description",
  "Variants",
  "Combinations",
  "Price info",
];

export const moveForward = (
  currentTab: number,
  setCurrentTab: (currentTab: number) => void
) => {
  if (currentTab < tabs.length - 1) {
    setCurrentTab(currentTab + 1);
  }
};

export const moveBackward = (
  currentTab: number,
  setCurrentTab: (currentTab: number) => void
) => {
  if (currentTab > 0) {
    setCurrentTab(currentTab - 1);
  }
};
