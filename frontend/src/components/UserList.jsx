import {useState, useEffect} from "react"
import axios from "axios"
import {AddSquare, CloseCircle, Edit, Trash} from "iconsax-reactjs"
import { Link } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion";

const UserList = () => {
    const [isUsers, setIsUsers] = useState([])
    const [showModal, setShowModal] = useState(false);
    const [deleteId, setDeleteId] = useState(null);
    
    useEffect(() => {
        getUsers()
    }, [])
    

    const getUsers = async () => {
        const response = await axios.get('http://localhost:5000/users')
        setIsUsers(response.data)
    }

    const handleDelete = (id) => {
        setDeleteId(id);
        setShowModal(true);
      };

    const confirmDelete = async () => {
        try {
            await axios.delete(`http://localhost:5000/users/${deleteId}`)
            getUsers()
            setShowModal(false)
        } catch (error) {
            console.error(error)
        }
    }
  return (
    <div className='flex flex-col w-full h-screen px-10 pb-10'>
        <div className="flex justify-between items-center mt-10">
            <h1 className="text-2xl font-semibold">Student Absention</h1>
            <Link to={`/add`} className="flex gap-3 justify-center items-center w-52 bg-Primary p-3 rounded-lg">
                <AddSquare color="#f0f4f9" variant="Bold"/>
                <h1 className="text-lg text-Secondary font-medium">Add Student</h1>
            </Link>
        </div>
        <div className='w-full h-full mt-5 bg-slate-100 rounded-xl overflow-hidden'>
            <table className='w-full p-5 pl-10 table-auto overflow-y-scroll'>
                <thead className='bg-Primary text-Secondary'>
                    <tr>
                        <th className='px-6 py-4 text-sm font-semibold tracking-wide text-left'>No.</th>
                        <th className='px-6 py-4 text-sm font-semibold tracking-wide text-left'>Name</th>
                        <th className='px-6 py-4 text-sm font-semibold tracking-wide text-left'>Class</th>
                        <th className='px-6 py-4 text-sm font-semibold tracking-wide text-left'>Major</th>
                        <th className='px-6 py-4 text-sm font-semibold tracking-wide text-left'>Status</th>
                        <th className='px-6 py-4 text-sm font-semibold tracking-wide text-left'>Action</th>
                    </tr>
                </thead>
                <tbody className='bg-white'>
                    {isUsers.map((user, idx) => (
                    <tr key={user.id} className='odd:bg-Secondary'>
                        <td className='px-6 py-4 text-sm font-medium text-gray-700'>{idx + 1}</td>
                        <td className='px-6 py-4 text-sm font-medium text-gray-700'>{user.name}</td>
                        <td className='px-6 py-4 text-sm font-medium text-gray-700'>{user.class}</td>
                        <td className='px-6 py-4 text-sm font-medium text-gray-700'>{user.major}</td>
                        <td className='px-6 py-4 text-sm font-medium text-gray-700'>{user.status}</td>
                        <td className='px-6 py-4 text-sm font-medium flex gap-3 text-gray-700'>
                            <Link to={`/edit/${user.id}`} className="bg-[#fcf1ae] p-1.5 rounded-lg hover:shadow-lg transition"><Edit color="#374151"/></Link>
                            <button onClick={() => handleDelete(user.id)} className="bg-[#ffdbdb] p-1.5 rounded-lg hover:shadow-lg transition"><Trash color="#374151"/></button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>

        <AnimatePresence>
        {showModal && (
            <motion.div
                className="fixed inset-0 z-50 flex justify-center items-end sm:items-center backdrop-blur-sm bg-black/30"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}>
                <motion.div
                    className="bg-white w-full sm:w-[90%] md:w-[450px] rounded-t-2xl sm:rounded-xl shadow-lg p-6 relative"
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100%" }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}>
                    <button onClick={() => setShowModal(false)} className="absolute top-3 right-3 text-gray-500 hover:text-gray-700">
                        <CloseCircle size={20} variant="Bold" />
                    </button>
                    <h2 className="text-lg sm:text-xl font-semibold text-center mb-2">Konfirmasi Hapus</h2>
                    <p className="text-sm text-center text-gray-600 mb-5">Apakah kamu yakin ingin menghapus data ini?</p>
                    <div className="flex justify-center gap-4">
                        <button onClick={() => setShowModal(false)} className="px-5 py-2 bg-Secondary text-gray-800 font-medium rounded-md hover:bg-gray-400 transition">Batal</button>
                        <button onClick={confirmDelete} className="px-5 py-2 bg-red-500 text-Secondary font-medium rounded-md hover:bg-red-600 transition">Hapus</button>
                    </div>
                </motion.div>
            </motion.div>
        )}
        </AnimatePresence>
    </div>
  )
}

export default UserList