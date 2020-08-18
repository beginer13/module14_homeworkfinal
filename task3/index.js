  const resultPlace = document.getElementById("firstDiv");
  const btn = document.getElementById("btn");

  btn.addEventListener("click",function(event){
    // const resultPlace = document.getElementById("firstDiv");
    resultPlace.innerHTML = "";
    const value = document.querySelector('input').value;
    if (parseInt(value,10) < 1 || parseInt(value,10) > 10) {
      // const resultPlace = document.getElementById("firstDiv");
      resultPlace.innerHTML = "<p>Number out of range</p>";
    }
    else {
      useRequest('https://picsum.photos/v2/list/?limit='+value, displayResult)
    }
  })

  function useRequest(url, callback) {

  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.onload = function() {
    if (xhr.status != 200) {
      console.log('Статус ответа: ', xhr.status);
    } else {
      const result = JSON.parse(xhr.response);
      if (callback) {
        callback(result);
      }
    }
  };
  xhr.onerror = function() {
    console.log('Ошибка! Статус ответа: ', xhr.status);
  };
  xhr.send();
};

 function displayResult(apiData) {
  let cards = '';
  apiData.forEach(item => {
    const cardBlock = `
      <div class="card">
        <img
          src="${item.download_url}"
          class="card-image"
        />
        <p>${item.author}</p>
      </div>
    `;
    cards = cards + cardBlock;
  });  
  // const resultPlace = document.getElementById("firstDiv")
  resultPlace.innerHTML = cards;
} 

// Задание выполнено верно, но есть пару замечаний по коду:
// 1. Не рекомендуется использовать глобальные переменные с именем, указанным в id элемента (в данном случае была использована переменная btn, которая не была объявлена, но была доступна, потому что в документе есть элемент с id = btn). Это устаревшая возможность, которая вносит путаницу в код и может привести к конфликту имен. Для поиска элемента по id лучше использовать методы getElementById или querySelector. Выше исправила на более корректный вариант.
// 2. В коде несколько раз встречается конструкция const resultPlace = document.getElementById("firstDiv"). Если переменная используется в нескольких местах, лучше объявить её один раз на уровень выше и использовать уже объявленную переменную, чтобы избежать избыточного повторения кода. Тем более что в данном случае в неё каждый раз записывается один и тот же элемент. 