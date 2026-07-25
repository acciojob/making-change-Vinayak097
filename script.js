const makeChange = (c) => {
	penny=1;
	nickel=5;
	Dime=10;
	quarter=25;
	let obj = {
		q:0,
		n:0,
		d:0,
		p:0
	}
	let n=c;
	while(n>0){
		if(n>=quarter){
			let r = Math.floor(n/quarter);
			n=n%quarter;
			obj.q=r
		}
		if(n>=Dime){
			let r=Math.floor(n/Dime);
			n=n%Dime;
			obj.d=r;
		}
		if(n>=nickel){
			let r = Math.floor(n/nickel)
			n=n%nickel;
			obj.n=r;
		}
		if(n>=penny){
			let r = Math.floor(n/penny);
			n=n%penny;
			obj.p=r;
		}
	}
	return obj
	
	 
	
  // your name here
}; 

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
