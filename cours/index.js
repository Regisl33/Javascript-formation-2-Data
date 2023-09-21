let data = [
  {
    pseudo: "Denis",
    age: 33,
    technos: ["Javascript", "React", "NodeJS"],
    admin: false,
  },
  {
    pseudo: "Samia",
    age: 24,
    technos: ["Javascript", "React", "NodeJS"],
    admin: false,
  },
  {
    pseudo: "Nicolas",
    age: 42,
    technos: ["PHP", "React", "NodeJS"],
    admin: true,
  }
]

if(data[0].age > data[1].age){
  console.log(data[0].pseudo + " est plus agé que " + data[1].pseudo);
}else{
  console.log(data[1].pseudo + " est plus agé que " + data[0].pseudo);
}
for(const user of data) {
  document.body.innerHTML += `<li>${user.pseudo} - ${user.age}</li>`;
}
for (i = 0; i < data.length; i++){
  document.body.innerHTML += `<li>${data[i].pseudo} - ${data[i].age}</li>`;
}

document.body.addEventListener("click", (e) =>{
  switch(e.target.id){
    case "javascript":
      document.body.style.background = "yellow"
      break;
    case "php":
      document.body.style.background = "violet"
      break;
    case "python":
      document.body.style.background = "blue"
      break;
    default:
      null;
  }
});
let array1 = ["javascript", "PHP", "Python"]
let array2 = ["ruby", "solidity"]

let newArray = array1 + array2 

document.body.innerHTML = data
.filter((user) => user.admin === false)
.sort((a , b) => b.age - a.age)
.map((user) =>
 `
  <div class="user-card">
    <h2> ${user.pseudo} </h2>
    <p>Age : ${user.age} </p>
    <p>Status : ${user.admin ? "Modérateur" : "Membre"} </p>
  </div>
`
)
.join("")


let date = new Date()
console.log(date)

let iso = date.toISOString();

let moreData = {
  destVar: ["Element 1", "Element 2"]
};
//pour destrcturer le tableau
const  { destVar } = moreData;

let array5 = [70, 80, 90]
let [x, y, z] = array5

const dateDestructuring = (chaine) => {
  let newdate = chaine.split("T")[0];
  let [y, m, d] = newdate.split("-");
  return [d, m, y].join("/");
}
console.log(dateDestructuring(iso))
