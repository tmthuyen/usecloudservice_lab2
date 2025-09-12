const data = [
    { id: 1, name: "An", age: 18 },
    { id: 2, name: "Bình", age: 19 },
    { id: 3, name: "Chi", age: 20 },
    { id: 4, name: "Dũng", age: 21 },
    { id: 5, name: "Hà", age: 22 },
    { id: 6, name: "Khánh", age: 23 },
    { id: 7, name: "Lan", age: 24 },
    { id: 8, name: "Mai", age: 25 },
    { id: 9, name: "Nam", age: 26 },
    { id: 10, name: "Oanh", age: 27 },
    { id: 11, name: "Phúc", age: 28 },
    { id: 12, name: "Quân", age: 29 },
    { id: 13, name: "Trang", age: 30 },
    { id: 14, name: "Uyên", age: 19 },
    { id: 15, name: "Vinh", age: 20 },
    { id: 16, name: "Xuân", age: 21 },
    { id: 17, name: "Yến", age: 22 },
    { id: 18, name: "Zara", age: 23 },
    { id: 19, name: "Hùng", age: 24 },
    { id: 20, name: "Thảo", age: 25 },
  ];
  

let bodyStudent = document.getElementById("tbody-student");

bodyStudent.innerHTML = '';
let listStu = ''
data.forEach(it => {
    listStu += `
    <tr>
        <td>${it.id}</td>
        <td>${it.name}</td>
        <td>${it.age}</td>
    </tr>
    `;
})
bodyStudent.innerHTML = listStu;