self.onmessage = function(e){
  // heavy computation simulation
  const n = e.data.n || 1000000;
  let s = 0;
  for(let i=0;i<n;i++) s += i;
  self.postMessage({ result: s, ts: new Date().toISOString() });
};
