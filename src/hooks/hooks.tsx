import React, {useMemo, useState} from 'react';

type sortedFieldType = {
    key: string,
    direction: string |'ascending' | 'descending'
} | null


const useSortedData = (data:any) => {
    const [sortObj, setSortObj] = useState<sortedFieldType>(null);
     //Sorting with Memo
     const sortedItems = useMemo(() => {
        let sortedData = [...data];
        if(sortObj !== null){
            sortedData.sort((a, b) => {
                if(a[sortObj.key] < b[sortObj.key]){
                    return sortObj.direction === 'ascending' ? -1 : 1
                }
                if(a[sortObj.key] > b[sortObj.key]){
                    return sortObj.direction === 'ascending' ? 1 : -1
                }
                return 0
            })
        }
        return sortedData;
    }, [data, sortObj]);
    //Function that sets SortObject
      const checkSort = (key:string) => {
        let direction = 'ascending';
        if(sortObj && sortObj.key === key &&
            sortObj.direction === 'ascending'){
                direction = 'descending';
            }
         setSortObj({key, direction});
    }

    return { sortedData: sortedItems, checkSort, sortObj}

}
export default useSortedData;