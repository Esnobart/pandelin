document.addEventListener('DOMContentLoaded', function () {
    const firstScroll = document.getElementById('abt');
    const secondScroll = document.getElementById('team');
    const thirdScroll = document.getElementById('buy');
    const sectionTwo = document.querySelector('.second-section');
    const sectionThree = document.querySelector('.third-section');
    const sectionFourth = document.querySelector('.fourth-section');

    firstScroll.addEventListener('click', function () {
        sectionTwo.scrollIntoView({ behavior: 'smooth' });
    });

    secondScroll.addEventListener('click', function () {
        sectionThree.scrollIntoView({ behavior: 'smooth' });
    });

    thirdScroll.addEventListener('click', function () {
        sectionFourth.scrollIntoView({ behavior: 'smooth' });
    });
});
