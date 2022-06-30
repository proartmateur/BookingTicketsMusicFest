var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var import_Concierto = __toModule(require("./src/TicketmasterCtx/Concierto/Domain/Concierto"));
var import_Day = __toModule(require("./src/TicketmasterCtx/Concierto/Domain/Day"));
var import_Stage = __toModule(require("./src/TicketmasterCtx/Concierto/Domain/Stage"));
var import_ConciertoName = __toModule(require("./src/TicketmasterCtx/Concierto/Domain/ValueObjects/ConciertoName"));
import_Stage.Stage;
try {
  const concierto = import_Concierto.Concierto.create(new import_ConciertoName.ConciertoName("MF 23"), "Auditorio BlackBerry");
  const seats_per_day = 50;
  concierto.addDay(import_Day.Day.create("D\xEDa 1", seats_per_day));
  concierto.addDay(import_Day.Day.create("D\xEDa 2", seats_per_day));
  concierto.addDay(import_Day.Day.create("D\xEDa 3", seats_per_day));
  concierto.addDay(import_Day.Day.create("D\xEDa 4", seats_per_day));
  console.log(concierto);
} catch (err) {
  console.log(err.message);
}
//# sourceMappingURL=index.js.map
