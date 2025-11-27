import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import ItemList from './components/ItemList/ItemList'
import Navbar from './components/Navbar/Navbar'
import { items } from './data/data'
import Category from './components/Category/Category'

function App() {
  const [itemsData, setItemsData] = useState(items);

  // Get All Categories Unique
  const allCategory = ['الكل', ...new Set(items.map((item) => item.category))];
  console.log(allCategory);

  // Filter By Category 
  const filterByCategory = (cat) => {
    if (cat === "الكل") {
      setItemsData(items);
    } else {
      const newCategoryArray = items.filter((items) => items.category === cat)
      setItemsData(newCategoryArray);
    }
  }
  // Filter By Search 
  const filterBySearch = (word) => {
    if (word !== "") {
      const newCategoryArray = items.filter((items) => items.title === word)
      setItemsData(newCategoryArray);
    }
  }


  return (
    <>
      {/* Body */}
      <div className='bg-[#f8f8f8] h-screen'>
        <Navbar filterBySearch={filterBySearch} />
        {/* Container */}
        <div className='px-[15px]'>
          <Header />
          <div className='flex justify-center'>
            <Category filterByCategory={filterByCategory} allCategory={allCategory} />
          </div>
          <ItemList itemsData={itemsData} />
        </div>
      </div>
    </>
  )
}

export default App
