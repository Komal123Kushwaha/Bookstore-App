import React, { useState, useEffect } from 'react';


import Cards from './Cards'; // Import your Cards component
import {Link} from "react-router-dom"
import axios from "axios"

function Course() {
  const[book,setBook]=useState([])
  useEffect(() =>{
    const getBook=async()=>{
      try{
        const res =await axios.get("http://localhost:4001/book");
        console.log(res.data)
        setBook(res.data)

      } catch(error){
        console.log(error)
      }
    };
    getBook();
    
  },[])
  const [selectedCategory, setSelectedCategory] = useState('Free'); // Default category is 'Free'
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    // Filter the list based on selected category
    const filterData = book.filter((data) => data.category === selectedCategory);
    setFilteredData(filterData);
  }, [selectedCategory, book]); // Re-run the filter when category or book changes
  
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center ">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you <span className="text-pink-500"> Here! :)</span>
          </h1>
          <p className="mt-12 ">
          "Step into the world of learning with our Exclusive Courses at bookStore Designed for book lovers and curious minds, our courses cover a variety of topics to expand your horizons. Whether you're looking to enhance your skills, explore new subjects, or complement your reading journey, we've got you covered. Learn at your own pace with easy-to-follow lessons and expert guidance. Plus, enjoy special discounts on course materials when you shop with us. 
          Start your journey of growth and discovery today—because knowledge is the best gift you can give yourself!"
          </p>

          {/* Dropdown for category selection */}
          <select 
            className="mt-6 p-2 border border-gray-300 rounded-md dark:bg-slate-900 dark:text-white" 
            value={selectedCategory} 
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="Free">Free</option>
            <option value="Sports">Sports</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Song">Song</option>
            {/* Add more categories as needed */}
          </select>

        <Link to ="/">
        <button className=" mx-5 mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
            Back
          </button>
          </Link>
        </div>

        {/* Display filtered courses */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {filteredData.map((course, index) => (
            <div key={index}>
              <Cards course={course} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
