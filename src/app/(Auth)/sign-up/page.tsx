'use client';

import React from 'react';
import Image from 'next/image';
import { FaPhoneAlt, FaRegUserCircle } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { FaHelmetUn } from 'react-icons/fa6';
import { BiWorld } from 'react-icons/bi';

const SignUpPage: React.FC = () => {
	return (
		<div className='flex min-h-screen bg-white dark:bg-gray-800 w-full'>
			{/* Left section with photo */}
			<div className='hidden md:flex w-1/2  flex-col gap-10 items-center justify-center'>
				<div className='flex justify-center items-center h-[300px] w-[300px] rounded-full  bg-gradient-to-t from-yellow-800 to-yellow-400 p-[1px]'>
					<div className='flex justify-center items-center h-full w-full rounded-full bg-white dark:bg-darkprimary'>
						<Image
							src='/image/poultry.png'
							alt='Poultry Farm'
							width={200}
							height={200}
							className='object-cover'
						/>
					</div>
				</div>
				<div className='flex flex-col gap-4'>
					<h1 className='text-3xl font-bold text-center text-yellow-500   nosifer-regular'>
						THE POULTRY
					</h1>
					<p className='text-center text-2xl text-gray-800 dark:text-gray-400 nosifer-regular'>
						WELCOM
					</p>
				</div>
			</div>
			{/* Right section with form */}
			<div className='flex w-full md:w-1/2 items-center justify-center bg-white dark:bg-gray-800 text-gray-800 dark:text-white p-8'>
				<div className='w-full max-w-md space-y-8'>
					<h2 className='text-4xl font-bold text-center'>
						Sign Up to Your Account
					</h2>

					<form className='space-y-6'>
						<div className='w-full px-4 py-2 rounded-2xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition flex justify-start items-center gap-3'>
							<FaRegUserCircle className='text-lg text-gray-600 ' />
							<input
								id='username'
								type='text'
								required
								placeholder='User Name'
								className='outline-none w-full bg-white'
							/>
						</div>
						<div className='w-full px-4 py-2 rounded-2xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition flex justify-start items-center gap-3'>
							<FaPhoneAlt className='text-lg text-gray-600 ' />
							<input
								id='phone'
								type='tel'
								required
								placeholder=' 01012345678'
								className='bg-white outline-none w-full'
							/>
						</div>
						<div className='w-full px-4 py-2 rounded-2xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition flex justify-start items-center gap-3'>
							<MdEmail className='text-xl text-gray-600 ' />
							<input
								id='email'
								type='email'
								required
								placeholder={` example@gmail.com`}
								className='bg-white outline-none w-full'
							/>
						</div>
						<div className='w-full px-4 py-2 rounded-2xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition flex justify-start items-center gap-3'>
							<RiLockPasswordFill className='text-xl text-gray-600 ' />
							<input
								id='password'
								type='password'
								required
								placeholder='  ********'
								className='bg-white outline-none w-full'
							/>
						</div>
						<div className='w-full px-4 py-2 rounded-2xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition flex justify-start items-center gap-3'>
							<FaHelmetUn className='text-lg text-gray-600 ' />
							<input
								id='job'
								type='text'
								required
								placeholder=' Job Title'
								className='bg-white outline-none w-full'
							/>
						</div>
						<div className='w-full px-4 py-2 rounded-2xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition flex justify-start items-center gap-3'>
							<BiWorld className='text-xl text-gray-600 ' />
							<input
								id='country'
								type='text'
								required
								placeholder='Country'
								className='bg-white outline-none w-full'
							/>
						</div>
						{/* Submit */}
						<button
							type='submit'
							className='w-full py-2 bg-yellow-400 hover:bg-yellow-600 text-black font-semibold rounded-lg shadow-md transition duration-300 text-lg'>
							Sign Up
						</button>
					</form>

					{/* Optional: Sign up link */}
					<p className='text-center text-sm text-gray-500 dark:text-gray-400'>
						Don't have an account?{' '}
						<a
							href='/sign-in'
							className='text-yellow-600 hover:underline font-medium'>
							Sign In
						</a>
					</p>
				</div>
			</div>
		</div>
	);
};

export default SignUpPage;
