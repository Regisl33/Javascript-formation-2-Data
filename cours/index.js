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
