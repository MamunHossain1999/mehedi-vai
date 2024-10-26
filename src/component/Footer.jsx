
import banner from '..//assets/logo-footer.png'
export default function Footer() {
  return (
    <div>
       <footer className="w-full py-20 bg-black mt-5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div
                className="w-full flex  items-center justify-center lg:justify-between flex-col lg:flex-row pb-12 gap-7 lg:gap-0 border-b border-gray-200">
                <a href="https://pagedone.io/" className="w-full flex justify-center">
                    <img className='' src={banner} alt="" />
                </a>
                
            </div>
            <div className="flex justify-between flex-col py-8 min-[500px]:py-14 gap-8 min-[500px]:gap-16 lg:gap-0 lg:flex-row">
                <div
                    className="flex flex-col items-center max-lg:justify-center min-[500px]:items-start min-[500px]:flex-row gap-8 sm:gap-12 xl:gap-24">
                    <div className="block">
                        <h4
                            className="text-lg text-gray-300 font-medium mb-4 min-[500px]:mb-7 text-center min-[500px]:text-left">
                            About Us</h4>
                        <ul className="grid gap-4 min-[500px]:gap-6 text-center min-[500px]:text-left">
                            <li><a href="javascript:;" className="text-gray-600 hover:text-gray-900">We are a passionate team</a></li>
                            <li><a href="javascript:;" className="text-gray-600 hover:text-gray-900">dedicared to providing the best</a></li>
                            <li><a href="javascript:;" className="text-gray-600 hover:text-gray-900">services to uour customers.</a></li>
                            
                        </ul>
                    </div>
                    <div className="block">
                        <h4
                            className="text-lg text-gray-300 font-medium mb-4 min-[500px]:mb-7 text-center min-[500px]:text-left">
                            Quick Links</h4>
                        <ul className="grid gap-4 min-[500px]:gap-6 text-center min-[500px]:text-left">
                            <li><a href="javascript:;" className="text-gray-600 hover:text-gray-900">Home</a>
                            </li>
                            <li><a href="javascript:;" className="text-gray-600 hover:text-gray-900">Servies</a></li>
                            <li><a href="javascript:;" className="text-gray-600 hover:text-gray-900">About</a>
                            </li>
                            <li><a href="javascript:;" className="text-gray-600 hover:text-gray-900">Contack</a>
                            </li>
                        </ul>
                    </div>
                    
                </div>
                <div className="block lg:max-w-md">
                  <h3 className="text-2xl font-semibold text-white">Subcribe</h3>
                    <h3
                        className="font-manrope  text-xl text-gray-500 leading-9 mb-8 text-center lg:text-left">
                        Subscribe to our newsletter for the latest updates.</h3>
                    <div
                        className="lg:bg-gray-100 lg:rounded-full lg:h-16 lg:p-1.5 lg:flex-row gap-6 lg:gap-0 flex-col flex items-center justify-between">
                        <input type="text" name="email"
                            className="py-3 px-6 bg-gray-100 rounded-full text-gray-900 placeholder:text-gray-500 focus:outline-none flex-1 w-full max-w-xl mx-auto lg:w-auto lg:py-5 lg:px-7 lg:bg-transparent"
                            placeholder="Your email here..." />
                        <button type="submit"
                            className="py-3.5 px-7 bg-indigo-600 shadow-md rounded-full text-white font-semibold hover:bg-indigo-700">Subscribe</button>
                    </div>
                </div>
            </div>
            
            <div className="py-9 border-t border-gray-200">
                <div className="flex items-center justify-center flex-col gap-8 lg:gap-0 ">
                    <span className="text-sm text-gray-500 ">©<a href="https://pagedone.io/">pagedone</a> 2024, All rights reserved.</span>
                   
                </div>
            </div>
        </div>
    </footer>
    </div>
  )
}
