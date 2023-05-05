window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
 

for(let i=0;i<5;i++){
   let timeout=Math.floor(Math.random()*5)+1;
   window.promise.push(new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(`Promise ${i+1} resolved after ${timeout} seconds`)
        }, timeout*1000)
    }))
}

document.addEventListener("DOMContentLoaded", () => {
  Promise.any(window.promise)
  .then(result => {
      let output = document.getElementById("output")
      if (output) {
        output.innerText = result;
      } else {
        console.error("Output element not found");
      }
  })
  .catch(error => {
        console.log(error)
  })
})
