import { InputHTMLAttributes } from 'react'

export default (_id: string) =>
  [
    { name: 'id', type: 'hidden', value: _id },
    { name: 'code', placeholder: 'code confidentiel' },
  ] as InputHTMLAttributes<HTMLInputElement | HTMLSelectElement>[]
