window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
 

for(let i=0;i<5;i++){
   let timeout=Math.floor(Math.random()*5)+1;
   window.promises.push(new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(`Promise ${i+1} resolved after ${timeout} seconds`)
        }, timeout*1000)
    }))
}
 
	let output = document.getElementById("output")
	  let p=document.createElement("p");
  Promise.any(window.promises)
  .then(result => {
      
	  p.innerHTML = result;
	  output.appendChild(p)
      // if (output) {
      //   output.innerText = result;
      // } else {
      //   console.error("Output element not found");
      // }
  })
  .catch(error => {
          p.innerHTML = error;document.addEventListener("DOMContentLoaded", () => {
  window.promises = [];

  for(let i=0;i<5;i++){
     let timeout=Math.floor(Math.random()*5)+1;
     window.promises.push(new Promise((resolve,reject)=>{
          setTimeout(()=>{
              resolve(`Promise ${i+1} resolved after ${timeout} seconds`)
          }, timeout*1000)
      }))
  }


  let output = document.getElementById("output")

  Promise.any(window.promises)
  .then(result => {
  
    output.innerText = result;
     
  })
  .catch(error => {
     
    output.innerText = error;
    
  })
})
	    output.appendChild(p)
  })

