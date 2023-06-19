"use strict";
var screen = document.getElementById("eval");
var screen_num = screen.getElementsByTagName("p")[0];
var digit = document.getElementsByClassName('numbers');
// var digit1=digit.getElementsByTagName("p")[0];

var op1=[];
//var op2=[];

for (var i=0;i<digit.length;++i){
    digit[i].addEventListener('click',function(){
        var value = this.getAttribute('data_val');   //current button the function is on we can get this by this

        if(value=="="){
            var a=eval(screen_num.innerText);
            var ans= a.toFixed(2);         //decimal places
            //console.log(a);
            screen_num.innerText=ans;
        }
        else{
            if(value=='+'){
                //op1.push=value
                screen_num.innerText+=value;
            }
            else if(value=='-'){
                //op1.push=value;
                screen_num.innerText+=value;
            }
            else if(value=='*'){
                //op1.push=value;
                screen_num.innerText+=value;
            }
            else if(value=='/'){
                //op1.push=value;
                screen_num.innerText+=value;
            }
            else if(value=='%'){
                //op1.push=value;
                screen_num.innerText+=value;
            }
            else if(value=='AC'){
                screen_num.innerText="";
            }
            else if(value=='back'){
                // op1.pop();
                // screen_num.innerText=screen_num.innerText.replace(screen_num.innerText[screen_num.innerText.length-1],'');
                screen_num.innerText=screen_num.innerText[screen_num.innerText.length-1];
            }
            else{
                op1.push(value);
                screen_num.innerText+=value;
            }
        }
        
    })
}
