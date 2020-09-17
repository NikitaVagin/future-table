
const useFilterData = (arr:Array<object>, search: string | number) => {
    if(!search){
        return arr
    }
    const filtrs = arr.filter((item:any) => {
        for(let key in item ){
            if(String(item[key]).toLowerCase().includes(String(search).toLowerCase())){
                return true
            }
        }
    })
    return filtrs
}

export default useFilterData;
