var userName = prompt("Please, write down your name");
if (userName.search(/\d/) == -1) { // Here we use metacharacter \d and RegExp method search().

/*At the beginning, we use split() method to separate string into array, then we change elements of array by places,
  and finally we glue together all elements of an array into a new string.*/
  	userName = userName.split("").reverse().join("");
	console.log(userName); 
} else {
	userName = userName.split("");               // We are using the split() method to return the new array
	for (var i = 0; i < userName.length; i++) {
	 	userName[i] = userName[i].toUpperCase();
	 	if (i == userName.length - 1) break; // Here we are getting out of loop if we reached the last element of the array
	 	i++;
	 	userName[i] = userName[i].toLowerCase();
	 } 
	 userName = userName.join(""); // We are using the join() method to join all elements of the array into a string
	 console.log(userName);
}