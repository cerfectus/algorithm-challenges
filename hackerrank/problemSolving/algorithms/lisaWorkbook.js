

function workbook(n, k, arr) {
    let pages = []
    let counter = 0
    let totalPages = arr.reduce((a,b) => a+b) 
    
    let pagesArray = [...Array(totalPages).keys()].map(x => ++x)
    for(let i=0; i<arr.length; i++){
          pages.push(pagesArray.splice(0,Math.ceil(arr[i]/k)))
    }
    for(let i = 0; i<pages.length; i++){
        for(let j=0; j<pages[i].length; j++){
            let problems = [...Array(arr[i]).keys()].map(x => ++x)
            if(problems.slice(j*k,k*(j+1)).includes(pages[i][j])) counter++
            
            
        }
    }
        
    return counter;
    

}