


//--------------------------------------
// trainer module
//--------------------------------------

const trainer = {
    getTopic() {
        const executor = (resolve, reject) => {
            setTimeout(() => {
                console.log("TRAINER: resolving promise");
                resolve('js')
                // console.log("TRAINER: rejecting promise");
                // reject('topic not available')
            }, 3000)
        }
        const promise = new Promise(executor);
        return promise;
    }
}


// --------------------------------------
//ai tools
//--------------------------------------

const aiTools = {
    getTopicInDetail(topic) {
        const executor = (resolve, reject) => {
            setTimeout(() => {
                console.log("AI-TOOLS: resolving promise");
                resolve(topic.toUpperCase())
            }, 3000)
        }
        const promise = new Promise(executor);
        return promise;
    }

}


//--------------------------------------
// employee module
//--------------------------------------

const employee = {
    doLearnV1() {
        console.log('EMP: learning...')
        console.log("EMP: requesting trainer for topic");
        const promise = trainer.getTopic()
        console.log("EMP: got promise, deferring learning...");
        promise
            .then(topic => {
                console.log('EMP: learning topic : ', topic)
                console.log("EMP: requesting AI-TOOLS for learning");
                const aiPromise = aiTools.getTopicInDetail(topic)
                console.log("EMP: got aiPromise, deferring learning...");
                aiPromise
                    .then(topicInDetail => {
                        console.log('EMP: learning topic in detail : ', topicInDetail)
                    })
                    .catch(reason => {
                        console.log('EMP: not learning in detail, reason : ', reason)
                    })
            })
            .catch(reason => {
                console.log('EMP: not learning, reason : ', reason)
            })
    },
    async doLearnV2() {
        console.log('EMP: learning...')
        try {
            console.log("EMP: requesting trainer for topic");
            const topic = await trainer.getTopic()
            console.log('EMP: learning topic : ', topic)
            console.log("EMP: requesting AI-TOOLS for learning");
            const topicInDetail = await aiTools.getTopicInDetail(topic)
            console.log('EMP: learning topic in detail : ', topicInDetail)
        } catch (err) {
            console.log('EMP: not learning, reason : ', err)
        }
    },
    doWork() {
        //this.doLearnV1()
        this.doLearnV2()
        console.log('EMP: cont.. with other work')
    }
}

// employee.doWork()

//--------------------------------------
// Fact-1 : promise is chainable
//--------------------------------------

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('resolving p1')
//         resolve(100)
//     }, 3000)
// });

// const p2 = p1.then((result) => {
//     console.log('resolving p2')
//     return result * 2
// });

// const p3 = p2.then((result) => {
//     console.log('resolving p3')
//     return result * 3
// });

// p3.then((result) => {
//     console.log('result : ', result)
// })

//--------------------------------------
// Promise.all , Prmose.race
//--------------------------------------

// const p4 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('resolving p4')
//         resolve(100)
//     }, 3000)
// })

// const p5 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('resolving p5')
//         resolve(200)
//         // console.log('rejecting p5')
//         // reject('some error')
//     }, 2000)
// });


// Promise.all([p4, p5])
//     .then((results) => {
//         console.log('results : ', results)
//     })
//     .catch((reason) => {
//         console.log('reason : ', reason)
//     })


// Promise.race([p4, p5])
//     .then((result) => {
//         console.log('result : ', result)
//     })
//     .catch((reason) => {
//         console.log('reason : ', reason)
//     })

//--------------------------------------


// Promise.resolve(100) // resolve promise with value
// Promise.reject('some error') // reject promise with reason

//--------------------------------------


// Facts about promise api

// -> always execute executor-function eagerly
// -> cant cancel promise
// -> cant pause promise
// -> cant resume promise
// -> cant check progress of promise
// -> can push one value or one error


// --------------------------------------
// Example
// --------------------------------------



// promise with callback style

function fetchTodos() {
    const url = 'https://jsonplaceholder.typicode.com/todos?_limit=5'
    const promise = fetch(url)
    return promise
}

function renderTodos() {
    console.log('rendering todos...')
    const promise = fetchTodos()
    promise
        .then(response => response.json())
        .then(todos => {
            console.log('todos : ', todos)
        })
        .catch(reason => {
            console.log('error : ', reason)
        })
}

renderTodos()



// --------------------------------------

// async/await with fetch api

async function fetchTodosV2() {
    const url = 'https://jsonplaceholder.typicode.com/todos?_limit=5'
    const response = await fetch(url)
    const todos = await response.json()
    return todos
}

async function renderTodosV2() {
    console.log('rendering todos...')
    try {
        const todos = await fetchTodosV2()
        console.log('todos : ', todos)
    } catch (err) {
        console.log('error : ', err)
    }
}

renderTodosV2()