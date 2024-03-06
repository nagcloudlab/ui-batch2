


import { Observable, Subject } from 'rxjs';
import { map, filter } from 'rxjs/operators';


const topicStream = new Subject();

//-------------------------------------------
// trainer module
//-------------------------------------------

let i = 0;
const intervalId = setInterval(() => {
    i++
    const topic = i
    console.log('new topic published', topic);
    topicStream.next(topic); // publish the topic
    if (i == 3) {
        topicStream.error('something went wrong');
        clearInterval(intervalId);
    }
    if (i === 5) {
        topicStream.complete();
        clearInterval(intervalId);
    }
}, 1000);


//-------------------------------------------
// Raja module
//-------------------------------------------

topicStream
    .pipe(filter(topic => topic % 2 === 0))
    .subscribe({
        next: (topic) => {
            console.log('Raja got the topic', topic);
        },
        complete: () => {
            console.log('Raja got the message that no more topics');
        },
        error: (err) => {
            console.log('Raja got the error', err);
        }
    })

//-------------------------------------------
// Rohit module
//-------------------------------------------

topicStream.subscribe({
    next: (topic) => {
        console.log('Rohit got the topic', topic);
    },
    complete: () => {
        console.log('Rohit got the message that no more topics');
    },
    error: (err) => {
        console.log('Rohit got the error', err);
    }
})