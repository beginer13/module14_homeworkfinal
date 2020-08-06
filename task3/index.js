
  btn.addEventListener("click",function(event){
    const resultPlace = document.getElementById("firstDiv");
    resultPlace.innerHTML = "";
    const value = document.querySelector('input').value;
    if (parseInt(value,10) < 1 || parseInt(value,10) > 10) {
      const resultPlace = document.getElementById("firstDiv");
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
  const resultPlace = document.getElementById("firstDiv")
  resultPlace.innerHTML = cards;
} 