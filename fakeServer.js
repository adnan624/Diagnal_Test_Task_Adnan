let arr = [];
for (let i = 1; i< 100 ; i++ ){
    arr.push(`ITem no : ${i}`)
}

let lastItem = '';

export const fakeServer = qyt => {
    new Promise((resolve , reject)=>{
        let newArr;

        const lastItemIndex = arr.indexOf(lastItem);
        if (lastItemIndex == arr.length - 1) return resolve('done');

        if(!lastItem){
            newArr = [...arr].slice(0,qyt);
        }else{
            const newIndex = arr.indexOf(lastItem) + 1;
            newArr = [...arr].slice(newIndex , qyt + newIndex);
            lastItem = [...newArr].pop()
        }
        setTimeout(()=>{
            resolve(newArr)
        },[200])
    })


}