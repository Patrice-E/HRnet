import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section>
      <button type='button'>
        <Link to='/create-employee'>Create New Employee</Link>
      </button>
      <button type='button'>
        <Link to='/employees-list'>View Current Employees</Link>
      </button>
    </section>
  );
}
