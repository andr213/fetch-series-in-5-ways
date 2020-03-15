function fakeFetch (url, params='-') {
    // этот вывод в консоль покажет порядок вызовов с их входящими параметрами
    console.log(`fakeFetch to: ${url} with params: ${params}`);
    return new Promise(resolve => {
        setTimeout(() => resolve(`${url} is DONE`), 1000);
    })
}