import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const Detail = () => {
	const { email } = useSelector((state) => state.auth);
	const [photoUrl, setPhotoUrl] = useState(null);

	const uploadPhoto = () => {
		document.getElementById('fileInput').click();
	};

	const handleFileChange = (event) => {
		const file = event.target.files[0];
		const reader = new FileReader();

		reader.onloadend = () => {
			setPhotoUrl(reader.result);
		};

		if (file) {
			reader.readAsDataURL(file);
		}
	};

	return (
		<div>
			<div>
				<div className='bg-portada min-h-[250px] bg-cover flex flex-row '>
					<div className='flex flex-col-reverse sm:flex-row justify-around w-full ps-10 items-center'>
						<div className='flex flex-row text-[#563300] '>
							<h1 className='text-[20px] sm:text-[40px] text-wrap'>{email}</h1>
							<Link to='/profile'>
								<i className='fa-solid fa-pencil ps-5 pt-4 text-2xl hover:text-4xl   '></i>
							</Link>
						</div>
						{photoUrl ? (
							<img
								src={photoUrl}
								alt='Uploaded'
								className='w-[192px] h-48 rounded-full mt-5'
							/>
						) : (
							<button
								onClick={uploadPhoto}
								className='me-10 text-xl w-[192px] bg-white border-2 h-16 rounded-lg border-[#E98C00] text-[#E98C00] hover:bg-[#E98C00] hover:text-white'>
								<i className='fa-solid fa-circle-plus pe-5'></i>Subir
								Foto
							</button>
						)}
						<input
							id='fileInput'
							type='file'
							style={{ display: 'none' }}
							onChange={handleFileChange}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
