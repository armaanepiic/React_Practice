import "./App.css";

export default function App() {

  const people = [
    {
      id: 0,
      name: "Creola Katherine Johnson",
      profession: "mathematician",
    },
    {
      id: 1,
      name: "Mario José Molina-Pasquel Henríquez",
      profession: "chemist",
    },
    {
      id: 2,
      name: "Mohammad Abdus Salam",
      profession: "physicist",
    },
    {
      id: 3,
      name: "Percy Lavon Julian",
      profession: "chemist",
    },
    {
      id: 4,
      name: "Subrahmanyan Chandrasekhar",
      profession: "astrophysicist",
    },
  ];

  return (
    <ul>
      {people.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}












/*
* A component must fulfill 3 criteria
  1) Component must be a function
  2) A component must return "something"
  3) That "something" must be some html type code (jsx)

*/
