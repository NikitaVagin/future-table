const useArrayChank = (arr:Array<object>, size:number) => {
    const chunked_arr = [];
    let index = 0;
    while (index < arr.length) {
    chunked_arr.push(arr.slice(index, size + index));
    index += size;
    }
    return chunked_arr;
}

export default useArrayChank;