import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section>
      <button type='button'>
        <Link to='/create-employee'>View Current Employees</Link>
      </button>
      <button type='button'>
        <Link to='/employees-list'>Create New Employee</Link>
      </button>
    </section>
  );
}
