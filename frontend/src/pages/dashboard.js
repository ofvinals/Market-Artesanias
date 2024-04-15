import React, { useEffect } from 'react';
import { Detail } from '../components/Dashboard/Detail';
import NavBar from '../components/NavBar.jsx';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function Dashboard() {
	const admin = useSelector((state) => state.auth.admin);
	const navigate = useNavigate();

	// useEffect(() => {
	// 	if (!admin) {
	// 		navigate('/');
	// 		Swal.fire({
	// 			icon: 'error',
	// 			title: 'Ingreso rechazado',
	// 			text: 'No tiene autorizacion para ingresar!',
	// 			showConfirmButton: false,
	// 			timer: 3000,
	// 		});
	// 	}
	// }, [admin, navigate]);

	return (
		<>
			<NavBar />
			<Detail />
		</>
	);
}
export default Dashboard;
