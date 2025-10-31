import '../App.css'
import { ChevronDown, Star } from 'lucide-react';
import { useState } from 'react';


export default function FilterProduct(){
    const [isVisibleCategory, setIsVisibleCategory] = useState(false);
    const [isVisibleBrand, setIsVisibleBrand] = useState(false);
    const [isVisiblePriceRange, setIsVisiblePriceRange] = useState(false);
    const [isVisibleRating, setIsVisibleRating] = useState(false);
    const [price, setPrice] = useState(0);
    const max = 10000;
    return(
        <section className='mx-2 md:ml-16 md:mr-9 '>
            <div className='w-full md:w-64 md:space-y-6'>
                {/* upper div */}
                <div className='-mt-3 md:-mt-0 md:pb-0 md:pt-5 pb-2 flex items-center justify-between'>
                    <h2 className='text-2xl font-semibold'>Filters</h2>
                    <button className='px-3 py-1 text-sm font-medium border rounded-md hover:bg-gray-200'>
                        Clear All
                    </button>
                </div>
                {/* lower div */}
                <div className=''>
                    <div>
                        <div className='group py-2 md:py-3'>
                            <button type='button' className='w-full flex items-center justify-between' onClick={()=>setIsVisibleCategory(!isVisibleCategory)}>
                                <div className='space-y-3 flex justify-between font-medium text-lg group-hover:underline'>Categories</div>
                                <div className= {`transition-transform duration-300 ${isVisibleCategory ? 'rotate-180' : ''}`}> <ChevronDown /> </div>
                            </button>
                        </div>
                        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                        isVisibleCategory ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                                    }`}>
                            {isVisibleCategory && (
                            <div className='bg-gray-50 transition-transform duration-300'>
                                <div>
                                    <input type="checkbox" id="phoneCases" name="phoneCases" value="phoneCases"/>
                                    <label className="ml-2 cursor-pointer" htmlFor="phoneCases">phoneCases</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="Headphones" name="Headphones" value="Headphones"/>
                                    <label className="ml-2 cursor-pointer" htmlFor="Headphones">Headphones</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="Speakers" name="Speakers" value="Speakers"/>
                                    <label className="ml-2 cursor-pointer" htmlFor="Speakers">Speakers</label>
                                </div>
                            </div>
                        )}
                        </div>
                        <hr />
                    </div>
                    <div>
                        <div className='group py-3'>
                            <button type='button' className='w-full flex items-center justify-between' onClick={()=>setIsVisibleBrand(!isVisibleBrand)}>
                                <div className='space-y-3 flex justify-between font-medium text-lg group-hover:underline'>Brand</div>
                                <div className= {`transition-transform duration-300 ${isVisibleBrand ? 'rotate-180' : ''}`}> <ChevronDown /> </div>
                            </button>
                        </div>
                        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                        isVisibleBrand ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                                }`}>
                                    {isVisibleBrand && (
                                <div className='bg-gray-50 transition-transform duration-300'>
                                    <div>
                                        <input type="checkbox" id="Apple" name="Apple" value="Apple"/>
                                        <label className="ml-2 cursor-pointer" htmlFor="Apple">Apple</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" id="Samsung" name="Samsung" value="Samsung"/>
                                        <label className="ml-2 cursor-pointer" htmlFor="Samsung">Samsung</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" id="Oneplus" name="Oneplus" value="Oneplus"/>
                                        <label className="ml-2 cursor-pointer" htmlFor="Oneplus">Oneplus</label>
                                    </div>
                                </div>
                        )}
                        </div>
                        <hr />
                    </div>
                    <div>
                        <div className='group py-3'>
                            <button type='button' className='w-full flex items-center justify-between' onClick={()=>setIsVisiblePriceRange(!isVisiblePriceRange)}>
                                <div className='space-y-3 flex justify-between font-medium text-lg group-hover:underline'>Price Range</div>
                                <div className= {`transition-transform duration-300 ${isVisiblePriceRange ? 'rotate-180' : ''}`}> <ChevronDown /> </div>
                            </button>
                        </div>
                        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                        isVisiblePriceRange ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                            }`}>
                            {isVisiblePriceRange && (
                                <div className='bg-gray-50 transition-transform duration-300'>
                                    <div>
                                        <input type="range" id="priceRange" name="priceRange" step="100" value={price} 
                                        style={{
                                        background: `linear-gradient(to right, black 0%, black ${
                                            (price / max) * 100
                                        }%, white ${(price / max) * 100}%, white 100%)`,
                                        }}
                                        className="w-full h-3 rounded-lg appearance-none focus:outline-none"
                                        onChange={(e) => setPrice(e.target.value)} min="0" max="10000"/><br />
                                        <label className="ml-2 cursor-pointer flex items-center justify-between" htmlFor="priceRange"><span>{price}</span><span>10000</span></label>
                                    </div>
                                </div>
                            )}
                        </div>
                        <hr />
                    </div>
                    <div>
                        <div className=' group py-3'>
                            <button type='button' className='w-full flex items-center justify-between' onClick={()=>setIsVisibleRating(!isVisibleRating)}>
                                <div className='space-y-3 flex justify-between font-medium text-lg group-hover:underline'>Customer Rating</div>
                                <div className= {`transition-transform duration-300 ${isVisibleRating ? 'rotate-180' : ''}`}> <ChevronDown /> </div>
                            </button>
                        </div>
                        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                        isVisibleRating ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                            }`}>
                            {isVisibleRating && (
                                <div className='bg-gray-50 transition-transform duration-300'>
                                    <div className='flex'>
                                        <input type="checkbox" id="4" name="4" value="4"/>
                                        <label className="ml-2 flex items-center justify-start cursor-pointer" htmlFor="4">
                                            <Star className={"h-4 w-4 text-yellow-400 fill-current"}/>
                                            <Star className={"h-4 w-4 text-yellow-400 fill-current"}/>
                                            <Star className={"h-4 w-4 text-yellow-400 fill-current"}/>
                                            <Star className={"h-4 w-4 text-yellow-400 fill-current"}/>
                                            <Star className={"h-4 w-4 text-gray-400 "}/>
                                        </label>
                                    </div>
                                </div>
                            )}
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
        </section>
    )
}
