import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'

export const PortfolioRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}