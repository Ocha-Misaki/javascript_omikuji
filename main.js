{
  'use strict'
  const buttonElement = document.querySelector('button')
  const pElement = document.querySelector('p')
  
  buttonElement.addEventListener('click', () => {
    const randomNum = Math.floor(Math.random() * 11)
    if(randomNum == 0){
      pElement.textContent = '大凶'
    } else if(randomNum >=1 && randomNum <= 2){
      pElement.textContent = '末吉'
    } else if(randomNum >= 3 && randomNum <= 4){
      pElement.textContent ='小吉'
    } else if(randomNum >= 5 && randomNum <= 7){
      pElement.textContent ='吉'
    } else if(randomNum >= 8 && randomNum <= 9){
      pElement.textContent ='中吉'
    } else if(randomNum == 10){
      pElement.textContent ='大吉'
    }
  })
}