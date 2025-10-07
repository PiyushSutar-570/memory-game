import React from 'react'

const Card = ({ element }) => {
  return (
    <div className='w-[70px] h-[70px] sm:w-[110px] sm:h-[110px]'>
      <img
        src={element.show ? element.image : 'https://wikiclipart.com/wp-content/uploads/2016/10/Question-mark-clip-art-question-image-4.png'}
        alt="fruit"
        className={`w-full h-full object-contain ${!element.show && 'bg-white rounded-full'}`}
      />
    </div>
  );
};

export default Card;