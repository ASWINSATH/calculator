//1. display number in textbox
function displaynum(num){
    output.value+=num
}
//2. clear textbox
function clearBox(){
    output.value=""
}
//3. evaluate epression
function evalExpr(){
    output.value=eval(output.value)
}
//4. remove last item from text box
function removeItem(){
    curExpr=output.value
    output.value=curExpr.slice(0,-1)
}
//git clone (paste the path copied from github upload)

