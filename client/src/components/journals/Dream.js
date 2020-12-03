// import React from "react"
// import Card from "react-bootstrap/Card"

// function Journal(props){
//   return(
//     <Card>
//       {/* this is where we will recieve the data for the cards */}
//       <Card.Title>{props.title}</Card.Title>  
//       <Card.Title>{props.date}</Card.Title>
//       <Card.Text>{props.content}</Card.Text>
//     </Card>
//   )
// }

// export default Journal
// // Dream Journal component im accepting both for now, im notreally using the top part so it can all be changed if we need to

// // import React from "react";
// import "./App.css";
// import { dreamData } from "./dreamData";

// export const DreamJournal = () => {
//     return (
//         <>
//             <div className="dream-container">
//                 {dreamData.map((data, key) => {
//                     return (
//                         <div key={key}>
//                             <Employee
//                                 key={key}
//                                 title={data.title}
//                                 userId={data.userId}
//                                 content={data.content}
//                                 date={data.date}
//                             />
//                         </div>
//                     )
//                 })}
//             </div>
//         </>
//     );
// };

// const Dream = ({ title, userId, content, date }) => {
//     if (!name) return <div />
//     return (
//         <table>
//             <tbody>
//                 <tr>
//                     <td>
//                         <h5>{title}</h5>
//                     </td>
//                     <td>
//                         <h5>{userId}</h5>
//                     </td>
//                     <td>
//                         <h4>{content}</h4>
//                     </td>
//                     <td>
//                         <p>{date}</p>
//                     </td>
//                 </tr>
//             </tbody>
//         </table>
//     );
// }
