import React, { useEffect, useState } from "react";
import { getBuilders, insertProject, getProperties } from "../services";

function BuilderList() {
  const [builders, setBuilders] = useState([]);

useEffect(() => {
  async function fetchData() {
    const builders = await getBuilders();
    const properties = await getProperties();
    console.log(builders, properties);
  }
  fetchData();
}, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {builders.map(b => (
        <div key={b.id} className="p-4 border rounded">
          <h2 className="font-bold text-lg">{b.name}</h2>
          <p>{b.description}</p>
        </div>
      ))}
    </div>
  );
}

export default BuilderList;