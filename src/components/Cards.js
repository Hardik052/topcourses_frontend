import React from 'react';
import Card from '../components/Card'

const Cards = ({courses, category}) => {
  console.log("printing data")
  console.log({courses})
  // to .map() all the courses, we need all our data in on array
  // here the steps to do it:
  // in api we have values in keys values pair, we dont need keeys
  // therefore, by doung Object.values(courses), we got access to values only
  // now by doing 1st forEach we got 4 arrays, by doing another forEach we went inside each array for the info
  // and we are pushing each info into our new allcourses array.
  // now allcourses is a single array where we have all courses data., hence we can .map() on it
  function getCourses(){
    if(category=== "All"){
      let allCourses = [];
      Object.values(courses).forEach(ar => ar.forEach(courseData => {
        allCourses.push(courseData);
      }))
      return allCourses;

    }else{
      // else main sirf specific category ka array pass karunga 
      return courses[category];
    }

  }
  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
    {
      getCourses().map((course) => (
        <Card key={course.id} course={course}/>
      ))
    }

    </div>
  )
}

export default Cards