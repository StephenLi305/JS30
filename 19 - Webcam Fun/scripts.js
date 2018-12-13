const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');



function getVideo(){
  navigator.mediaDevices.getUserMedia({video:true, audio:false})
    .then(localMediaStream => {
      // console.log(localMediaStream);
      video.srcObject = localMediaStream;
      video.play();
    })
    .catch(err => {
      console.error("oh no");
    })
  // console.log("hi");
}


function paintToCanvas(){
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;
  console.log(width, height);

  return  setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);
    const pixels = ctx.getImageData(0,0, width, height);
    console.log(pixels);
    debugger

  }, 16);
}

function takePhoto(){
  snap.currentTime = 0;
  snap.play();

  const data = canvas.toDataURL('image/jpeg');
  const link = document.createElement('a');
  link.href = data;
  link.setAttribute('download','tiffiiii');
  link.innerHTML = `<img src="${data}" alt="TiffSwaggy"/> `
  strip.insertBefore(link, strip.firstChild);

}

getVideo()
video.addEventListener('canplay',paintToCanvas)
