const solution = (order) => {
    return [...String(order).matchAll(/[369]/g)].length;
}
