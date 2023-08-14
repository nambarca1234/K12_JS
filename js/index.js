let arr = [1, 4, 5, 6, 7, 50, 41]

function findMax(arrV) {
    let max = arrV[0]
    for (let i = 0; i < arrV.length; i++) {
        if (arrV[i] > max) {
            max = arrV[i]
        }
    }
    console.log(max)
}


function sort(arrX) {
    for (let i = 0; i < arrX.length; i++) {
        for (let j = 1; j <= arrX.length; j++) {
            if (arrX[j] > arrX[j + 1]) {
                let temp = arrX[j];
                arrX[j] = arrX[j + 1];
                arrX[j + 1] = temp;
            }
        }
    }
}

function find(x, arrX) {
    sort(arrX);
    console.log(arrX)
    for (let i = 0; i < arrX.length; i++) {
        if (arrX[i] == x) {
            console.log("so can tim o vi tri " + i + " sau khi duoc sap xep va co gia tri = " + x);
        }
    }
}

find(4, arr)

// object
let data = {
    id: 1,
    name: "nam",
    age: 18,
    address: "ha tinh"
}

console.log(data)
let a = data
let ten = data.name
console.log(ten)
data.name = "duy"
console.log(data.name)

let product = {
    id: 1,
    pname: "iphone 14",
    cid: 1,
    sid: 1,
    price: 2.8
}
console.log(product)

let list1 = [
    product, {
        id: 1,
        pname: "iphone 14",
        cid: 1,
        sid: 1,
        price: 2.8
    },
    {
        id: 2,
        pname: "iphone 14",
        cid: 1,
        sid: 1,
        price: 2.8
    },
    {
        id: 3,
        pname: "iphone 14",
        cid: 1,
        sid: 1,
        price: 2.8
    }
]
console.log(list1)
console.log(list1[1])

let listCustomer = [{
    id: 1,
    name: "nam",
    birthDay: new Date("10-11-2020")
    },
    {
        id: 2,
        name: "hai",
        birthDay: new Date("10-11-2020")
    },
    {
        id:3,
        name:"ssss",
        birthDay: new Date("10-11-2020")
    }
]
console.log(listCustomer)
console.log(listCustomer[2])