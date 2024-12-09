import React from 'react'

function Cards({ course }) {
  return (
    <>
    <div className="mt-4 my-3 p-3 ">
    <div className="card bg-base-100 w-90 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border ">
  <figure>
    <img
      src={course.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {course.name}
      <div className="badge badge-secondary">{course.category}</div>
    </h2>
    <p>{course.title}</p>
    <div className="card-actions flex justify-between">
      <div className="badge badge-outline">${course.price}</div>
      <div className="cursor-pointer px-2 py-1 rounded-full border-2px hover:bg-pink-500 hover:text-white p-2 duration-200">Buy Now</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Cards