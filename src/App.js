import {Routes, Route} from 'react-router-dom'
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});




function App() {
  return (
    <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <main>This app is using the dark mode</main>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About/>} />
      <Route path='/projects' element={<Projects />} />
      </Routes>
  </ThemeProvider>

   
)}

export default App;
