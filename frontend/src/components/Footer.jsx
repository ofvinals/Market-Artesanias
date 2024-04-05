import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
	return (
		<div className='flex justify-center flex-grow bg-orange-400 p-4 min-h-80 items-center'>
			<div className='text-white text-xl font-semibold h-full'>
				<Link className='' to='/home'>
					<img
						className='logofooter'
						src='logo192.png'
						width={100}
						alt='Logo'
					/>
				</Link>
			</div>
			<div className='h-full w-full flex justify-around text-center'>
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
				<div className='text-white text-center'>
					<h2 className='font-bold text-2xl pb-7'>Contacto</h2>
					<div className='pb-4'>
						<i className='fa-solid fa-phone'></i>
						<p className='text-xl'>+54 5464677 578922</p>
					</div>
					<div>
						<i class='fa-solid fa-envelope'></i>
						<p className='text-xl'>artesaniasmarket@gmail.com</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
