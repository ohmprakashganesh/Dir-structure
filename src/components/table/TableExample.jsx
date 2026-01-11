import Table, { TableCell, TableHeader, TableRow } from "./TableComp";

const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@gmail.com",
    role: "Admin",
    age: 28,
    status: "Active",
    createdAt: "2024-10-15",
    isVerified: true,
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@gmail.com",
    role: "User",
    age: 24,
    status: "Inactive",
    createdAt: "2024-11-02",
    isVerified: false,
  },
];


function TableExample() {

   if (users.length === 0) {
  
    return (
      <EmptyState
        title="No users available"
        description="Users will appear here once they are added."
      />
    );
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableCell isHeader>ID</TableCell>
          <TableCell isHeader>Name</TableCell>
          <TableCell isHeader>Email</TableCell>
          <TableCell isHeader>Role</TableCell>
        </TableRow>
      </TableHeader>
      <tbody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
}

export default  TableExample;
