import DocumentTable from 'ultimate-react-mongo-table'

export default function Roles(props: { roles: any[] }) {
  return (
    <div className="roles flex-start">
      <DocumentTable<any>
        documents={props.roles as any[]}
        action={() => null}
      />
    </div>
  )
}
