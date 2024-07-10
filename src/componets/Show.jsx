import React, { useContext } from 'react'
import { MdDeleteForever } from "react-icons/md";


function Show(props) {
  const store = props.store;
  const setStore = store.setStore;
  return (
    <div className="w-full min-h-screen bg-zinc-400 flex flex-col justify-center items-center ">
      <div className=" show mt-10  w-2/4 bg-sky-200 p-5  rounded-lg flex flex-col jitems-center">
        <h1 className="ml-[43%] capitalize font-bold">tasks..</h1>
        <div className="data w-2/4 bg-white border-2 border-black rounded-lg p-3 mt-4">
          {store.length > 0 ? (
            store.map((todo, i) => {
              return (
                <div
                  key={i}
                  className="flex flex-col  mb-4 border-b-2 border-black"
                >
                  <h1>{todo.data}</h1>
                  <h1> {todo.status}</h1>
                  <h1>{todo.description}</h1>
                  <button onClick={() => deletehandler(i)}>
                    {" "}
                    <MdDeleteForever className="text-3xl mt-5 ml-10" />{" "}
                  </button>
                </div>
              );
            })
          ) : (
            <h1>loading....</h1>
          )}
        </div>
      </div>
    </div>
  )
}

export default Show