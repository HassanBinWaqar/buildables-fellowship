import React, { useEffect, useState } from "react";

export default function App(){
  const [latest, setLatest] = useState(null);
  const [list, setList] = useState([]);

  async function loadLatest(){
    try{
      const res = await fetch("/api/snapshots/latest");
      const json = await res.json();
      setLatest(json);
    }catch(e){ console.error(e); }
  }
  async function loadAll(){
    try{
      const res = await fetch("/api/snapshots");
      setList(await res.json());
    }catch(e){ console.error(e); }
  }

  useEffect(() => {
    loadLatest();
    loadAll();
    const id = setInterval(() => {
      loadLatest();
    }, 5 * 60 * 1000); // refresh every 5 minutes while page open
    return () => clearInterval(id);
  }, []);

  return (
    <div style={{fontFamily:"system-ui, sans-serif", padding:20}}>
      <h1>Scheduled News Snapshot (Demo)</h1>
      <section>
        <h2>Latest Snapshot</h2>
        {latest ? (
          <div>
            <p><strong>Saved at:</strong> {latest.ts}</p>
            <ul>{latest.headlines.map((h,i)=>(<li key={i}>{h.title} — <em>{h.source}</em></li>))}</ul>
          </div>
        ) : <p>Loading...</p>}
      </section>
      <section>
        <h2>Past Snapshots</h2>
        <ol>
          {list.map((s,idx)=>(
            <li key={idx}>
              <strong>{s.ts}</strong>
              <ul>{s.headlines.map((h,i)=>(<li key={i}>{h.title}</li>))}</ul>
            </li>
          ))}
        </ol>
      </section>
      <button onClick={() => { loadLatest(); loadAll(); }}>Manual Refresh</button>
    </div>
  );
}
