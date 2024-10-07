function debounce(func: (arg0: any) => void, delay:number) {
    let timeoutId: NodeJS.Timeout;
    return function (args: any) {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func(args);
        }, delay);
    };
}

export default debounce;