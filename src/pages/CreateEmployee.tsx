import { Link } from 'react-router-dom';
import EmployeeProvider from '../components/EmployeeProvider';

export default function CreateEmployee() {
  return (
    <section>
      <div className='header'>
        <img src='./logo.png' alt='' />
        <div className='header__content'>
          <header>
            <h1>HRnet</h1>
          </header>
          <Link to='/employees-list'>View Current Employees</Link>
          <h2>Create Employee</h2>
        </div>
      </div>
      <EmployeeProvider />
    </section>
  );
}
