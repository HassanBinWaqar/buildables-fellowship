// small helpers
exports.pick = (obj, fields) => fields.reduce((a,f)=>{ if (obj[f]!==undefined) a[f]=obj[f]; return a; }, {});
