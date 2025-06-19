import { useEffect, useState } from 'react';

const ProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const totalScroll = document.documentElement.scrollTop;
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scroll = `${totalScroll / windowHeight * 100}`;
    setScrollProgress(scroll);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="progress-container" style={{
      width: '100%', 
      height: '4px', 
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      position: 'fixed',
      top: '0',
      left: '0',
      zIndex: '1001'
    }}>
      <div
        className="progress-bar"
        style={{ 
          width: `${scrollProgress}%`,
          height: '100%',
          backgroundColor: '#FFD60A', // Yellow color to match the site theme
          transition: 'width 0.2s ease-out'
        }}
      >
        
      </div>
    </div>
  );
};

export default ProgressBar;
