import { useLoaderData } from 'react-router-dom'
import DocumentTable from 'ultimate-react-mongo-table'
import { IPermission } from '../data/types'

export default function Permissions() {
  const permissions: any = useLoaderData()
  return (
    <div className="flex-start">
      <DocumentTable<IPermission> documents={permissions.data as any[]} />
    </div>
  )
}
