import { InputHTMLAttributes } from 'react'

export default () =>
  [
    { name: 'name', placeholder: 'Nom du rôle' },
    { name: 'desc', placeholder: 'Description du rôle' },
  ] as InputHTMLAttributes<HTMLInputElement>[]
