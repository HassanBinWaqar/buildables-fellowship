import React, { useEffect, useState } from "react";

export default function AutoSave() {
  const [formState, setFormState] = useState({ title: "", content: "" });

  useEffect(() => {
    const id = setInterval(() => {
      localStorage.setItem("autosave_draft", JSON.stringify(formState));
      console.log("Draft saved");
    }, 20 * 1000);
    return () => clearInterval(id);
  }, [formState]);

  useEffect(() => {
    const saved = localStorage.getItem("autosave_draft");
    if (saved) setFormState(JSON.parse(saved));
  }, []);

  return (
    <div>
      <h2>Auto-save Form</h2>
      <input value={formState.title} onChange={e => setFormState({...formState, title: e.target.value})} placeholder="Title"/>
      <br/>
      <textarea value={formState.content} onChange={e => setFormState({...formState, content: e.target.value})} placeholder="Content"/>
      <p><small>Auto-saves every 20s to localStorage.</small></p>
    </div>
  );
}