import React from 'react'
const fruits = [
  { id: 1, image: "https://img.icons8.com/color/96/apple.png", show: false },
  { id: 2, image: "https://img.icons8.com/color/96/apple.png", show: false },

  { id: 3, image: "https://img.icons8.com/color/96/banana.png", show: false },
  { id: 4, image: "https://img.icons8.com/color/96/banana.png", show: false },

  { id: 5, image: "https://img.icons8.com/color/96/orange.png", show: false },
  { id: 6, image: "https://img.icons8.com/color/96/orange.png", show: false },

  { id: 7, image: "https://img.icons8.com/color/96/mango.png", show: false },
  { id: 8, image: "https://img.icons8.com/color/96/mango.png", show: false },

  { id: 9, image: "https://img.icons8.com/color/96/strawberry.png", show: false },
  { id: 10, image: "https://img.icons8.com/color/96/strawberry.png", show: false },

  { id: 11, image: "https://img.icons8.com/color/96/kiwi.png", show: false },
  { id: 12, image: "https://img.icons8.com/color/96/kiwi.png", show: false },

  { id: 13, image: "https://img.icons8.com/color/96/cherry.png", show: false },
  { id: 14, image: "https://img.icons8.com/color/96/cherry.png", show: false },

  { id: 15, image: "https://img.icons8.com/color/96/pineapple.png", show: false },
  { id: 16, image: "https://img.icons8.com/color/96/pineapple.png", show: false },

  { id: 17, image: "https://img.icons8.com/color/96/grapes.png", show: false },
  { id: 18, image: "https://img.icons8.com/color/96/grapes.png", show: false },

  { id: 19, image: "https://img.icons8.com/color/96/watermelon.png", show: false },
  { id: 20, image: "https://img.icons8.com/color/96/watermelon.png", show: false },

  { id: 21, image: "https://img.icons8.com/color/96/pomegranate.png", show: false },
  { id: 22, image: "https://img.icons8.com/color/96/pomegranate.png", show: false },

  { id: 23, image: "https://img.icons8.com/color/96/peach.png", show: false },
  { id: 24, image: "https://img.icons8.com/color/96/peach.png", show: false }
];

const Demo = () => {
  return (
    <div className='grid grid-cols-6 bg-blue-950 h-screen w-full'>
      {
        fruits.map((element)=>(
            <div>
                <img src={element.image} alt="ha" className='w-[150px]' />
            </div>
        ))
      }
    </div>
  )
}

export default Demo
