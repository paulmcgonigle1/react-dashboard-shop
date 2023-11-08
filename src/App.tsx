import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Layout from './components/shared/Layout'
import Products from './components/Products'
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="products" element={<Products />} />
                </Route>
                <Route path="login" element={<div>This is login page</div>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
