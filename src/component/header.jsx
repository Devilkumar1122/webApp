import '../App.css'
import { Search, ShoppingCart, Menu, Phone, Mail, User, Heart, Icon, X } from 'lucide-react';
import { Link } from "react-router-dom"
import { useState } from 'react';

export default function Header(){
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navigation = [
        { name: "Home", href: "/" },
        { name: "Products", href: "/products" },
        { name: "Categories", href: "/categories" },
        { name: "Brands", href: "/brands" },
        { name: "Services", href: "/services" },
        { name: "Contact", href: "/contact" },
    ];

    return <header className=' p-4 z-50 shadow-lg border-b'>

        {/* header */}
        <div className='flex justify-between items-center gap-4'>
            {/* logo */}
            <div className='flex mr-10'>
                <div className='flex items-center justify-center self-center p-3 purple-gradient mr-3 rounded-xl shadow-lg'>
                    <span className=' font-bold text-xl text-white'>RK</span>
                </div>
                <div>
                    <h1 className='font-bold text-xl md:text-2xl purple-gradient bg-clip-text text-transparent'>RK Mobile Centre</h1>
                    <p className='text-sm font-medium text-gray-600'>Premium Mobile Solutions</p>
                </div>
            </div>
            {/* search box */}
            <div className='hidden md:flex relative flex-1 max-w-2xl '>
                <div className='w-full group '>
                    <Search className='cursor-pointer text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 group-hover:text-purple-500 group-focus-within:text-purple-500' />
                    <input type="text"placeholder="Search for mobile accessories, cases, chargers..." className='pl-12 pr-4 py-3 w-full text-lg rounded-xl border-2 outline-none hover:placeholder:text-purple-500 hover:border-purple-500 focus:text-purple-500 focus:border-purple-500 '/>
                    <button className='absolute right-1 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-purple-600 to-blue-600 group-hover:from-purple-700 group-hover:to-blue-700 py-2.5 px-3.5 rounded-xl'>
                        <span className=' text-white text-xl'>Search</span>
                    </button>
                </div>
                
            </div>
            {/* action button */}
            <div className='flex items-center space-x-3'>
                <button>
                    <Heart className='hidden md:flex text-gray-600 h-10 w-10 p-2.5 hover:bg-purple-50 rounded-md hover:text-purple-500' strokeWidth={1.5}/>
                </button>
                <button>
                    <User className='hidden md:flex text-gray-600 h-10 w-10 p-2.5 hover:bg-purple-50 rounded-md hover:text-purple-500' strokeWidth={1.5}/>
                </button>
                <button>
                    <ShoppingCart className='text-gray-600 h-10 w-10 p-2.5 hover:bg-purple-50 rounded-md hover:text-purple-500' strokeWidth={1.5}/>
                </button>

                {/* mobile menu */}
                <button className='md:hidden flex' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <Menu className=' text-gray-600 h-10 w-10 p-2.5 hover:bg-gray-100 rounded-md hover:text-purple-500' strokeWidth={1.5}/>
                </button>

                {/* conditionally render the mobile menu */}
                {isMenuOpen && (
                <>
                <div
                    className="fixed inset-0 -left-4 bg-black opacity-80 z-40 md:hidden"
                    onClick={() => setIsMenuOpen(false)}
                ></div>
                <div className="fixed h-full top-0 -right-2 bg-white shadow-3xl rounded-xl p-6 w-[300px] z-50 md:hidden transition-all duration-300">
                    <div className="flex justify-end ">
                            <button onClick={() => setIsMenuOpen(false)} className="text-gray-600  hover:text-purple-500  text-xl font-semibold">
                                <X className=' border-2 rounded-md border-white hover:border-black' size={25} strokeWidth={1.5} />
                            </button>
                        </div>
                    <div className="flex flex-col space-y-6">
                    {navigation.map((item) => (
                        <Link
                        key={item.name}
                        to={item.href}
                        className="pointer-events-none text-lg font-medium text-gray-700 hover:text-purple-600 transition-all duration-150"
                        >
                           <span className='pointer-events-auto'>
                             {item.name}
                           </span>
                        </Link>
                    ))}
                    </div>
                </div>
                </>
                )}
            </div>
            
        </div>

        {/* nabvigation links */}
        <div className='hidden md:flex mt-6 space-x-8 border-t pt-4'>
            
            {navigation.map((item)=>{
                return(
                <Link key={item.name} to={item.href} className="relative group text-gray-700  hover:text-purple-600 font-medium text-lg"> 
                    {item.name}
                    <span className='absolute h-0.5 w-0 left-0 -bottom-1 bg-gradient-to-r from-purple-500 to to-blue-600 group-hover:w-full transition-all duration-300'></span>
                </Link>
            )
            })}            
        </div>

        {/*mobile search box */}
            <div className='md:hidden max-w-2xl mt-4 '>
                <div className='w-full group '>
                    <Search className='cursor-pointer text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 group-hover:text-purple-500 group-focus-within:text-purple-500' />
                    <input type="text"placeholder="Search for mobile accessories, cases, chargers..." className='pl-12 pr-4 py-2 w-full text-lg rounded-xl border-2 outline-none hover:placeholder:text-purple-500 hover:border-purple-500 focus:text-purple-500 focus:border-purple-500 '/>
                    <button className='absolute right-1 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-purple-600 to-blue-600 group-hover:from-purple-700 group-hover:to-blue-700 py-2.5 px-3.5 rounded-xl'>
                        <span className=' text-white text-xl'>Search</span>
                    </button>
                </div>
                
            </div>
    </header>
}
