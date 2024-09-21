import Header from './components/Header';
import Hero from './components/Hero';
import Filter from './components/Filter';
import Sort from './components/Sort';
import React, { useState } from 'react';
import CourseList from './components/CourseList';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';

const coursesData = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdlYnxlbnwwfHwwfHx8MA%3D%3D',
    title: 'JavaScript for Beginners',
    instructor: 'John Doe',
    rating: 4.5,
    price: 29.99,
    duration: '12h',
    description: 'Learn the basics of JavaScript in this beginner-friendly course.',
  },

  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Node for Beginners',
    instructor: 'Liaana Jain',
    rating: 5.5,
    price: 49.99,
    duration: '15h',
    description: 'Learn the basics of Node in this beginner-friendly course.',
  },

  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Linux for Beginners',
    instructor: 'Rahana Doe',
    rating: 5.5,
    price: 49.99,
    duration: '15h',
    description: 'Learn the basics of Linux in this beginner-friendly course.',
  },

  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Git for Beginners',
    instructor: 'Alish Tirkey',
    rating: 5.5,
    price: 49.99,
    duration: '15h',
    description: 'Learn the basics of Git in this beginner-friendly course.',
  },
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdlYnxlbnwwfHwwfHx8MA%3D%3D',
    title: 'JavaScript for Beginners',
    instructor: 'John Doe',
    rating: 4.5,
    price: 29.99,
    duration: '12h',
    description: 'Learn the basics of JavaScript in this beginner-friendly course.',
  },

  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Node for Beginners',
    instructor: 'Liaana Jain',
    rating: 5.5,
    price: 49.99,
    duration: '15h',
    description: 'Learn the basics of Node in this beginner-friendly course.',
  },

  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Linux for Beginners',
    instructor: 'Rahana Doe',
    rating: 5.5,
    price: 49.99,
    duration: '15h',
    description: 'Learn the basics of Linux in this beginner-friendly course.',
  },

  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Git for Beginners',
    instructor: 'Alish Tirkey',
    rating: 5.5,
    price: 49.99,
    duration: '15h',
    description: 'Learn the basics of Git in this beginner-friendly course.',
  },
  // More course objects...
];
function App() {
  const [courses, setCourses] = useState(coursesData);
  return (

    <>

      <div className="bg-gray-100">
        <Header />
        <Hero />
        <section className="p-6">
          <div className="flex justify-between mb-4">
            <Filter />
            <Sort />
          </div>
          <CourseList courses={courses} />
          <About />
          <Contact />
        </section>
        <Footer />

      </div>

    </>
  );
}

export default App;
