const express = require('express');
const app = express();
app.use(express.json());
let items = [], id = 1;

app.get('/items', (req,res) => res.json(items));
app.post('/items', (req,res) => { const it = { id: id++, ...req.body }; items.push(it); res.status(201).json(it); });
app.put('/items/:id', (req,res) => { const iid = +req.params.id; const idx = items.findIndex(i=>i.id===iid); if(idx===-1) return res.status(404).end(); items[idx] = {...items[idx], ...req.body}; res.json(items[idx]); });
app.delete('/items/:id', (req,res) => { items = items.filter(i => i.id !== +req.params.id); res.json({deleted:true}); });

app.listen(3001, ()=>console.log('CRUD example running on 3001'));
