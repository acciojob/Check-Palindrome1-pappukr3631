// complete the given function

function palindrome(str){
	let s = str.replace(/ /g, "");

	let j = s.length-1;
	for(let i=0; i<parseInt(s.length/2); i++, j--) {
		if(s[i] != s[j])
			return false;
	}
	return true;
}
module.exports = palindrome
