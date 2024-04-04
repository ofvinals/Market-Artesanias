import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
	return (
		<footer className='flex justify-center flex-grow bg-gray-800 p-4'>
			<hr className='' />
         <div className='text-white text-xl font-semibold'>
					<Link className='' to='/home'>
						<img
							className='logofooter'
							src='logo192.png'
							width={100}
							alt='Logo'
						/>
					</Link>
				</div>
			<div className='w-full flex justify-between items-center'>
				<div className=' '>
					<ul className=''>
						<li className=''>
							<h3>Acerca de</h3>
						</li>
						<li className=''>
							<Link to='/nosotros' className=''>
								La empresa
							</Link>
						</li>
						<li className=''>
							<Link to='/anuncios' className=''>
								Anuncios
							</Link>
						</li>
						<li className=''>
							<Link to='/politicas' className=''>
								Políticas
							</Link>
						</li>
					</ul>
				</div>
				<div className=''>
					<h2 className=''>Contacto</h2>
					<Link
						className=''
						to='https://www.facebook.com/'
						target='_blank'>
						<i className='fab fa-facebook'>Facebook</i>
					</Link>
					<Link
						className=''
						to='https://www.instagram.com/'
						target='_blank'>
						<i className='fab fa-instagram'>Instagram</i>
					</Link>
					<Link className='' to='http://www.twitter.com' target='_blank'>
						<i className='fab fa-twitter'>X</i>
					</Link>
				</div>


			</div>
		</footer>
	);
}

export default Footer;
