import { useLoaderData } from 'react-router'
import DocumentTable from 'ultimate-react-mongo-table'

export default function Roles() {
  const roles = useLoaderData()
  return (
    <div className="roles flex-start">
      <DocumentTable<any>
        documents={(roles as any[]) || []}
        action={() => null}
      />
    </div>
  )
}
