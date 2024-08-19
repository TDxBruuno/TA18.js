let people = [
  { name: "John Doe" },
  { name: "Jane Smith" },
  { name: "Mike Johnson" },
  { name: "Emily Davis" },
  { name: "David Brown" },
];

let personList = document.getElementById("personList");
let searchInput = document.getElementById("searchInput");

function renderList() {
  const searchTerm = searchInput.value.toLowerCase();
  personList.innerHTML = "";

  people.forEach((person) => {
    if (person.name.toLowerCase().includes(searchTerm)) {
      const li = document.createElement("li");
      li.textContent = person.name;
      personList.appendChild(li);
    }
  });
}

searchInput.addEventListener("input", renderList);
renderList();
