'use strict'

const compose = (...fns) => {
    const errorH = []
    const fn = (x) => {
        try {
        let changeX = x;
        for (let i = fns.length - 1; i >= 0; i--) {
            changeX = fns[i](changeX);
        }
    return changeX;
    }
        catch (err) {
            errorH.forEach((handler) => {
                handler(err);
            })
            return undefined;
        }
    }
    fn.on = (event, callback) => {
        if (event === 'error') {
            errorH.push(callback);
        }
    }
return fn;
}