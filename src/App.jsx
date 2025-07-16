import React, { useEffect, useState } from 'react'
import Card from './Card';

const App = () => {
  const [first, setFirst] = useState(null);
  const [second, setSecond] = useState(null);
  const [moves, setMoves] = useState(0);
  const [newGame, setNewGame] = useState(Math.random());
  const [isChecking, setIsChecking] = useState(false);
  const [selected, setSelected] = useState(0);

  const [fruits, setFruits] = useState([
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
  ]);

  useEffect(() => {
    const updatedFruits = fruits.map(fruit => ({ ...fruit, show: false }));
    setMoves(0);
    setFirst(null);
    setSecond(null);
    setSelected(0);
    const shuffledImages = updatedFruits.sort(() => 0.5 - Math.random());
    setFruits(shuffledImages);
  }, [newGame]);

  const setFlag = (fruit) => {
    if (isChecking || fruit.show) return;
    const updated = fruits.map(f =>
      f.id === fruit.id ? { ...f, show: true } : f
    );
    setFruits(updated);
    if (first === null) {
      setFirst(fruit);
    } else {
      setSecond(fruit);
      setMoves(prev => prev + 1);
    }
  };

  useEffect(() => {
    if (first && second) {
      setIsChecking(true);
      check();
    }
  }, [first, second]);

  const check = () => {
    setTimeout(() => {
      if (first.image !== second.image) {
        const updated = fruits.map(fruit => {
          if (fruit.id === first.id || fruit.id === second.id) {
            return { ...fruit, show: false };
          }
          return fruit;
        });
        setFruits(updated);
      } else {
        setSelected(prev => prev + 1);
      }
      setFirst(null);
      setSecond(null);
      setIsChecking(false);
    }, 1000);
  };

  return (
    <div className='flex flex-col gap-5 items-center w-full min-h-screen bg-blue-950 p-5'>
      {/* Title */}
      <div className='text-white text-4xl sm:text-6xl font-semibold text-center'>
        Memory Game
      </div>

      {/* Author */}
      <div className='text-white text-xl sm:text-4xl font-semibold text-center'>
        Made by @Piyush
      </div>

      {/* Grid */}
      <div className='grid grid-cols-4 sm:grid-cols-6 gap-4 sm:gap-6'>
        {
          fruits.map((element, index) => (
            <div onClick={() => setFlag(element)} key={index} className={`${element.show && 'pointer-events-none'}`}>
              <Card element={element} />
            </div>
          ))
        }
      </div>

      {/* Win Message */}
      {selected === 12 && (
        <div className='text-white text-2xl sm:text-4xl font-semibold'>
          Hurray! You Won!
        </div>
      )}

      {/* Controls */}
      <div className='flex flex-col sm:flex-row items-center gap-4 mt-3'>
        <div className='text-white text-2xl sm:text-5xl font-semibold'>
          Your moves: {moves}
        </div>
        <button
          onClick={() => setNewGame(Math.random())}
          className='bg-red-500 text-white text-xl sm:text-3xl font-semibold px-8 py-4 rounded-full hover:bg-red-600'
        >
          New Game
        </button>
      </div>
    </div>
  );
};

export default App;
