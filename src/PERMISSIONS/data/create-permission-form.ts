import { InputHTMLAttributes } from "react";

export default (_id: string) =>
  [
    { name: "user-id", type: "hidden", value: _id },
    { name: "type", placeholder: "Nom de la permission" },
    { name: "ressource", placeholder: "Route" },
    { name: "action", placeholder: "Action" },
  ] as InputHTMLAttributes<HTMLInputElement>[];
