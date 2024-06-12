import { Link } from 'react-router-dom';
import ListCurrentEmployees from '../components/listCurrentEmployees';

export default function CurrentEmployees() {
  return (
    <>
      <header>
        <h1>Current Employees</h1>
      </header>
      <ListCurrentEmployees />
      <Link to='/create-employee'>Add a new employee</Link>
    </>
  );
}
