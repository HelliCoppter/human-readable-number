module.exports = function toReadable (number) {
    
    let obj = {
		0: 'zero',
		1: 'one',
		2: 'two',
		3: 'three',
		4: 'four',
		5: 'five',
		6: 'six',
		7: 'seven',
		8: 'eight',
		9: 'nine',
		10: 'ten',
		11: 'eleven',
		12: 'twelve',
		13: 'thirteen',
		14: 'fourteen',
		15: 'fifteen',
		16: 'sixteen',
		17: 'seventeen',
		18: 'eighteen',
		19: 'nineteen',
		20: 'twenty',
		30: 'thirty',
		40: 'forty',
		50: 'fifty',
		60: 'sixty',
		70: 'seventy',
		80: 'eighty',
		90: 'ninety',
		100: 'hundred',
		1000: 'thousand',

	};

	let arr = number.toString().split('');
	let result = [];

	function simple(arr) {
		if (arr.length == 1) {
		result.push(obj[arr[0]])
		} else if (arr.length == 2) {
			if (arr[0] == 0) { 
				if (arr[1] != 0) { result.push(obj[arr[1]]) }
				return
			}
			if (arr[0] == 1) {
				result.push(obj[`${arr[0]}${arr[1]}`])
			} else if (arr[1] != 0) { result.push(`${obj[`${arr[0]}0`]} ${obj[arr[1]]}`) }
					else if (arr[0] !=0 ) { result.push(`${obj[`${arr[0]}0`]}`) }
						else {result.push(obj[arr[1]])}
		}
	}

	function hundred(arr) {
		result.push(`${obj[arr[0]]} ${obj[100]}`);
		arr.shift();
		simple(arr);
	}

	function thousand(arr) {
		result.push(`${obj[arr[0]]} ${obj[1000]}`);
		arr.shift();
		hundred(arr);
	}
	
	if (arr.length == 4) {
		thousand(arr)
	} else if (arr.length == 3) {
		hundred(arr)
	} else {simple(arr)}

	let res = result.join(' ')
	
	return res;
    
}
