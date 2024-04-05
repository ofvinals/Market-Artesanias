import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
	return (
		<div className='flex justify-around bg-[#E98C00] p-4 min-h-96 items-center rounded-tl-3xl rounded-tr-3xl'>
			<div className='ms-10 text-white text-center h-full border border-solid border-white'>
				<p className='text-2xl p-2 pb-0'>Artesanias</p>
				<p className='text-4xl p-2 pt-0'>Market</p>
			</div>
			<div className='h-full w-full flex justify-around text-center '>
				<div className='flex justify-around items-center '>
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
				<div className='text-white'>
					<h2 className='font-bold text-2xl pb-7 text-start'>Contacto</h2>
					<div className='flex flex-row pb-4 text-center justify-start'>
						<i className='fa-solid fa-phone pe-2 pt-2'></i>
						<p className='text-xl'>+54 5464677 578922</p>
					</div>
					<div className='flex flex-row text-center justify-start'>
						<i class='fa-solid fa-envelope pe-2 pt-2'></i>
						<p className='text-xl'>artesaniasmarket@gmail.com</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
