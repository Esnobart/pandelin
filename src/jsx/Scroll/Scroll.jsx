import { useEffect } from 'react';

const Scroll = () => {
  useEffect(() => {
    const firstScroll = document.getElementById('abt');
    const secondScroll = document.getElementById('team');
    const thirdScroll = document.getElementById('buy');
    const sectionTwo = document.querySelector('.second-section');
    const sectionThree = document.querySelector('.third-section');
    const sectionFourth = document.querySelector('.fourth-section');

    const handleScroll = (targetSection) => {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    };

    firstScroll.addEventListener('click', () => handleScroll(sectionTwo));
    secondScroll.addEventListener('click', () => handleScroll(sectionThree));
    thirdScroll.addEventListener('click', () => handleScroll(sectionFourth));

    return () => {
      firstScroll.removeEventListener('click', () => handleScroll(sectionTwo));
      secondScroll.removeEventListener('click', () => handleScroll(sectionThree));
      thirdScroll.removeEventListener('click', () => handleScroll(sectionFourth));
    };
  }, []);

  
};

export default Scroll;
