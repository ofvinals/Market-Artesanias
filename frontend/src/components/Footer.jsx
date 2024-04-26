import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Footer.css';

function Footer() {
	return (
		<>
			<div className='container-footer bg-[#E98C00] min-h-96 rounded-tl-3xl rounded-tr-3xl'>
				<Link className='mt-10' to='/home'>
					<img className='imglogo' src='Logo.jpg' alt='Logo' />
				</Link>
				<div className='container-link'>
					<div className='flex flex-col text-center'>
						<ul className='text-white'>
							<li>
								<h3 className='font-bold text-2xl  pb-7'>Acerca de</h3>
							</li>
							<li className='pb-4'>
								<Link to='/nosotros' className='text-xl'>
									La empresa
								</Link>
							</li>
							<li className='pb-4'>
								<Link to='/anuncios' className='text-xl pb-4'>
									Anuncios
								</Link>
							</li>
							<li>
								<Link to='/politicas' className='text-xl'>
									Políticas
								</Link>
							</li>
						</ul>
					</div>

					<div className='container-contact text-white flex flex-col text-center items-center pt-16'>
						<h2 className='font-bold text-2xl pb-7 text-start'>
							Contacto
						</h2>
						<div className='flex flex-row pb-4 text-center justify-start'>
							<i className='fa-solid fa-phone pe-2 pt-2'></i>
							<p className='text-xl'>+54 5464677 578922</p>
						</div>
						<div className='flex flex-row text-center justify-start text-wrap'>
							<i className='fa-solid fa-envelope pe-2 pt-2'></i>
							<p className='text-xl'>artesanias@gmail.com</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Footer;
