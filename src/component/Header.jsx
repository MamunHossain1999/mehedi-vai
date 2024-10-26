
import logo from '../assets/logo.png'
export default function Header({coin}) {
  return (
    <div className='w-10/12  mx-auto fixed backdrop-opacity-5 '>
        {/* header and naveber design */}
        <header className="w-[340px]  md:w-full  lg:px-16 px-4  bg-white flex flex-wrap items-center py-4 shadow-md">
          <div className="flex-1 flex justify-between items-center">
              <a href=""><img src={logo} alt="" /></a>
          </div>

          <label for="menu-toggle" className="pointer-cursor md:hidden block">
            <svg className="fill-current text-gray-900"
              xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
              <title>menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </label>
        <input className="hidden" type="checkbox" id="menu-toggle" />

        <div className="hidden md:flex md:items-center md:w-auto w-full" id="menu">
            <nav>
                <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
                    <li><a className="md:p-4 py-3 px-0 block" href="#">Home</a></li>
                    <li><a className="md:p-4 py-3 px-0 block" href="#">Fixture</a></li>
                    <li><a className="md:p-4 py-3 px-0 block" href="#">Teams</a></li>
                    <li><a className="md:p-4 py-3 px-0 block md:mb-0 mb-2" href="#">Schedules</a></li>
                    <button className='btn border px-5 py-1 rounded-lg'>{coin} Coin <i className="fa-solid fa-comment-dollar"></i></button>
                </ul>
            </nav>
    </div>
    </header>
    </div>
  )
}
