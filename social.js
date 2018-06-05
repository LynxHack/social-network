var data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};

//List everyone and their followings
function makenetwork (data){
	var info = {};
	var listofpeople = [];
	for(var i in data){	
		for(var j = 0; j < data[i]['follows'].length; j++){
			listofpeople.push(data[data[i]['follows'][j]]['name']);
		}
		info[data[i]['name']] = {name: data[i]['name'], following: 
	listofpeople}; 	
		listofpeople = [];
	}
	return info;
}

console.log(makenetwork(data));


//return person following most people
function followsmost (data){
	var info = {};
	var listofpeople = [];

	var person = "";
	var largestfollowing = 0;
	for(var i in data){	
		if(data[i]['follows'].length > largestfollowing){
			person = data[i]['name'];
			largestfollowing = data[i]['follows'].length;
		}
	}

	return person;
}

console.log(followsmost(data));

