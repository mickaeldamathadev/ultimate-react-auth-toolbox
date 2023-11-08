import { InputHTMLAttributes } from "react";

export default [
  { name: "contact", placeholder: "Nom d'utilisateur" },
  { name: "password", placeholder: "Mot de passe", type: "password" },
] as InputHTMLAttributes<HTMLInputElement | HTMLSelectElement>[];
