import axios from 'axios'
import { ArrowLeft } from 'iconsax-reactjs'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const EditUser = () => {
    const [isName, setIsName] = useState("")
    const [isClass, setIsClass] = useState("")
    const [isMajor, setIsMajor] = useState("")
    const [isStatus, setIsStatus] = useState("")
    const navigate = useNavigate()
    const {id} = useParams()

    const updateUser = async(e) => {
        e.preventDefault()
        try {
            await axios.patch(`http://localhost:5000/users/${id}`, {
                name: isName,
                class: isClass,
                major: isMajor,
                status: isStatus
            });
            navigate("/")
        } catch (error) {
            console.error(error)
        }
    }

    const getUserById = async() => {
        const response = await axios.get(`http://localhost:5000/users/${id}`)
        setIsName(response.data.name)
        setIsClass(response.data.class)
        setIsMajor(response.data.major)
        setIsStatus(response.data.status)
    }

    useEffect(() => {
        getUserById()
    },[])

  return (
    <section className="relative flex flex-col justify-center items-center bg-Primary h-dvh">
        <form onSubmit={updateUser} className="bg-white rounded-lg p-[25px] max-sm:w-[97%] max-sm:p-[15px]">
            <div className="w-[45rem] max-sm:w-full">
                <h1 className="flex justify-center items-center mb-[50px] text-2xl font-bold max-sm:mb-[15px]">Update Student</h1>
                <div className="grid grid-cols-2 grid-rows-1 gap-x-8 gap-y-2 gap-5 max-sm:grid-cols-1">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="name" className="font-semibold">Name</label>
                        <input 
                        className="bg-Secondary p-2 rounded-md focus:outline-none focus:ring-Primary focus:ring-2 placeholder:text-sm placeholder:font-medium placeholder:text-[#00000063]" 
                        name="name" 
                        id="name"  
                        type="text" 
                        value={isName}
                        onChange={(e) => setIsName(e.target.value)}
                        placeholder="Type Your Username" 
                        required/>
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="class" className="font-semibold">Class</label>
                        <select 
                        className="h-10 border-none outline-none px-1 bg-Secondary text-sm font-medium text-[#00000063] rounded-md cursor-pointer focus:ring-Primary focus:ring-2"
                        name="class" 
                        id="class" 
                        value={isClass}
                        onChange={(e) => setIsClass(e.target.value)}
                        required>
                            <option value="">Select your class</option>
                            <option value="X">X</option>
                            <option value="XI">XI</option>
                            <option value="XII">XII</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="major" className="font-semibold">Major</label>
                        <select 
                        className="h-10 border-none outline-none px-1 bg-Secondary text-sm font-medium text-[#00000063] rounded-md cursor-pointer focus:ring-Primary focus:ring-2"
                        name="major" 
                        id="major" 
                        value={isMajor}
                        onChange={(e) => setIsMajor(e.target.value)}
                        required>
                            <option value="">Pilih Jurusan Anda</option>
                            <option value="PPLG">PPLG</option>
                            <option value="TJKT">TJKT</option>
                            <option value="DKV">DKV</option>
                            <option value="HR">DKV</option>
                            <option value="MPLB">MPLB</option>
                            <option value="TKRO">TKRO</option>
                            <option value="TBSM">TBSM</option>
                            <option value="TM">TM</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="status" className="font-semibold">Status</label>
                        <select 
                        className="h-10 border-none outline-none px-1 bg-Secondary text-sm font-medium text-[#00000063] rounded-md cursor-pointer focus:ring-Primary focus:ring-2"
                        name="status" 
                        id="status" 
                        value={isStatus}
                        onChange={(e) => setIsStatus(e.target.value)}
                        required>
                            <option value="">Select your status</option>
                            <option value="Hadir">Hadir</option>
                            <option value="Sakit">Sakit</option>
                            <option value="Izin">Izin</option>
                            <option value="Alfa">Alfa</option>
                        </select>
                    </div>
                </div>
                <button type="submit" className="w-full h-10 mt-5 rounded-md bg-Primary text-Secondary text-xl font-semibold">Update</button>
            </div>
        </form>
        <Link to={'/'} className='absolute top-5 left-5 bg-Secondary p-3 rounded-full hover:shadow-lg'><ArrowLeft/></Link>
    </section>
  )
}

export default EditUser