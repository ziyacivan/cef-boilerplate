import { createTheme, ThemeProvider } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    fontFamily: 'Inter Variable, sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        ...
      </div>
    </ThemeProvider>
  );
}

export default App;
