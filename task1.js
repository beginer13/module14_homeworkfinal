const parser = new DOMParser();
console.log(parser);
const myString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

const xmlDOM = parser.parseFromString(myString, "text/xml");

const studentsList = [];

const studentNodes = xmlDOM.querySelectorAll("student");
studentNodes.forEach((studentNode) => {
  const nameNode = studentNode.querySelector('name');
  const lang = nameNode.getAttribute("lang");
  const firstName = nameNode.querySelector("first").textContent;
  const secondName = nameNode.querySelector("second").textContent;
  const age = Number(studentNode.querySelector("age").textContent);
  const prof = studentNode.querySelector("prof").textContent;
  
  const student = { name: firstName+" "+secondName, age: age, prof: prof, lang: lang };
  
  studentsList.push(student);
});

const res = {list: studentsList};

console.log(res);