let userName = prompt("Please Enter your name to visit our website? ") 
window.onload = function(){
   let message ="Good Day"
//    let firstName = prompt("Please Enter Your First Name?")
//    let lastName = prompt("Please Enter Your Last Name?")
//    let fullName = firstName +" "+ lastName
   let banger ="!"
   document.getElementById("userName").innerHTML = message + " " + userName+ banger
}
function showOutput(){
    return document.getElementById('output').innerHTML
}
function getFieldValue(fieldId){
     return document.getElementById(fieldId).value 
}
function getRandomId(){
    return Math.random().toString(36).slice(2) 
}
let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
//------------------------Show Table----------------------//
var users = []
function User(firstName, lastName, email, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.dob = dob;
}
//Reference of this Function is -> https://www.javatpoint.com/calculate-age-using-javascript //
    User.prototype.calculateAge = function () {
        let dob = new Date(this.dob)
        let currentDate = new Date()

    //calculate month difference from current date in time  
    var month_diff = currentDate.getTime() - dob.getTime();  
      
    //convert the calculated difference in date format  
    var age_dt = new Date(month_diff);   
      
    //extract year from date      
    var year = age_dt.getFullYear();  
      
    //now calculate the age of the user  
    var age = Math.abs(year - 1970);  
    return age
    } 
function handleSubmit(){
    event.preventDefault()
    let firstName = getFieldValue("firstName")
    let lastName = getFieldValue("lastName")
    let email = getFieldValue("email")
    let dob = getFieldValue("dob")

    firstName = firstName.trim()
    lastName = lastName.trim()
    email = email.trim()

    if(firstName.length < 3){
        alert('Please enter your first name correctly.')
        return
    }
    if(!emailFormat.test(email)){
        alert('Please enter your email correctly.')
        // return
    }
    if(!dob){
        alert('Please enter your Date of birth correctly.')
        return
    }
    // let user = {
    //     firstName, 
    //     lastName, 
    //     email,
    //     dob
    // }object
    let user = new User(firstName, lastName, email, dob)//constructor//user ko hum constructor ki help sy hi add karty ha//oper jo object ha us sy nahi karty//

    user.id = getRandomId()
    user.dateCreated = new Date().getTime()
    user.status = "active"
    user.role = "student"
    users.push(user)
    alert("A new user has been successfully added.")
    // console.log(users)
    // showOutput(users)
    // showTable()
}
function showTable(){
    let tableStartingCode = '<div class="table-responsive"><table class="table ">'
    let tableEndingCode = '</table></div>'
    let tableHead = '<thead><tr><th scope="col">#</th><th scope="col">First Name</th><th scope="col">Last Name</th><th scope="col">Email</th><th scope="col">Date of Birth</th><th scope="col">Age</th></tr></thead>'
    let tableBody = ''
    for(let i = 0;i<users.length;i++){
        tableBody += '<tr><th scope="row">' + (i + 1) + '</th><td>' + users[i].firstName + '</td><td>' + users[i].lastName + '</td><td>' + users[i].email + '</td><td>' + users[i].dob + '</td><td>' + users[i].calculateAge() +   '</td></tr>'
    }
    let table = tableStartingCode + tableHead + "<tbody>" + tableBody + "</tbody>" + tableEndingCode          //users[i].calculateAge() +
    //  let getElementById('output').innerHTML = table
    // showOutput(table)
    document.getElementById('output').innerHTML = table
}
//---------------------------------------------------------------//
function printUserInConsole(){
    if(!users.length){
        alert('There is not a single user available.')
        return
    }
    for (i = 0; i < users.length; i++){
        // let user = users[i]
        // console.log(user)

        let user = users[i]
        let age = users[i].calculateAge()
    }
    console.log(users)
}