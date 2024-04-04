import { ThemeProvider } from "next-themes";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" attribute="class">
      <div className="h-screen w-screen"></div>
    </ThemeProvider>
  );
}

export default App;
