function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function startClock(clockPlaceHolder) {
    while (true) {
        var date = new Date();
        clockPlaceHolder.innerText = date;
        await sleep(2000);
    }
}