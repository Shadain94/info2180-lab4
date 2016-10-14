window.onload = function () {
	var wall_1 = document.getElementById("boundary1");

	wall_1.addEventListener("mouseover", function() {	
		wall_1.className="boundary youlose";	
	});

	var other_walls = document.querySelectorAll("div.boundary");


	function highlight_all(walls) {

       for (var i = 0; i < walls.length; i++) {
       	walls[i].className="boundary youlose";
       }
		var status=document.getElementById("status").innerHTML="You Lost";
	}
	 

	for (var i = 0;  i <other_walls.length;   i++) {

           
           other_walls[i].addEventListener("mouseover",function() {

           	  
           	  highlight_all(other_walls);
           	  


           	  
           })

		
	}
     var finish= document.getElementById("end");
     var status=document.getElementById("status");
     
     var state=false;
	function checkiftouched(walls) {
		for (var i = 0; i < walls.length; i++) {
			if (walls[i].className==="boundary youlose") {
                 state=true;
                 status.innerHTML="You Lost";
                 break;
                 

			}
			else{
				status.innerHTML="You Win";
				break;
				
			}
		}
	
	}


	finish.addEventListener("mouseover", function (){ 
		checkiftouched(other_walls) ;


	});
	var restart= document.getElementById("start");
	var again=false;

	function reset() {
		
			for (var i = 0; i < other_walls.length; i++) {
				other_walls[i].className="boundary";

			}
			status.innerHTML="Move your mouse over the 'S' to begin.";
			again=true;
		}
        
        
     
	function dont_cheat(e) {
		var evt=window.event || e;
		var maze=document.getElementById("maze");
		console.log(maze.offsetLeft);
		var mouse_hori=(evt.clientX);
		console.log(mouse_hori);

    	if (mouse_hori<maze.offsetLeft) {

    		for (var i = 0; i < other_walls.length; i++) {
			    other_walls[i].className="boundary youlose" 
               
                 
		
		     }
		        status.innerHTML="You Lost";
               
    	}
    	
    }

	restart.addEventListener("click",function() {
		reset();
		
		
		
	});

	restart.addEventListener("onmouseleave", function(){

		dont_cheat();
	});

	
    
    


};