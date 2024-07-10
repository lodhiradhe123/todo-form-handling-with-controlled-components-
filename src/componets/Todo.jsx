import React, { useState } from "react";
import { MdDeleteForever } from "react-icons/md";

function Todo() {
//   const [data, setData] = useState("");
//   const [status, setStatus] = useState();
//   const [description, setDiscription] = useState("");

const [user , setUser] =useState({data:"",status:"",description:""})

  const [store, setStore] = useState([]);

  const handlesubmit = (e) => {
    e.preventDefault();
    // const newtask = { data, status, description };
    const copydata = [...store,user];
    // copydata.push(user);
    setStore(copydata);
    setUser({data:"",status:"",description:""})
    // setData("");
    // setStatus("incomplete");
    // setDiscription("");
  };
  const deletehandler = (i) => {
    setStore(store.filter((item, index) => index !== i));
  };
  console.log(store);

  return (
    <div className="w-full  bg-zinc-400 flex flex-col justify-center items-center ">
      <form
        onSubmit={handlesubmit}
        className="w-2/4 bg-zinc-200 p-5  rounded-lg flex flex-col justify-center items-center"
      >
        <input
          type="text"
          onChange={(e) => setUser({...user,data:e.target.value})}
          value={user.data}
          placeholder="enter your task"
          className="w-full p-2 border-none rounded mb-4"
        />
        <div className="flex w-full  items-center ">
          <input
            type="radio"
            onChange={(e) => setUser({...user,status:"complete"})}
            checked={user.status == "complete" ? true : false}
            className="ml-4 "
            name="me"
          />
          copmlete
          <input
            type="radio"
            onChange={(e) => setUser({...user,status:"incomplete"})}
            checked={user.status == "incomplete" ? true : false}
            className="ml-4 "
            name="me"
          />
          incomplete
        </div>
        <textarea
          className="w-full p-2 border-none rounded mb-4 mt-4"
          type="text"
          onChange={(e) => setUser({...user,description:e.target.value})}
          value={user.description}
          name="me"
        />
        <input type="submit" className="px-3 py-1 bg-blue-300 rounded-lg " />
      </form>
      <hr />
      <div className=" show mt-10  w-2/4 bg-sky-200 p-5  rounded-lg flex flex-col jitems-center">
        <h1 className="ml-[43%] capitalize font-bold">tasks..</h1>
        <div className="data w-2/4 bg-white border-2 border-black rounded-lg p-3 mt-4">
        
        
          {store.length>0?store.map((todo, i) => {
        
            return (
              <div key={i} className="flex flex-col  mb-4 border-b-2 border-black">
                <h1>
                  {todo.data}
                </h1>
                <h1> {todo.status}</h1>
                <h1>{todo.description}</h1>
                <button onClick={() => deletehandler(i)}>
                  {" "}
                  <MdDeleteForever className="text-3xl mt-5 ml-10" />{" "}
                </button>
              </div>
            );
          }):<h1>loading....</h1>}
        </div>
      </div>
    </div>
  );
}

export default Todo;
