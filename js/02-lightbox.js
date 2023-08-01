import { galleryItems } from './gallery-items.js';
// Change code below this line

//console.log(galleryItems);

let html='';
const list=document.querySelector(".gallery")
console.log(list);
for(const image of galleryItems){
   html+=`
   <li class="gallery__item">
  <a class="gallery__link" href="${image.original}">
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
      
    />
  </a>
</li>  `;
};
list.innerHTML=html;

// list.addEventListener('click',e=>{
//   if (e.target.nodeName!='IMG') {
//     return
//   }
//   e.preventDefault();
//   gallery.on('show.simplelightbox', function () {
//     console.log(gallery)
//   });
// });

let gallery = new SimpleLightbox('.gallery a',{
   captionsData:'alt',
   captionDelay:250,
});



