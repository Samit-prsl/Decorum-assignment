import { TabContextType, TabProviderProps } from "@/types/Tab";
import { createContext, useContext, useState } from "react";

const defaultTabContext: TabContextType = {
  current: 0,
  setCurrent: () => {},
};

export const TabContext = createContext<TabContextType>(defaultTabContext);

export const useTabContext = () => useContext(TabContext);

export const TabProvider = ({ children }: TabProviderProps) => {
  const [current, setCurrent] = useState(defaultTabContext.current);

  return (
    <TabContext.Provider
      value={{
        current,
        setCurrent,
      }}
    >
      {children}
    </TabContext.Provider>
  );
};
