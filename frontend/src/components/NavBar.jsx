import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/Actions/auth';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
	const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
	const admin = useSelector((state) => state.auth.admin);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [expand, setExpand] = useState(false);

	const handleNavCollapseToggle = () => {
		setExpand(true);
	};

	const handleNavCollapse = () => {
		setExpand(false);
	};

	const handleLogOut = () => {
		dispatch(logout());
		navigate('/');
	};

	return (
		<>
			<Navbar data-bs-theme='dark' expand='md' className='bg-specific '>
				<div className='flex flex-row items-center justify-around w-full'>
					<Navbar.Toggle
						aria-controls={`offcanvasNavbar-expand-md`}
						onClick={handleNavCollapseToggle}
					/>
					<Navbar.Brand href='/'>
						<img
							className='ms-3'
							src='/Logo.jpg'
							width={100}
							alt='logoestudio'
						/>
					</Navbar.Brand>

					<Navbar.Offcanvas
						id={`offcanvasNavbar-expand-md`}
						className='bg-specific h-[350px]'
						data-bs-theme='dark'
						show={expand}
						onHide={() => setExpand(false)}
						aria-labelledby={`offcanvasNavbarLabel-expand-md`}
						placement='end'>
						<Offcanvas.Header closeButton></Offcanvas.Header>
						<Offcanvas.Body className='flex md:flex-row-reverse w-full'>
							<Nav className='flex flex-col text-xl items-center justify-around md:justify-between md:mx-10 w-full'>
								<Link
									className='my-3 font-bold'
									to='/aboutus'
									onClick={handleNavCollapse}>
									<i className='fa-solid fa-people-group mr-3 md:hidden'></i>
									Nuestro equipo
								</Link>
								<Link
									className='my-3 md:hidden font-bold'
									to='/mi-tienda'
									onClick={handleNavCollapse}>
									<i class='fa-solid fa-briefcase mr-3'></i>
									Mi Tienda
								</Link>
								{admin ? (
									<Link
										className='font-bold'
										to='/dashboard'
										onClick={handleNavCollapse}>
										<i className='iconavbar bi bi-person-fill-gear'></i>
										Panel de Administracion
									</Link>
								) : null}
								<div className='flex md:flex-row flex-col items-center justify-end'>
									{isLoggedIn ? (
										<button
											onClick={(e) => {
												handleNavCollapse(e);
												handleLogOut(e);
											}}
											className='my-3 font-bold md:mr-3'>
											<i className='iconavbar bi bi-box-arrow-left'></i>
											Cerrar Sesión
										</button>
									) : (
										<Link
											to='/login'
											onClick={handleNavCollapse}
											className='my-3 md:mr-3 font-bold'>
											<i className='iconavbar bi bi-box-arrow-in-right'></i>
											Iniciar Sesión
										</Link>
									)}
									<Link
										to='/register'
										className={`my-3 font-bold border-2 py-1 px-3 ${
											isLoggedIn ? 'hidden' : ''
										}`}
										onClick={(e) => {
											handleNavCollapse(e);
										}}>
										<i className='iconavbar bi bi-r-circle-fill'></i>
										Crear cuenta
									</Link>
								</div>
							</Nav>
						</Offcanvas.Body>
					</Navbar.Offcanvas>

					<div className='mr-10'>
						{isLoggedIn ? (
							<Link to='/search' className='text-white text-xl mr-4'>
								<i className='fa-solid fa-magnifying-glass'></i>{' '}
							</Link>
						) : (
							<Link to='/login' className='text-white text-xl mr-4'>
								<i className='fa-solid fa-user'></i>
							</Link>
						)}
						<Link to='/cart' className='text-white text-xl ml-2'>
							<i className='fas fa-shopping-cart'></i>
						</Link>
					</div>
				</div>
			</Navbar>
		</>
	);
}

export default NavBar;
