
btn.addEventListener("click",function(event){
  const resultPlace = document.getElementById("firstDiv");
  resultPlace.innerHTML = "";
  const width = parseInt(document.querySelector('#elem1').value, 10);
  const height = parseInt(document.querySelector('#elem2').value, 10);
  //console.log(width, height);
  if (width < 100 || width > 300 || height < 100 || height>300 || Number.isNaN(width)|| Number.isNaN(height))  {
    resultPlace.innerHTML = "<p>One of values is out of range from 100 to 300 or not number</p>";
  }
  else {
    fetchPhoto(width, height);
  }
})

function fetchPhoto(width, height) {
  const url = 'https://picsum.photos/' + width + '/' + height;
  // displayPhoto(url)
  const options = {};
  // Делаем запрос за данными
  fetch(url, options)
    .then(response => displayPhoto(response.url))
}

function displayPhoto(photoUrl) {
  const resultPlace = document.getElementById("firstDiv");
  resultPlace.innerHTML = '<img src="'+photoUrl+'">';
}

// const displayPhotos2 = photosData => console.log(photosData)