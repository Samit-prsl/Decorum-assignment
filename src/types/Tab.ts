export interface TabContextType {
  current: number;
  setCurrent: (current: number) => void;
}
export interface TabProviderProps {
  children: React.ReactNode;
}
