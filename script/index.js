const counter = document.getElementById('counter');
let count = 1;

const increment = () =>{
    console.log(count)
    // count++;
    if(count >= 10){
        alert('complete')
        return

    }
    else{
        counter.innerText = count;
        count++;
    }
}

const decrement = () =>{
    counter.innerText = count;
    count--;
}


// increment()


// decrement()







// const increment = () =>{
//     const counter = document.getElementById('counter').innerText;
//     let convert = parseInt(counter)
//     convert++;
//     console.log(convert)
    
    
// }

// const decrement = () =>{
   
// }


// increment()


// decrement()
