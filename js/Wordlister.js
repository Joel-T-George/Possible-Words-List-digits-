

/*
finalDictList.wordlist[..]=>

final output
{
	0:{
		digits:2,
		ListofWords;[...],
		count: 1226..
	}
}

*/
// Main Function with limations of loops 
function loopDigits(charaters,digits){
	var finalDigit = digits
	digits = 2
	var stCombine = intialWordlist(charaters)
	var finalDictList ={wordlist:[]}
	
	finalDictList.wordlist.push(dictSturct(digits,stCombine,stCombine.length))
	digits = 3
	for(var i=0; i < finalDigit-2; ++i ){
		if(digits < finalDigit || digits == finalDigit ){
			
			var NewCombine = WordMaker(charaters,stCombine)
			
			
			finalDictList.wordlist.push(dictSturct(i+digits,NewCombine,NewCombine.length))
			stCombine = NewCombine
			digits += i		
			
		}
		else{
			console.log("Completed")
			return false
		}
	}
	console.log(finalDictList)
}
// structures  values 
function dictSturct(digits,array,counts){
	var data = {
		Digit : digits,
		ListofWords : array,
		Count : counts
	}
	return data
}
// To start intial Combinations of Charaters ..
function intialWordlist(string){
	var predefine = string
	
	var wordlistsArray=[]
	for(var i =0; i < string.length; ++i){
		var letter = string[i]
		var newString = SliceAndKeep(string)
		
		if(predefine != newString){
			for(var j=0; j < newString.length; ++j){
				var frist = letter
				letter += newString[j]
				wordlistsArray.push(letter)
				letter = frist
			}
		}
	}
	return wordlistsArray			
}
// with intial combination and orginal charaters string and make possible words
function WordMaker(string,conitinuesArry){
	var predefine = string
	var wordlistsArray=[]
	for(var i =0; i < conitinuesArry.length; ++i){
		var letter = conitinuesArry[i]
		var newString = SliceAndKeep(string)
		if(predefine != newString){
			for(var j=0; j < newString.length; ++j){
				var frist = letter
				letter += newString[j]
				wordlistsArray.push(letter)
				letter = frist
			}
		}
		
	}
	return wordlistsArray
}
// Check the repeating word
function notFound(word,array){
	var count = 0
	if(array.length == 0){
		return true
	}
	for(var index = 0; index < array.length; ++index){
		if(word == array[index]){
			count += 1
		}
	}
	if(count == 0){
		return true
	}
	if(count > 0){
		return false
	}
} 
// charater first element slice and join its end..
function SliceAndKeep(string){
	var fristCharater = string[0]
	var Newstring = string.slice(1)
	Newstring += fristCharater
	return Newstring
}

//To trail or Testing call the (loopDigits)function here  .. 
var charater = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%}^&*[]{|\:_;.~€<>?+-/=",'`