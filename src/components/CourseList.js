import React from 'react';
import CourseCard from './CourseCard';

const CourseList = ({ courses }) => {
    return (
        <div className="grid grid-cols-1 mb-16 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course) => (
                <CourseCard key={course.id} course={course} />
            ))}
        </div>
    );
};

export default CourseList;
