let  result
var lis = []
    function number(num){
    for (let i = 1; i <= num; i++) {   
    if ((i % 2 == 0) && (i % 3 == 0) && (i % 5 == 0)) {
        result = "yu-gi-oh"
    }
    else if ((i % 3 == 0) && (i % 5 == 0)) {
        result = "gi-oh"
    }
    else if ((i % 2 == 0) && (i % 5 == 0)) {
       result =  "yu-oh"
    }
    else if ((i % 2 == 0) && (i % 3 == 0)) {
        result = "yu-oh"
    } 
    else if (i % 5 == 0) {
        result = "oh"
    } 
    else if (i % 3 == 0) {
        result =  "gi"
    }
    else if(i % 2 == 0) {
        result = "yu"
    }
    else{
        result = i
    } 
    lis.push(result)
        }
       
        console.log(lis)
        return
}
number(30),
number(100)


