
    const Navbar = () => {
    return (
        <header className='w-full bg-[#077A67] shadow'>
            <nav className='flex justify-between items-center px-6 md:px-20 py-2 text-white'>
                <a href='/' className='flex ites-center gap-1'>
                    <p className="text-[28px] font-serif font-bold">
                    Celebrare
                    </p>
                </a>
                <div  className="flex items-center justify-center gap-5">
                <a href="/" className="hover:scale-125 transition-transform duration-300">
                        <img
                        src="./search.svg"
                        alt="search"
                        width={34}
                        height={34}
                        className="object-contain"
                        />
                    </a>

                    <a href="/" className="hover:scale-125 transition-transform duration-300 ">
                        <img
                        src="./black-heart.svg"
                        alt="heart"
                        width={34}
                        height={34}
                        className="object-contain transition-colors duration-300 text-gray-500 hover:text-red-500"
                        />
                    </a>

                    <a href="/" className="hover:scale-125 transition-transform duration-300">
                        <img
                        src="./user.svg"
                        alt="user"
                        width={34}
                        height={34}
                        className="object-contain"
                        />
                    </a>
                </div>
                <div className=" items-center justify-center gap-5 hidden md:flex">
                    <div className='flex gap-2'>
                        <a href='https://github.com/Akshat-Kumar-X' target='_blank'>
                            <button 
                                type='button' 
                                className='rounded-full font-semibold border-[#1e1e1e] border-2 bg-[#323232] py-1.5 px-5 text-sm text-white transition-all hover:bg-white hover:text-black'
                            >
                                GitHub
                            </button>
                        </a>
                        <a href='https://www.linkedin.com/in/akshat-kumar-86203224a/' target='_blank'>
                            <button 
                                type='button' 
                                className='rounded-full font-semibold border-[#0A66C2] border-2 bg-[#0A66C2] py-1.5 px-5 text-sm text-white transition-all hover:bg-white hover:text-[#0A66C2]'
                            >
                                Linkedin
                            </button>
                        </a>
                    </div>
                </div>
                

            </nav>
        </header>
    )
    }

    export default Navbar