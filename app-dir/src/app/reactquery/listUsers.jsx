"use client";

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React, { useState } from "react";

async function getUsers() {
   const res = await fetch("https://jsonplaceholder.typicode.com/users");
   const users = await res.json();
   return users;
}

export default function ListUsers() {
   const [count, setCount] = useState(0);

   const { data, isLoading, isFetching, error } = useQuery({
      queryKey: ["hydrate-users"],
      queryFn: () => getUsers(),
   });

   return (

      <section className="pt-[120px] pb-[120px]">
         <div className="container">
            <div style={{ marginBottom: "4rem", textAlign: "center" }}>
               <h4 style={{ marginBottom: 16 }}>{count}</h4>
               <button onClick={() => setCount((prev) => prev + 1)}>increment</button>
               <button
                  onClick={() => setCount((prev) => prev - 1)}
                  style={{ marginInline: 16 }}
               >
                  decrement
               </button>
               <button onClick={() => setCount(0)}>reset</button>
            </div>

            {error ? (
               <p>Oh no, there was an error</p>
            ) : isLoading || isFetching ? (
               <p>Loading...</p>
            ) : data ? (
               <div
                  style={{
                     display: "grid",
                     gridTemplateColumns: "1fr 1fr 1fr 1fr",
                     gap: 20,
                  }}
               >
                  {data.map((user) => (
                     <div
                        key={user.id}
                        style={{ border: "1px solid #ccc", textAlign: "center" }}
                     >
                        <Image
                           src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
                           alt={user.name}
                           height={180}
                           width={180}
                        />
                        <h3>{user.name}</h3>
                     </div>
                  ))}
               </div>
            ) : null}
         </div>
      </section>
   );
}