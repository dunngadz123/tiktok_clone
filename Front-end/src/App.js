import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import App2 from "./css/App";
import Home from "./pages/Home";
import News from "./pages/News";
import Contact from "./pages/Contact";

// const gifts = ["Con cặc", "Lồn", "Dái"];

// const courses = [
//   {
//     id: 1,
//     name: "Lồn",
//   },
//   {
//     id: 2,
//     name: "Cặc",
//   },
//   {
//     id: 3,
//     name: "Dái",
//   },
// ];

function App() {
  // const [info, setInfo] = useState({
  //   name: "Con cặc",
  //   age: 11,
  // });
  // const handleClick = () => {
  //   setInfo({
  //     ...info,
  //     address: "Lồn",
  //   });
  // };
  // return (
  //   <div className="App">
  //     <h1>{JSON.stringify(info)}</h1>
  //     <button onClick={handleClick}>M đoán xem chuyện gì sẽ xảy ra</button>
  //   </div>
  // );

  // Ramdom gift
  // const [gift, setGift] = useState();
  // const handleRandom = () => {
  //   const index = Math.floor(Math.random() * gifts.length);
  //   setGift(gifts[index]);
  // };
  // return (
  //   <div>
  //     <h1>{gift || "Chưa có phẩn thưởng"}</h1>
  //     <button onClick={handleRandom}>Nhận</button>
  //   </div>
  // );
  // Check box
  // const [checked, setChecked] = useState([]);
  // const handleSubmit = () => {
  //   console.log({ id: checked });
  // };
  // console.log(checked);
  // const handleCheck = (id) => {
  //   setChecked((prev) => {
  //     const isCheck = checked.includes(id);
  //     if (isCheck) {
  //       return checked.filter((item) => item !== id);
  //     } else {
  //       return [...prev, id];
  //     }
  //   });
  // };
  // return (
  //   <div>
  //     {courses.map((course) => (
  //       <div key={course.id}>
  //         <input
  //           type="checkbox"
  //           checked={checked.includes(course.id)}
  //           onChange={() => handleCheck(course.id)}
  //         />
  //         {course.name}
  //       </div>
  //     ))}
  //     <button type="submit" onSubmit={handleSubmit}>
  //       Con cặc
  //     </button>
  //   </div>
  // );

  // Todo list
  // const [job, setJob] = useState("");
  // const [jobs, setJobs] = useState(() => {
  //   // chuyển đổi json về mảng
  //   const storageJobs = JSON.parse(localStorage.getItem("jobs"));
  //   // Kiểm tra null hoặc undefined
  //   return storageJobs ?? [];
  // });
  // const handleSubmit = () => {
  //   setJobs((prev) => {
  //     const newJobs = [...prev, job];
  //     // Lưu vào local storage
  //     const jsonJobs = JSON.stringify(newJobs);
  //     localStorage.setItem("jobs", jsonJobs);
  //     return newJobs;
  //   });
  //   setJob("");
  // };
  // return (
  //   <div>
  //     <input type="text" value={job} onChange={(e) => setJob(e.target.value)} />
  //     <button onClick={handleSubmit}>Add</button>
  //     <ul>
  //       {jobs.map((job, index) => (
  //         <li key={index}>{job}</li>
  //       ))}
  //     </ul>
  //   </div>
  // );

  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>Show</button>
      {show && <App2 primary />}
      <App2 disable />
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
