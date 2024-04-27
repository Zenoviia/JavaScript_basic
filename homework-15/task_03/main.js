'use strict';


class Timer {

    id;
    sec = 1;
    
    start() {
        
        this.id = setInterval(() => {
            console.log(this.sec);
            this.sec++;
        }, 1000)
    }

    stop() {
        clearInterval(this.id);
        this.sec = 0;
    }

    pause() {
        clearInterval(this.id);
    }

    show() {
        console.log(this.sec);
    }
}

const timer = new Timer();
timer.start()    

setTimeout(() => {
    timer.pause();
}, 5000);
   
   
setTimeout(() => {
    timer.start();
}, 7000);
   
   
setTimeout(() => {
    timer.stop();
    timer.show();
}, 9000);