import React, { useEffect, useState } from 'react';
import video from "../assets/video.mp4"; // Import the video file

const quotes = [
  "Your mind is a garden, your thoughts are the seeds. You can grow flowers or you can grow weeds.",
  "Stress is not what happens to us. It's our response to what happens. And response is something we can choose.",
  "Breathe deeply and let go of the stress of today. Tomorrow is a new beginning.",
  "Happiness is found when you stop comparing yourself to other people.",
  "Don't let the noise of the world keep you from hearing the voice of your own mind."
];

const Page1 = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const quoteInterval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
        setFadeIn(true);
      }, 500); 
    }, 5000); 
    return () => clearInterval(quoteInterval); // Cleanup on unmount
  }, []);

  return (
    <div className="w-full h-screen  relative overflow-hidden">
      {/* Video Background */}
      <video 
        src={video} 
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
      />
      {/* Overlay for dark background */}
      <div className="absolute inset-0 bg-black opacity-50" />
      {/* Centered Sliding Quote */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 
          className={`text-white text-3xl md:text-4xl font-bold text-center p-4 transition-all duration-500 ease-in-out transform ${
            fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {quotes[currentQuoteIndex]}
        </h1>
      </div>
    </div>
  );
};

export default Page1;
