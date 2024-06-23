import { ReactNode, createContext, useState } from "react";
import Box from "./components/box";

type ThemeType = "light" | "dark";

interface ThemeContextType {
  theme: ThemeType;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});

const ThemeProvider = ({ children }: { children: ReactNode }) => {

  const [theme, setTheme] = useState<ThemeType>("light")

  const toggleTheme = () =>{
    setTheme((prev) => (prev === "light" ? "dark" : "light"))
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

function App() {
  return (
    <ThemeProvider>
      <div>hello</div>
      <Box />
    </ThemeProvider>
  );
}

export default App;
