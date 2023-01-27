import './App.css';
import { Routes, Route } from 'react-router-dom'
import StarshipList from './pages/StarshipList/StarshipList'
import StarshipDetails from './pages/StarshipDetails/StarshipDetails';

function App() {
  return (
    <>
      <Routes>
        <Route path='/starships' element={<StarshipList />} />
        <Route path='/starships/:id' element={<StarshipDetails />} />
      </Routes>
    </>
  )
}

export default App;
