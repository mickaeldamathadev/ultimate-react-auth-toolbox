import { Link, useLoaderData } from 'react-router-dom'
import DocumentTable from 'ultimate-react-mongo-table'
import { IPermission } from '../data/types'

export default function Permissions() {
  const permissions: any = useLoaderData()
  return (
    <div className="flex-start">
      <Link to="/app/admin/permissions/new">Creer une NOUVEL Permission</Link>

      <DocumentTable<IPermission> documents={permissions.data as any[]} />
    </div>
  )
}
