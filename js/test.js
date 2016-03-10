/*(function (){
		alert(1);
}());
!function (){
		alert(1);
}();*/
/*function aa(){  
	var b=10;
	alert(b);  
	return function cc(){                           
		b++;   
		alert(b);  
	}  
} 
aa()();*/
/*function test(){        
	return function(){alert("sad")} 
}

test()();*/
var result=[];
function foo(){
    var i= 0;
    for (;i<3;i=i+1){
        result[i]=function(){
            alert(i)
        }
    }
};
foo();
result[0](); // 3
result[1](); // 3
result[2]();




/*var result=[];
function foo(){
    
    for (var i=0;i<3;i=i+1){
        result[i]=(function(j){
        	return function(){
        		alert(j)
        	}          
        }(i));
    }
};
foo();
result[0](); 
result[1]();
result[2]();  */