import '../App.css'
import { Star , Heart} from 'lucide-react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { cartActions } from '../store/cart';


const products = [
{
    id: 1,
    name: "iPhone 15 Pro Max Leather Case - Premium Quality",
    price: 2999,
    originalPrice: 3999,
    rating: 4.8,
    reviews: 124,
    image: "/placeholder.svg?height=300&width=300&text=iPhone Case",
    category: "Phone Cases",
    brand: "Apple",
    inStock: true,
    description: "Premium leather case with MagSafe compatibility",
},
{
    id: 2,
    name: "Samsung Galaxy S24 Ultra Screen Protector",
    price: 599,
    originalPrice: 899,
    rating: 4.6,
    reviews: 89,
    image: "/placeholder.svg?height=300&width=300&text=Screen Protector",
    category: "Screen Guards",
    brand: "Samsung",
    inStock: true,
    description: "Tempered glass with anti-fingerprint coating",
},
{
    id: 3,
    name: "OnePlus Warp Charge 65W Super Fast Charger",
    price: 2499,
    originalPrice: 2999,
    rating: 4.7,
    reviews: 156,
    image: "/placeholder.svg?height=300&width=300&text=Fast Charger",
    category: "Chargers",
    brand: "OnePlus",
    inStock: true,
    description: "65W fast charging with Type-C cable",
},
{
    id: 4,
    name: "Sony WH-1000XM5 Wireless Headphones",
    price: 24999,
    originalPrice: 29999,
    rating: 4.9,
    reviews: 267,
    image: "/placeholder.svg?height=300&width=300&text=Sony Headphones",
    category: "Headphones",
    brand: "Sony",
    inStock: true,
    description: "Industry-leading noise cancellation",
},
{
    id: 5,
    name: "Anker PowerCore 20000mAh Power Bank",
    price: 3999,
    originalPrice: 4999,
    rating: 4.5,
    reviews: 203,
    image: "/placeholder.svg?height=300&width=300&text=Power Bank",
    category: "Power Banks",
    brand: "Anker",
    inStock: true,
    description: "High-capacity portable charger with fast charging",
},
{
    id: 6,
    name: "JBL Flip 6 Portable Bluetooth Speaker",
    price: 8999,
    originalPrice: 11999,
    rating: 4.4,
    reviews: 91,
    image: "/placeholder.svg?height=300&width=300&text=JBL Speaker",
    category: "Speakers",
    brand: "JBL",
    inStock: true,
    description: "Waterproof portable speaker with powerful sound",
},
]
export default function SingleProduct(){
    const { id } = useParams();
    const product = products.find((item)=>item.id===Number(id));
    const dispatch = useDispatch();
    const addToCart = (product)=>{
        dispatch(cartActions.addToCart(product));
    }
    if (!product) {
        return <h2 className="pt-96 text-center text-2xl">Product not found.</h2>;
    }
    return(
        <section>
            <div className='group flex flex-col md:flex-row px-8 pt-36 md:p-0 pb-0 md:pt-52'>
                {/* left side */}
                <div className='md:h-1/3 md:w-1/3 py-8 pb-0 md:ml-28'>
                    <img className='object-cover rounded-lg hover:scale-105 transition-transform duration-500' src="/nothing.avif" alt="" />
                </div>
                
                {/* right side */}
                <div className='group py-4 md:p-6 md:ml-6 relative md:mt-3'>
                    {/* content */}
                    <div className='mb-3'>

                        {/* badge */}
                        <div className='mb-1 md:mb-6'>
                            <span className="text-xs md:text-sm font-medium text-purple-600 border border-purple-200 py-0.5 px-2 rounded-lg">{product.brand}</span>
                        </div>

                        <h2 className="cursor-pointer font-medium text-xl md:text-3xl text-gray-900 mb-1 md:mb-5 line-clamp-2 group-hover:text-purple-600 transition-colors">
                            {product.name}
                        </h2>

                        {/* reviews laptop */}
                        <div className='hidden md:flex items-center md:mb-6'>
                            <div className='flex items-center '>
                                <Star className='text-yellow-400 fill-current' size={28}/>
                                <Star className='text-yellow-400 fill-current' size={28}/>
                                <Star className='text-yellow-400 fill-current' size={28}/>
                                <Star className='text-yellow-400 fill-current' size={28}/>
                                <Star className='text-gray-400' size={28}/>
                            </div>
                            <span className='text-2xl text-gray-600 ml-2 font-medium'>{product.rating} ({product.reviews} reviews)</span>
                        </div>

                        {/* reviews mobile */}
                        <div className='flex md:hidden items-center mb-1.5 md:mb-6'>
                            <div className='flex items-center '>
                                <Star className='text-yellow-400 fill-current' size={16}/>
                                <Star className='text-yellow-400 fill-current' size={16}/>
                                <Star className='text-yellow-400 fill-current' size={16}/>
                                <Star className='text-yellow-400 fill-current' size={16}/>
                                <Star className='text-gray-400' size={16}/>
                            </div>
                            <span className='text-sm md:text-xl text-gray-600 ml-2 font-medium'>{product.rating} ({product.reviews} reviews)</span>
                        </div>
                        

                        <div className='flex items-center gap-2 mb-5 md:mb-6'>
                            <span className='text-2xl md:text-3xl font-semibold text-gray-900 group-hover:text-purple-600'>
                                ₹{product.price} {" "}
                            </span>
                            <span className='text-xl md:text-2xl text-gray-500 line-through group-hover:text-red-600'>
                                ₹{product.originalPrice}
                            </span>
                        </div>
                        {/* laptop */}
                        <div className='hidden absolute bottom-4 md:flex gap-3'>
                            <button onClick={()=>{addToCart(product)}} className='px-20 py-3 text-2xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 font-semibold text-white rounded-lg'>Add to Cart</button>
                            <button className='px-24 py-3 text-2xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 font-semibold text-white rounded-lg'>Buy Now</button>
                        </div>
                        {/* mobile */}
                        <div className='flex md:hidden gap-3'>
                            <button onClick={()=>{addToCart(product)}} className='px-20 py-2.5 text-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 font-medium text-white rounded-lg'>Add to Cart</button>
                            <button className='px-20 py-2.5 text-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 font-medium text-white rounded-lg'>Buy Now</button>
                        </div>
                    </div>
                </div>
                 
            </div>
        </section>
    )
}