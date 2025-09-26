import { useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import PageNavBar from './components/PageNavBar'
import CategoryList from './components/CategoryList'
import ErrorNotFound from './components/ErrorNotfound'
import RandomRecipe from './components/RandomRecipe'
import RecipeDetails from './components/RecipeDetails'
import CategoryRecipes from './components/CategoryRecipes'

const App = () => {

  return (
    <div className="site-wrapper">
      <BrowserRouter>
        <PageNavBar />
        <Routes>
          <Route path="/" element={<CategoryList />} />
          <Route path="/RandomPage" element={<RandomRecipe />} />
          <Route path="/a/:strCategory/:idMeal" element={<RecipeDetails />} />
          <Route path="/a/:strCategory" element={<CategoryRecipes />} />
          <Route path="*" element={<ErrorNotFound />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
