//Ramdom person generator

// const getRandomPerson = ()=>{
//     let real_names = "Hassan,Khubaib,Samavia,Waqar";
//     let cast_names = "Mir , kashmiri, Islamabadi";
//     let random_real_names = real_names.split(",");
//     let random_cast_names = cast_names.split(",");
//     let random_real_name = random_real_names[Math.floor(Math.random() * random_real_names.length)];
//     let random_cast_name = random_cast_names[Math.floor(Math.random() * random_cast_names.length)];
//     return `${random_real_name}  (${random_cast_name})`;

// }

// console.log(getRandomPerson()); // Output the generated random person to the console
// // This function generates a random person by combining a real name with a cast name.



//Practice:Cricket Team Match Random Generator

const getRandomTeam = ()=>{
    let teams = "Pakistan,India,Australia,England,Sri Lanka,Bangladesh";
    let random_teams = teams.split(",");
    console.log(random_teams);

    let random_match = random_teams[Math.floor(Math.random() * random_teams.length)];
    let random_match2 = random_teams[Math.floor(Math.random() * random_teams.length)];
    while (random_match === random_match2) {
        random_match2 = random_teams[Math.floor(Math.random() * random_teams.length)];
    }

    return `Match: ${random_match} vs ${random_match2}`;
}

let randomTeam = getRandomTeam(); // Output the generated random team to the console
console.log(randomTeam); // Output the generated random team to the console
// This function generates a random cricket match by selecting two different teams from a predefined list.