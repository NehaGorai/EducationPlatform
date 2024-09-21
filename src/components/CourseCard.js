import React from 'react';

const CourseCard = ({ course }) => {
    return (
        <div className="bg-white flex flex-col p-4 rounded-lg shadow-md h-96"> {/* Fixed height here */}
            <img src={course.image} alt={course.title} className="rounded-md mb-4 h-40 object-cover" /> {/* Set height and object-fit */}

            <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold truncate">{course.title}</h3> {/* Added truncate for long titles */}
                <p className="text-sm truncate">{course.instructor}</p> {/* Added truncate for long names */}
            </div>

            <div className="flex justify-between items-center my-2">
                <p className="font-bold">${course.price}</p>
                <span className="mr-2">⭐ {course.rating}</span>
            </div>

            <p className="text-sm line-clamp-2">{course.description}</p> {/* Limit description lines */}

            <button className="mt-4 bg-gray-800 text-white py-2 px-4 rounded">Enroll</button>
        </div>
    );
};

export default CourseCard;
