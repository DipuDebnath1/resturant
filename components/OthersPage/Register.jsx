"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { signIn } from "next-auth/react"
import axios from 'axios'

export default function Register() {
    const handleRegister = (e) => {
        e.preventDefault()
        const from = e.target
        const name = from.name.value
        const email = from.email.value
        const number = from.phone.value
        const password = from.password.value

        const user = { name, email, password, number }

        axios.post('http://localhost:3000/users', user)
            .then(res => {
                console.log("response",res);
            })
            .catch(err => {
                console.log("errror:",err);
            })

    }


    return (
        <div>
            <div className="max-w-7xl mx-auto lg:px-0 sm:px-10 px-4 my-20" >

                <div className=" bg-gray-100 rounded grid md:grid-cols-2 w-full p-10">
                    <div >
                        <Image width={500} height={300} className="h-full hidden md:block w-12/12 object-cover rounded-l mx-auto" src="https://i.ibb.co/dB5DTJM/6333050-removebg-preview.png" alt="food" />
                    </div>
                    <div>
                        <h2 className="text-3xl py-5 font-semibold">SIGN UP NOW</h2>
                        <form onSubmit={handleRegister} className="text-xl space-y-4" action="#">

                            <label htmlFor="name" className="flex gap-2 flex-col">
                                <span className="text-start">Name</span>
                                <input id="name" className="p-3  shadow-md rounded outline-none text-sm" type="name" placeholder="name here..." name="name" required />
                            </label>

                            <label htmlFor="email" className="flex gap-2 flex-col">
                                <span className="text-start">Email</span>
                                <input id="email" className="p-3 shadow-md  rounded outline-none text-sm" type="email" placeholder="email here..." name="email" required />
                            </label>

                            <label htmlFor="phone" className="flex gap-2 flex-col">
                                <span className="text-start">Contact Number</span>
                                <input id="phone" className="p-3 shadow-md  rounded outline-none text-sm" type="number" placeholder="contact number here..." name="phone" required />
                            </label>



                            <label htmlFor="password" className="flex gap-2 flex-col">
                                <span className="text-start">Password</span>
                                <input id="password" className=" shadow-md p-3 rounded outline-none text-sm" type="password" placeholder="password here..." name="password" required />
                            </label>
                            <div >
                                <input className="text-white py-2 block rounded bg-[#EE4036] w-full" type="submit" value="Sign Up" />
                                <p className="text-lg mt-4">have a account ? <Link className="font-semibold text-blue-600" href={'/login'}>Please Sign In</Link> </p>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
