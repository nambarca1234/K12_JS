let emList=[
    {
        emid:1,
        emName:"Nam",
        birthDay:new Date("2-11-2002")
    },
    {
        emid:2,
        emName:"Nam",
        birthDay:new Date("2-11-2002")
    },
    {
        emid:2,
        emName:"Nam",
        birthDay:new Date("2-11-2002")
    }
]
function chanName(list,index){
    list[index].emName="hai"
    return list
}
chanName(emList,2)
console.log(emList)

function getInf(list){
    console.log(list)
}
getInf(emList)