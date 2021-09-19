import ModuleDemo, { IndividualExport } from './exprot'; // 這裡的 { IndividualExport } 並不是解構賦值, 而是 es6 獲取個別暴露的的模塊
// const { IndividualExport } = ModuleDemo; // IndividualExport 會是 undefined , 因為 ModuleDemo 身上根本沒有 IndividualExport 屬性
console.log(ModuleDemo);
console.log(IndividualExport);