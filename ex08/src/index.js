var contacts = [
    {
    "firstName": "John",
    "lastName": "Doe",
    "number": "12365495208",
    "likes": ["C", "C++", "C#"]
    },
    {
    "firstName": "Jane",
    "lastName": "Doe",
    "number": "4568295761",
    "likes": ["Python", "Swift", "R"]
    },
    {
    "firstName": "Richard ",
    "lastName": "Roe",
    "number": "6938257149",
    "likes": ["React", "Angular", "Vue"]
    },
    {
    "firstName": "Jane",
    "lastName": "Roe",
    "number": "unknown",
    "likes": ["JavaScript", "Node", "HTML & CSS"]
    }
    ];
function lookUpProfile(name, prop){
    // Only change code below this line
    for (let i = 0; i < contacts.length; i++) {

        if ( contacts[i].hasOwnProperty(prop)){
            if (name == contacts[i]['firstName']) {
                return contacts[i][prop];
            } else {
                console.log(contacts[i][prop])
                return "No such contact";

            };
        } else {
            return "No such property";
        };
    };
    // Only change code above this line
};
console.log(lookUpProfile("John", "likes")); // Change this line
console.log(lookUpProfile("Jane", "lastName"));
console.log(lookUpProfile("Rob", "number"));
console.log(lookUpProfile("Rob", "JavaScript"));
console.log(lookUpProfile("John", "address"));
module.exportS = lookUpProfile;
