let bubbleSort = (arr) => {
    let len = arr.length
    let swap;
    do {
        swap = false
        for(let i = 0;i < len; i++){
            if(arr[i]>arr[i+1]){
                let tmp = arr[i]
                arr[i]=arr[i+1]
                arr[i+1] = tmp
                swap = true
            }
        }
    }while(swap)
        return arr   
}
     