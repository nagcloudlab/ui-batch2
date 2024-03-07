
const axios = require('axios');

// Using Matchers

test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
});

test('object assignment', () => {
    const data = { one: 1 };
    data['two'] = 2;
    expect(data).toEqual({ one: 1, two: 2 });
});

test('adding positive numbers is not zero', () => {
    for (let a = 1; a < 10; a++) {
        for (let b = 1; b < 10; b++) {
            expect(a + b).not.toBe(0);
        }
    }
});


// Truthiness

test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
});

test('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
});


// Numbers

test('two plus two', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);

    // toBe and toEqual are equivalent for numbers
    expect(value).toBe(4);
    expect(value).toEqual(4);
});

test('adding floating point numbers', () => {
    const value = 0.1 + 0.2;
    //expect(value).toBe(0.3);           This won't work because of rounding error
    expect(value).toBeCloseTo(0.3); // This works.
});

// Strings

test('there is no I in team', () => {
    expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/);
});

// Arrays and iterables

const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'milk',
];

test('the shopping list has milk on it', () => {
    expect(shoppingList).toContain('milk');
    expect(new Set(shoppingList)).toContain('milk');
});

// Exceptions

function compileAndroidCode() {
    throw new Error('you are using the wrong JDK');
}

test('compiling android goes as expected', () => {
    expect(() => compileAndroidCode()).toThrow();
    expect(() => compileAndroidCode()).toThrow(Error);

    // You can also use the exact error message or a regexp
    expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
    expect(() => compileAndroidCode()).toThrow(/JDK/);
});

// third-party matchers



// ----------------------------------------------
// Testing Asynchronous Code
//-----------------------------------------------

// Callbacks
function fetchData(callback) {
    setTimeout(() => {
        callback('peanut butter');
    }, 1000);
}

test('the data is peanut butter', () => {
    function callback(data) {
        expect(data).toBe('peanut butter');
    }
    fetchData(callback);
});

// Promises

function fetchDataPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('peanut butter');
        }, 0);
    });
}

test('the data is peanut butter', () => {
    return fetchDataPromise().then(data => {
        expect(data).toBe('peanut butter');
    });
}, 7000);


// Async/Await

test('the data is peanut butter', async () => {
    const data = await fetchDataPromise();
    expect(data).toBe('peanut butter');
});


// Async/Await with .resolves

test('the data is peanut butter', async () => {
    await expect(fetchDataPromise()).resolves.toBe('peanut butter');
});


// Async/Await with .rejects
// test('the fetch fails with an error', async () => {
//     await expect(fetchDataPromise()).rejects.toMatch('error');
// })


// ----------------------------------------------
// Setup and Teardown
//-----------------------------------------------


// Repeating Setup For Many Tests

// beforeEach(() => {
//     initializeCityDatabase();
// });

// afterEach(() => {
//     clearCityDatabase();
// });

// test('city database has Vienna', () => {
//     expect(isCity('Vienna')).toBeTruthy();
// });

// test('city database has San Juan', () => {
//     expect(isCity('San Juan')).toBeTruthy();
// })


// One-Time Setup

// beforeAll(() => {
//     return initializeCityDatabase();
// });

// afterAll(() => {
//     return clearCityDatabase();
// });

// test('city database has Vienna', () => {
//     expect(isCity('Vienna')).toBeTruthy();
// });

// test('city database has San Juan', () => {
//     expect(isCity('San Juan')).toBeTruthy();
// });






// beforeAll(() => console.log('1 - beforeAll'));
// afterAll(() => console.log('1 - afterAll'));
// beforeEach(() => console.log('1 - beforeEach'));
// afterEach(() => console.log('1 - afterEach'));

// test('', () => console.log('1 - test'));

// describe('Scoped / Nested block', () => {

//     beforeAll(() => console.log('2 - beforeAll'));
//     afterAll(() => console.log('2 - afterAll'));
//     beforeEach(() => console.log('2 - beforeEach'));
//     afterEach(() => console.log('2 - afterEach'));

//     test('', () => console.log('2 - test'));
// });


// ----------------------------------------------
// Mock Functions
//-----------------------------------------------


function forEach(items, callback) {
    for (const item of items) {
        callback(item);
    }
}

const mockCallback = jest.fn(x => 42 + x);

test('forEach mock function', () => {
    forEach([11, 12], mockCallback);
    // The mock function is called twice
    expect(mockCallback.mock.calls.length).toBe(2);

    // The first argument of the first call to the function was 11
    expect(mockCallback.mock.calls[0][0]).toBe(11);

    // The first argument of the second call to the function was 12
    expect(mockCallback.mock.calls[1][0]).toBe(12);

    // The return value of the first call to the function was 53
    expect(mockCallback.mock.results[0].value).toBe(53);
})


// .mock property

const myMock = jest.fn();
const a = new myMock();
console.log(myMock.mock.instances); // > [{}]

const myMock2 = jest.fn();
const b = {}
const bound = myMock2.bind(b);
bound();
console.log(myMock2.mock.contexts); // > [b]


test('mock property', () => {
    const someMockFunction = jest.fn();
    someMockFunction('first arg', 'second arg');
    expect(someMockFunction.mock.calls).toHaveLength(1);
    expect(someMockFunction.mock.calls[0][0]).toBe('first arg');
    expect(someMockFunction.mock.calls[0][1]).toBe('second arg');
})

test('mock return values', () => {
    const myMock = jest.fn();
    console.log(myMock());
    // > undefined
    myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true);
    console.log(myMock(), myMock(), myMock(), myMock());
    // > 10, 'x', true, true
});


test("mock return values", () => {

    const filterTestFn = jest.fn();

    // Make the mock return `true` for the first call,
    // and `false` for the second call
    filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);

    const result = [11, 12].filter(num => filterTestFn(num));

    // console.log(result);
    // // > [11]
    // console.log(filterTestFn.mock.calls[0][0]); // 11
    // console.log(filterTestFn.mock.calls[1][0]); // 12

    expect(result).toEqual([11]);
});


// fetchTodos

function fetchTodos() {
    return axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
        .then(res => res.data);
}

jest.mock('axios');

test('fetchTodos', async () => {
    axios.get.mockResolvedValue({
        data: [
            { id: 1, title: 'todo 1', completed: false },
            { id: 2, title: 'todo 2', completed: true }
        ]
    });
    const todos = await fetchTodos();
    expect(todos).toHaveLength(2);
    expect(todos[0].title).toBe('todo 1');
    expect(todos[1].title).toBe('todo 2');
}








