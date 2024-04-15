import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import axios from 'axios';
import NavBar from '../components/NavBar.jsx';

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    try {
      console.log('Datos del formulario:', data);
      const response = await axios.post('http://localhost:3001/Registro', data);
      console.log('Respuesta del servidor:', response);
      if (response.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Registro exitoso!',
          showConfirmButton: false,
          timer: 2000,
        });
      }
    } catch (error) {
      console.error('Error de red:', error);
      console.error('Respuesta de error:', error.response?.data);
      Swal.fire({
        icon: 'error',
        title: 'Error al registrarse',
        text: error.response?.data?.message || 'Hubo un problema al procesar tu registro.',
        showConfirmButton: false,
        timer: 1500,
      });
    }
  });

  return (
    <main>
      <NavBar />
      <section className='container'>
        <div className='container-register'>
          <h2 className='text-5xl font-semibold text-[#8B5300] mb-3'>
            Regístrate
          </h2>
          <form id='registerForm' className='formregister' onSubmit={onSubmit}>
            <div className="flex mb-7">
              <input
                placeholder='Nombre'
                className='ps-4 h-16 text-xl border-2 border-[#8B5300] mr-2 rounded-xl p-2 w-1/2'
                type='text'
                {...register('firstname', {
                  required: 'El nombre es requerido',
                })}
              />
              {errors.firstname && (
                <span className='error-message'>{errors.firstname.message}</span>
              )}
              <input
                placeholder='Apellido'
                className='ps-4 h-16 text-xl border-2 border-[#8B5300] ml-2 rounded-xl p-2 w-1/2'
                type='text'
                {...register('lastname', {
                  required: 'El apellido es requerido',
                })}
              />
              {errors.lastname && (
                <span className='error-message'>{errors.lastname.message}</span>
              )}
            </div>
            <input
              placeholder='Email'
              className='ps-4 h-16 text-xl border-2 border-[#8B5300] mb-7 rounded-xl p-2 w-full'
              type='email'
              {...register('email', {
                required: 'El correo electrónico es requerido',
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: 'Correo electrónico no válido',
                },
              })}
            />
            {errors.email && (
              <span className='error-message'>{errors.email.message}</span>
            )}

            <input
              placeholder='Contraseña'
              className='ps-4 h-16 text-xl border-2 border-[#8B5300] mb-7 rounded-xl p-2 w-full'
              type='password'
              {...register('password', {
                required: 'La contraseña es requerida',
                minLength: {
                  value: 8,
                  message: 'La contraseña debe tener al menos 8 caracteres',
                },
              })}
            />
            {errors.password && (
              <span className='error-message'>{errors.password.message}</span>
            )}

            <button
              className='bg-[#E98C00] w-full font-bold text-xl h-16 text-white rounded-xl'
              type='submit'>
              Crear Cuenta
            </button>
          </form>

          <p className='text-xl text-[#8B5300] mt-4'>
            ¿Ya tienes una cuenta?
            <Link to='/login' className='underline ms-1'>
              Inicia sesión
            </Link>
          </p>
        </div>
        <div className='imglogin'>
          <img src='/lupa.png' alt='register' className='' />
        </div>
      </section>
    </main>
  );
}

export default Register;


