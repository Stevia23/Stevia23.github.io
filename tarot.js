document.addEventListener('DOMContentLoaded', () => {
    const cards = [
      { name: 'Шут', image: 'cards/00.jpg' },
      { name: 'Маг', image: 'cards/01.jpg' },
      { name: 'Верховная Жрица', image: 'cards/02.jpg' },
      { name: 'Императрица', image: 'cards/03.jpg' },
      { name: 'Император', image: 'cards/04.jpg' },
      { name: 'Иерофант', image: 'cards/05.jpg' },
      { name: 'Влюблённые', image: 'cards/06.jpg' },
      { name: 'Колесница', image: 'cards/07.jpg' },
      { name: 'Сила', image: 'cards/08.jpg' },
      { name: 'Отшельник', image: 'cards/09.jpg' },
      { name: 'Колесо Фортуны', image: 'cards/10.jpg' },
      { name: 'Справедливость', image: 'cards/11.jpg' },
      { name: 'Повешенный', image: 'cards/12.jpg' },
      { name: 'Смерть', image: 'cards/13.jpg' },
      { name: 'Умеренность', image: 'cards/14.jpg' },
      { name: 'Дьявол', image: 'cards/15.jpg' },
      { name: 'Башня', image: 'cards/16.jpg' }
    ];
  
    const drawBtn = document.getElementById('draw-card-btn');
    const result = document.getElementById('card-result');
    const image = document.getElementById('card-image');
    const nameDisplay = document.getElementById('card-name');
    const hiddenCardInput = document.getElementById('hidden-card');
    const drawWrapper = document.getElementById('draw-card-wrapper');
  
    drawBtn.addEventListener('click', () => {
      drawBtn.disabled = true;
  
      result.classList.remove('reveal-animation');
      result.classList.remove('hidden');
      nameDisplay.textContent = 'Перетасовываем...';
  
      let index = 0;
      image.classList.add('shuffle-animation');
  
      const shuffleInterval = setInterval(() => {
        const card = cards[index % cards.length];
        image.src = card.image;
        index++;
      }, 80);
  
      setTimeout(() => {
        clearInterval(shuffleInterval);
  
        const finalCard = cards[Math.floor(Math.random() * cards.length)];
        image.src = finalCard.image;
        nameDisplay.textContent = `Ваша карта: ${finalCard.name}`;
        hiddenCardInput.value = finalCard.name;
  
        image.classList.remove('shuffle-animation');
        result.classList.add('reveal-animation');
        drawWrapper.classList.add('hidden');
      }, 2000);
    });
  });
  