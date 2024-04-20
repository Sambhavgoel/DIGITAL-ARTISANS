const slides=document.querySelectorAll(".slideall")

slides.forEach(
  (slide,index)=>{
   slide.style.left=`${index*100}%`
  }
)
let counter=0;
const goNext = () => {
  if (counter < slides.length - 1) {
  counter++;
  slideImage();
  }
  };
  const goPrev = () => {
  if (counter != 0) {
  counter--;
  slideImage();
  }
  };
const slideImage = () => {
  slides.forEach(
    (slide) => {
      slide.style.transform=`translateX(-${counter*100}%)`
    }
  )
}