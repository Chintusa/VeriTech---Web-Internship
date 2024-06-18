let movies = [
    {
      name: "falcon and the winter soldier",
      des:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!",
      image: "images/slider 2.png"
    },
    {
      name: "loki",
      des:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!",
      image: "images/slider 1.png"
    },
    {
      name: "wanda vision",
      des:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!",
      image: "images/slider 3.png"
    },
    {
      name: "raya and the last dragon",
      des:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!",
      image: "images/slider 4.png"
    },
    {
      name: "luca",
      des:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!",
      image: "images/slider 5.png"
    }
  ];
  
//   // Search functionality
// const searchBox = document.querySelector(".search-box");
// const searchResultsContainer = document.querySelector(".search-results");

// searchBox.addEventListener("input", () => {
//   const query = searchBox.value.toLowerCase();
//   searchResultsContainer.innerHTML = "";

//   if (query === "") {
//     searchResultsContainer.style.display = "none";
//     return;
//   }

//   const filteredMovies = movies.filter((movie) =>
//     movie.name.toLowerCase().includes(query)
//   );

//   if (filteredMovies.length > 0) {
//     searchResultsContainer.style.display = "block";
//     filteredMovies.forEach((movie) => {
//       const resultItem = document.createElement("div");
//       resultItem.className = "search-result-item";
//       resultItem.innerHTML = `<h3>${movie.name}</h3><p>${movie.des}</p>`;
//       searchResultsContainer.appendChild(resultItem);
//     });
//   } else {
//     searchResultsContainer.style.display = "block";
//     const noResults = document.createElement("div");
//     noResults.className = "no-results";
//     noResults.innerHTML = `<p>No results found</p>`;
//     searchResultsContainer.appendChild(noResults);
//   }
// });
  const carousel = document.querySelector(".carousel");
  let sliders = [];
  
  let slideIndex = 0; // to track current slide index.
  
  const createSlide = () => {
    if (slideIndex >= movies.length) {
      slideIndex = 0;
    }
  
    // creating DOM element
    let slide = document.createElement("div");
    var imgElement = document.createElement("img");
    let content = document.createElement("div");
    let h1 = document.createElement("h1");
    let p = document.createElement("p");
  
    // attaching all elements
    imgElement.appendChild(document.createTextNode(""));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);
  
    // setting up image
    imgElement.src = movies[slideIndex].image;
    slideIndex++;
  
    // setting elements classname
    slide.className = "slider";
    content.className = "slide-content";
    h1.className = "movie-title";
    p.className = "movie-des";
  
    sliders.push(slide);
  
    if (sliders.length) {
      sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
        30 * (sliders.length - 2)
      }px)`;
    }
  };
  
  for (let i = 0; i < 3; i++) {
    createSlide();
  }
  
  setInterval(() => {
    createSlide();
  }, 3000);
  
  //Video Cards
  
  const videoCards = [...document.querySelectorAll(".video-card")];
  
  videoCards.forEach((item) => {
    item.addEventListener("mouseover", () => {
      let video = item.children[1];
      video.play();
    });
    item.addEventListener("mouseleave", () => {
      let video = item.children[1];
      video.pause();
    });
  });
  
  //card sliders
  
  let cardContainers = [...document.querySelectorAll(".card-container")];
  let preBtns = [...document.querySelectorAll(".pre-btn")];
  let nxtBtns = [...document.querySelectorAll(".nxt-btn")];
  
  cardContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;
  
    nxtBtns[i].addEventListener("click", () => {
      item.scrollLeft += containerWidth - 200;
    });
  
    preBtns[i].addEventListener("click", () => {
      item.scrollLeft -= containerWidth + 200;
    });
  });
  