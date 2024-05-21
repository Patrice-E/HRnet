import { Link } from 'react-router-dom';

export default function CreateEmployee() {
  return (
    <>
      <header>
        <h1>HRnet</h1>
      </header>
      <Link to='/employees-list'>View Current Employees</Link>
      <h2>Create Employee</h2>
    </>
  );
}
