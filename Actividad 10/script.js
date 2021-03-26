let list = document.getElementById("list");

let names = [];

const addName = () => {
    let name = document.getElementById("name");
    list.innerHTML = "";
    names.push(name.value);
    getNames();
    name.value = "";
}

const getNames = () => names.map(name => {
    let li = document.createElement("li");
    li.innerHTML = ''
    li.innerHTML = name;
    list.appendChild(li);
})

const deleteNames = () => {
    list.innerHTML = "";
    names = [];
}