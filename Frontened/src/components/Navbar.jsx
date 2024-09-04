import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css'
function Navbar() {
	return (
		<>
			<nav className="font-bold">
				<div className="navbar-fonts ">
					<span className='highlight'>P</span><span>urohit  </span>
					<span className='highlight'>J</span><span>unction</span>
			
				</div>
				<div className='w-1/3 top-0 right-0 fixed'>
					<ul className="flex  text-orange-700 text-lg  justify-center h-14 p-4 space-x-6 cursor-pointer  ">
						<NavLink to="/home" className='hover:underline hover:text-xl'>Home</NavLink>
						<NavLink to="/about" className='hover:underline hover:text-xl'>Services</NavLink>
						<NavLink to="/contact" className='hover:underline hover:text-xl'>Contact Us</NavLink>
						
					</ul>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
