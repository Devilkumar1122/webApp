import '../App.css'
import { Search, ShoppingCart, Menu, Phone, Mail, User, Heart, Icon, } from 'lucide-react';
import { Link } from "react-router-dom"

export default function Header(){

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
                    <span className=' font-bold text-xl text-white'>KK</span>
                </div>
                <div>
                    <h1 className='font-bold text-2xl purple-gradient bg-clip-text text-transparent'>KK Mobile Centre</h1>
                    <p className='text-sm font-medium text-gray-600'>Premium Mobile Solutions</p>
                </div>
            </div>
            {/* search box */}
            <div className='flex relative flex-1 max-w-2xl '>
                <div className='w-full group '>
                    <Search className='cursor-pointer text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 group-hover:text-purple-500 group-focus-within:text-purple-500' />
                    <input type="text"placeholder="Search for mobile accessories, cases, chargers..." className='pl-12 pr-4 py-3 w-full text-lg rounded-xl border-2 outline-none hover:placeholder:text-purple-500 hover:border-purple-500 focus:text-purple-500 focus:border-purple-500 focus:text-purple-500'/>
                    <button className='absolute right-1 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 py-2.5 px-3.5 rounded-xl'>
                        <span className=' text-white text-xl'>Search</span>
                    </button>
                </div>
                
            </div>
            {/* action button */}
            <div className='flex items-center space-x-3'>
                <IconButton IconName={Heart}/>
                <IconButton IconName={User}/>
                <IconButton IconName={ShoppingCart}/>
            </div>
            
        </div>

        {/* namvigation links */}
        <div className=' flex mt-6 space-x-8 border-t pt-4'>
            
            {navigation.map((item)=>{
                return(
                <Link key={item.name} to={item.href} className="relative group text-gray-700  hover:text-purple-600 font-medium text-lg"> 
                    {item.name}
                    <span className='absolute h-0.5 w-0 left-0 -bottom-1 bg-gradient-to-r from-purple-500 to to-blue-600 group-hover:w-full transition-all duration-300'></span>
                </Link>
            )
            })}
            
        </div>
    </header>
}

function IconButton({ IconName }){
    return (
        <button>
            <IconName className='text-gray-600 h-10 w-10 p-2.5 hover:bg-purple-50 rounded-md hover:text-purple-500' strokeWidth={1.5}/>
        </button>
    )
}