import React, { useState, useEffect } from 'react';
import list from "../../public/list.json"; // Ensure this path is correct
import Cards from './Cards'; // Import your Cards component
import {Link} from "react-router-dom"
function Course() {
  const [selectedCategory, setSelectedCategory] = useState('Free'); // Default category is 'Free'
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    // Filter the list based on selected category
    const filterData = list.filter((data) => data.category === selectedCategory);
    setFilteredData(filterData);
  }, [selectedCategory]); // Re-run the filter when the category changes

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center ">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you <span className="text-pink-500"> Here! :)</span>
          </h1>
          <p className="mt-12 ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro sunt eaque,
            deserunt sint obcaecati dolores tempora! Eveniet illum tenetur rerum modi officiis
            sint quidem vero aliquam dolor? Cum animi consequatur consectetur nemo velit, earum
            quo doloremque odio dolores dolorem eligendi vitae, unde, quis expedita odit tenetur
            ratione quaerat doloribus officia!
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
