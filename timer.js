let timer = 150;

const myTimer = setInterval(displayTimer, 1000);
 
function displayTimer() {
    let hour, min, sec;
    
    if(timer / 60 >= 1) {
        min = Math.floor(timer / 60);
        sec = timer % 60;

        if(min / 60 >= 1) {
            hour = Math.floor(min / 60);
            min %= 60;
        } else {
            hour = 0;
        }
    } else {
        hour = min = 0;
        sec = timer;
    }
    
    console.log(`${hour>9 ? hour : '0'+hour}:${min>9 ? min : '0'+min}:${sec>9 ? sec : '0'+sec}`);
    
    if(timer-- === 0) {
        clearInterval(myTimer);
        console.log('myTimer is stopped!');  
    }
}