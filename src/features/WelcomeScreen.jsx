import React, { useEffect, useState } from 'react';

function WelcomeScreen({ onAnimationComplete }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onAnimationComplete();
    }, 2000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, [onAnimationComplete]);

  return (
    isVisible && (
      <div className="welcome-screen">
        <h1 className='text-3xl font-semibold text-red-500'>Welcome to the</h1>
        <h1 className='text-4xl font-bold text-amber-400'>Yogesh's Portfolio</h1>
      </div>
    )
  );
}

export default WelcomeScreen;
