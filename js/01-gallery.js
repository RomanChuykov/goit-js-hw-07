import { galleryItems } from './gallery-items.js';
// Change code below this line


let html='';
// const lightbox=document.createElement('div');
// lightbox.id='lightbox';


const list=document.querySelector(".gallery")

for(const image of galleryItems){
   html+=`
   <li class="gallery__item">
  <a href="${image.original}">
    <img src="${image.preview}"class="gallery__image" alt="${image.description}">
  </a>c

</li>
   `;
};
console.log('!',html);
list.innerHTML=html;
// document.body.appendChild(lightbox);
// const links=document.querySelectorAll('a')
// list.addEventListener('click',e=>{
//   if (e.target.nodeName!='IMG') {
//     return
//   }
//   lightbox.classList.add('active');
//   const img=document.createElement('img');
//   img.src=e.target.closest('a').href;
//   img.className='lightimg'
//   lightbox.appendChild(img);
  
// });
// lightbox.addEventListener('click',e=>{
//   lightbox.classList.remove('active');
//   lightbox.innerHTML=''
// });
// window.addEventListener('keydown',e=>{
//   if (e.key=='Escape') {
//     lightbox.classList.remove('active');
//     lightbox.innerHTML=''
    
//   }
  
// });
//===========================================================
let instance;
list.addEventListener('click',e=>{
    if (e.target.nodeName!='IMG') {
      return
    }
    e.preventDefault();
    instance = basicLightbox.create(`
        <img src="${e.target.closest('a').href}" width="800" height="600">
    `,{
      onShow: (instance) => {window.addEventListener("keydown",listener)},
	    onClose: (instance) => {window.removeEventListener("keydown",listener)}
    })

  instance.show()
    
  });

   const listener=(e) => 
   
   
   
   {
    if (e.key=='Escape') {
      const lightbox=document.querySelector('.basicLightbox');
      if (lightbox!=null) {
        
       //lightbox.remove();

       instance.close()
      }
    }
    console.log(e.key)
	};
