let nameString = "Alice";
console.log(nameString);
nameString = "Bob";
console.log(nameString);


function generateBadgeConcat (name, role) {
    //with string concatenation + charAt
    let badge = "Name: " + name.toUpperCase() + ", Role: " + role;
    return badge;
}

var conferenceBadge = generateBadgeConcat("Bob", "Conference Organizer");
console.log(conferenceBadge);