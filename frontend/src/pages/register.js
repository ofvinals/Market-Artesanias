import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import NavBar from '../components/Navbar';

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => setShowPassword(!showPassword);

  const onSubmit = handleSubmit(async (values) => {
    try {
      Swal.fire({
        icon: 'success',
        title: 'Registro exitoso!',
        showConfirmButton: false,
        timer: 2000,
      });
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'Error al registrarse',
        text: 'Hubo un problema al procesar tu registro.',
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
            Registrate
          </h2><br></br>
          <form id='registerForm' className='formregister' onSubmit={onSubmit}>
            <div className="flex mb-7">
              <input
                placeholder='Nombre'
                className='ps-4 h-16 text-xl border-2 border-[#8B5300] mr-2 rounded-xl p-2 w-1/2'
                type='text'
                id='firstname'
                name='firstname'
                {...register('firstname', {
                  required: {
                    value: true,
                    message: 'El nombre es requerido',
                  },
                })}
              />
              {errors.firstname && (
                <span className='error-message'>{errors.firstname.message}</span>
              )}
              <input
                placeholder='Apellido'
                className='ps-4 h-16 text-xl border-2 border-[#8B5300] ml-2 rounded-xl p-2 w-1/2'
                type='text'
                id='lastname'
                name='lastname'
                {...register('lastname', {
                  required: {
                    value: true,
                    message: 'El apellido es requerido',
                  },
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
              id='email'
              name='email'
              {...register('email', {
                required: {
                  value: true,
                  message: 'El correo electrónico es requerido',
                },
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: 'Correo electrónico no válido',
                },
              })}
            />
            {errors.email && (
              <span className='error-message'>{errors.email.message}</span>
            )}

            <div
              className='w-full h-16 flex flex-row items-center border-2 border-[#8B5300] rounded-xl mb-9 p-2'
              controlId='inputpassword'>
              <input
                placeholder='Contraseña'
                className=' text-xl w-full'
                type={showPassword ? 'text' : 'password'}
                autoComplete='new-password'
                {...register('password', {
                  required: {
                    value: true,
                    message: 'La contraseña es requerida',
                  },
                  minLength: {
                    value: 8,
                    message: 'La contraseña debe tener al menos 8 caracteres',
                  },
                })}
              />
              <button
                type='button'
                onClick={toggleShowPassword}
                id='vercontrasena'
                className='btncontrasena'>
                <i className={`far ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
              </button>
              {errors.password && (
                <span className='error-message'>
                  {errors.password.message}
                </span>
              )}
            </div>
            <div className='mb-9'>
              <button
                className='bg-[#E98C00] w-full font-bold text-xl h-16 text-white rounded-xl'
                type='submit'>
                Crear Cuenta
              </button><br></br><br></br>
              <p className='text-xl text-[#8B5300] mb-9'>
                ¿Ya tienes una cuenta?
                <Link to='/login' className='underline ms-1'>
                  Inicia sesión
                </Link>
              </p>
            </div>
          </form>
        </div>
        <div className='imglogin'>
          <img src='/lupa.png' alt='register' className=''></img>
        </div>

      </section>
    </main>
  );
}

export default Register;
