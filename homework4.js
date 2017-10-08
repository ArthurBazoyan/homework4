// triangle

const triangleStars = function(n) {
	if(n <= 0){
    return '';
	}
  
	const drawstars = function(spc , str){
	if(str <= 0){
		return '';
	}
    
    
    const space = function(spc){
      if(spc <= 0){
		  return '';
		}
      
      return ' ' + space(spc - 1);
    };
    
    
    const stars = function(str){
      if(str <= 0) {
		  return '';
		}
      
      return "*" + stars(str - 1);
    };
    
    console.log(space(spc) + stars(str));
    drawstars(spc + 1, str - 2);
  };
  
 drawstars(0 , 2 *  n - 1);
  
}

triangleStars(4);




// pow

const pow = function(base, n) 
{  
    if (n < 1) 
	{
        return 1;
    } 
	else if ( n === 1)
	{
		return base;
	}
        return base * pow(base, n - 1);
    
};
  console.log ( pow(4,8));
  
  //reverse string
  
  const reverse = function (str) 
{
	const strlength = str.lenght; 
	const rev = function (str, i) {
		if (i <= 0){
		return  '';
		}
		return str [ i - 1 ] + rev(str, i - 1);
	};
	
	return rev ( str , strlength);
};
console.log( reverse('abcd') );

// checkerboard 

const stars = function (numstr){
	if (numstr <= 0) {
		return '';
		}


		return "* " + stars(numstr - 1);
};

const spaces = function(numspc){
	if (numspc <= 0) {
		return '';
		}


		return " *" + spaces(numspc - 1);
};

const checkH = function(num, height){
	if (height <= 0) {
		return '';
	}
		console.log(stars(num));
		console.log(spaces(num));
		return checkH(num, height - 1);
};

const checkerboard = function(size){
	
	if (size % 2 !== 0) {
		return checkH(size , (size - 1)/ 2) + stars(size);
	}
	if (size % 2 === 0) {
	return checkH(size , size / 2);
	}
};

console.log(checkerboard(5));
  
  