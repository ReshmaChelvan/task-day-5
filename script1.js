let  Resume = {
    "Name":"A.Reshma",
    "Gender":"Female",
    "location":{
      "Address":"No:28 sankara garden achipatti pollachi",
       "postalAddress":"Aachipati-642002",
       "city":"Coimbatore",
       "region":"Tamilnadu",
       "country":"India",
        },
      "contact":{
      "Telephone":"9003389293",
      "E-mail":"reshmaarullchelvan@gmail.com",
      },
   "Education details":{
        "Degree":"B-Tech IT Hindusthan Institute of Technology-2020",
       "School":" 12th -The Merit higher Secondary School-2016",
        "School":"10th - New Bharath Matriculation School-2013 ",
        },
        "skill":["Html","Css","js"],
    "certificate":"Security Challanges In Mobile AD-HOC Networks" ,
      }      
  
//for in loop: 
for(let key in Resume){
  console.log(Resume[key]);
 }


//for loop:
 let skeys = Object.keys(Resume);
 for(let i = 0; i < skeys.length; i++) {
   let key = skeys[i];
   console.log(Resume[key])
 }

//for each
skeys.forEach((key) => {
  console.log(Resume[key])
})


//for of
for(key of skeys){
 console.log(Resume[key]);
}
               
               
               
               
               
               
               
