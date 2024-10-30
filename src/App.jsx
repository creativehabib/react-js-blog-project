import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "@/components/frontend/Home.jsx";
import About from "@/components/frontend/About.jsx";
import { ThemeProvider } from "@/components/ThemeContext.jsx";

function App() {

  return (
    <>
        <BrowserRouter>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <Routes>
                <Route path={'/'} element={<Home />} />
                <Route path={'/about'} element={<About />} />
            </Routes>
            </ThemeProvider>
        </BrowserRouter>
    </>
  )
}

export default App
