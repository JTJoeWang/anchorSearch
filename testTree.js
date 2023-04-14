function tree(target, mini, max){
    console.log(`target: ${target}, mini: ${mini}, max: ${max}`);
    let currentMax = max;
    let currentMini = mini;
    let args = []
    while(currentMax - currentMini > 1) {
        console.log(`${currentMini} - ${currentMax}`)
        const compare = currentMax - ((currentMax - currentMini+1) / 2)
        if (target <= compare) {
            args.push(`${compare + 1}:${currentMax}`);
            currentMax = compare;
        } else if (target > compare) {
            args.push(`${currentMini}:${compare}`);
            currentMini = compare + 1
        }
        console.log(args)
        if (currentMax-currentMini <= 1) {
            args.push(target === currentMax ? `${currentMini}` : `${currentMax}`)
            break;
        }
    }
    console.log(args)
}

// tree(5, 16, 1)

// for(let i = 1; i <= 16; i++) {
//     tree(i, 1,16)
// }

function mixTree(target, mini, max, count) {
    console.log(`target: ${target}, mini: ${mini}, max: ${max}, count: ${count}`);
    if (target < mini || target > max) return
    let currentMax = max;
    let currentMini = mini;
    let args = {}
    while(currentMax - currentMini > count - 1 && (currentMax - currentMini + 1 ) % count === 0) {
        console.log(`${currentMini} - ${currentMax}`)
        const compare = (currentMax - currentMini + 1)/count
        console.log(`compare: ${compare}`)
        let iMax = currentMax;
        let iMini = currentMini;
        let arg = []
        while(iMax - compare + 1 > target) {
            arg.push(`${iMax - compare + 1}:${iMax}`)
            iMax = iMax - compare
        }
        let argUnshift = []
        while(iMini + compare - 1 < target) {
            argUnshift.unshift(`${iMini}:${iMini + compare - 1}`)
            iMini = iMini + compare
        }
        args[`${currentMini}:${currentMax}`] = arg.concat(argUnshift)
        currentMini = iMini
        currentMax = iMax
    }
    let lastArg = []
    let lastMax = currentMax + 1
    while(lastMax !== currentMini && currentMax - currentMini < count) {
        lastMax--
        if (lastMax !== target) lastArg.push(`${lastMax}`)
    }
    args[`${currentMini}:${currentMax}`] = lastArg
    console.log(args)
    console.log(`target location: ${[...Object.keys(args),`${target}`]}`)
    return args
}



setInterval(() => {
    mixTree(Math.floor(Math.random()*81)+10000, 10001, 10081, 3)
}, 1000);