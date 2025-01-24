function countmultiples(num){
let count=0
    for (let i=1;i<=20;i++){
        if(i%num==0){
            count++
             }
    }
    return count
}
let result=countmultiples(5)
document.writeln(result)

document.writeln("<br>")
///////////////////////////////
function printsquares(){

    for(let i=1;i<=4;i++){
        resu=i*i
        document.writeln(i,"^","2","=",resu,"<br>")
        
    }

}
printsquares()

////////////////////////////////

let odd=0
function oddSummation(){
    for(let i=1;i<=12;i++){
if(i%2!=0){
    odd++
}
    }
    return odd
 }
let oddsum= oddSummation()
document.writeln(oddsum)
/////////////////////////
document.writeln("<br>")


let even=0
function evenSummation(){
    for(let i=1;i<=12;i++){
if(i%2==0){
    even++
}
    }
    return even
 }
let evensum= evenSummation()
document.writeln(evensum)
/////////////////////
document.writeln("<br>")
function printuserdata(name,age,address){
    document.writeln("name:",name,"<br>")
    document.writeln("age:",age,"<br>")
    document.writeln("address:",address,"<br>")
}

printuserdata("seif",25,"cairo")

document.writeln("<br>")
/////////////////////
function printdigitsum(num1){

    let sum1=0
    let current=num1
    while (num1>=100||num1<=999,current>0)
    {
        sum1+=current%10
        current=(current-current %10)/10
    }
    document.writeln(sum1)  
    
}


    
printdigitsum(949)


