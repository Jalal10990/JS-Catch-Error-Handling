let a =  prompt("Enter first numbr")

let b = prompt("Enter second number")
// use parseInt function used to pass string to integer 

// caches function 
// fogiving nature ko km krne ke lea we use throw function 
if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Sorry this is not  all")
}
let sum = parseInt(a) + parseInt(b)
                  
//handel error by  try catch
//  iif add x is not defoned to shor error 
function main(){

    let x= 5;                 
try {
 console.log("The sum is ", sum*x) 
 return true
} catch (error) {
 console.log("Error is find")
 return false
}                       
    finally{
     console.log("Files are being closed and DB connection is being closed")
    }                  

}
let c= main()
                              