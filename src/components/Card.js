import React, { useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'; // Import customizable heart icons
import { toast } from 'react-toastify';

const Card = ({ course }) => {
  const [clicked, setClicked] = useState(false);

  function clickHandler() {
    setClicked(!clicked);
    // Ulta krna pad raha hai 
    if(clicked===true){
      toast.error(`Unliked`)
    }else{
      toast.success(`Liked`)

    }
     // Toggle the clicked state
  }

  return (
    <div className='w-[300px] bg-bgDark rounded-md overflow-hidden bg-opacity-80'>
      {/* Image Section */}
      <div className='relative'>
        <img src={course.image.url} alt='Course' />
        {/* Like Button */}
        <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-3 grid place-items-center'>
          <button onClick={clickHandler} className='flex justify-center items-center'>
            {/* Conditional rendering of the heart icon based on the "clicked" state */}
            {clicked ? (
              <AiFillHeart fontSize='1.75rem' color='red' /> // Red filled heart when clicked
            ) : (
              <AiOutlineHeart fontSize='1.75rem' color='#f5f5f5' /> // Skinned white outline heart when not clicked
            )}
          </button>
        </div>
      </div>

      {/* Text Content Section */}
      <div className='p-4'>
        <p className='text-white font-bold'>{course.title}</p>
        <p className='my-2 text-white'>
          {
          course.description.length >100 ? (course.description.substr(0,100))+'...' : (course.description)
          }
          </p>
      </div>
    </div>
  );
};

export default Card;
