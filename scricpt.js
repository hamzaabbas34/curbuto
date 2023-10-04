// var timeout;

// function circleChaptaKaro() {
//     var xscale = 1;
//     var yscale = 1;
  
//     var xprev = 0;
//     var yprev = 0;
  
//     window.addEventListener("mousemove", function (dets) {
//       clearTimeout(timeout);
  
//       xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
//       yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);
  
//       xprev = dets.clientX;
//       yprev = dets.clientY;
  
//       circleMouseFollower(xscale, yscale);
  
//       timeout = setTimeout(function () {
//         document.querySelector( 
//           "#minicircle"
//         ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
//       }, 100);
//     });
//   }
  
//   function circleMouseFollower(xscale, yscale) {
//     window.addEventListener("mousemove", function (dets) {
//       document.querySelector(
//         "#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
//     });
//   }
  
//   circleChaptaKaro();

  function circleMouseFollower(){
    window.addEventListener('mousemove' , function(dets){
      document.querySelector(
  "#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
});
};
circleMouseFollower();
let hvr =document.querySelectorAll('.hvr')
hvr.forEach(elem => {
  elem.addEventListener('mousehover' , function(){
    div = document.createElement('div');
  }) 
});


// ---------------------

function animt(selector, options = {}) {
  const { videoSources } = options;
  const elements = document.querySelectorAll(selector);
  console.log(selector)
  let boxes = [];

  elements.forEach((element, index) => {
      element.addEventListener('mouseover', function () {
          if (!boxes[index]) {
              const box = document.createElement('div');
              box.classList.add('box');
              const videoContainer = document.createElement('div');
              videoContainer.style.width = '250px'; // Increase the width of the circular video container
              videoContainer.style.height = '250px'; // Increase the height of the circular video container
              videoContainer.style.borderRadius = '50%'; // Apply circular shape to the video container
              videoContainer.style.overflow = 'hidden'; // Hide overflow
              videoContainer.style.position = 'relative';

              const video = document.createElement('video');
              video.src = videoSources[index];
              video.autoplay = true;
              video.muted = true;
              video.loop = true;
              video.style.borderRadius = '50%';
              video.style.width = '100%'; // Set the width of the video to fill the circular container
              video.style.height = '100%'; // Set the height of the video to fill the circular container

              videoContainer.appendChild(video);
              box.appendChild(videoContainer);
              element.appendChild(box);
              boxes[index] = box;
          }
          gsap.to(boxes[index], {
              duration: 0.5,
              opacity: 1,
              scale: 1,
          });
      });

      element.addEventListener("mouseleave", function () {
          if (boxes[index]) {
              gsap.to(boxes[index], {
                  duration: 0.5,
                  opacity: 0,
                  scale: 0,
                  onComplete: function () {
                      element.removeChild(boxes[index]);
                      boxes[index] = null;
                  },
              });
          }
      });

      element.addEventListener("mousemove", function (e) {
          if (boxes[index]) {
              const elementRect = element.getBoundingClientRect();
              const xOffset = e.clientX - elementRect.left - boxes[index].clientWidth / 2;
              const yOffset = e.clientY - elementRect.top - boxes[index].clientHeight / 2;
              gsap.to(boxes[index], {
                  duration: 0.5,
                  x: xOffset,
                  y: yOffset,
              });
          }
      });
  });
}
animt('.hi', { videoSources: ['/video1.mp4', '/video2.mp4', '/video3.mp4'] });

gsap.killTweensOf(".fleftelm");
gsap.killTweensOf(".images");
gsap.to(window, {
  scrollTrigger: {
    trigger: "body",
    start: "top top",
    end: "bottom bottom",
    scrub: 1,
    onUpdate: self => {
      const progress = self.progress;
      gsap.to(".fleftelm", {
        y: "50%",
        ease: Power1,
        progress: progress
      });
      gsap.to(".images", {
        y: "50%",
        ease: Power1,
        progress: progress
      });
    }
  }
});
gsap.registerPlugin(ScrollTrigger);
gsap.to(".fleftelm", {
  scrollTrigger: {
    trigger: "#fimages",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    endTrigger: ".last",
    scrub: 0.5,
  },
  y: "-300%",
  ease: Power1,
});
gsap.to(".images", {
  scrollTrigger: {
    trigger: "#fimages",
    // pin: true,
    start: "top top",
    end: "bottom bottom",
    endTrigger: ".last",
    scrub: 0.5,
  },
  y: "-300%",
  ease: Power1,
});
  



    

    // Scroll-triggered animation for the right side images
   

     
  