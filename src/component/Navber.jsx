

export default function Navber() {
  return (
    <div>
        <nav >
            <ul className="  flex justify-center text-base text-gray-700 pt-4 md:pt-0">
                <li><a className="md:p-4 py-3 px-0 block" href="#">Home</a></li>
                <li><a className="md:p-4 py-3 px-0 block" href="#">Fixture</a></li>
                <li><a className="md:p-4 py-3 px-0 block" href="#">card 1</a></li>
                <li><a className="md:p-4 py-3 px-0 block md:mb-0 mb-2" href="#">Schedules</a></li>
                <button className='btn border px-5 py-1 rounded-lg'>$550 Coin <i className="fa-solid fa-comment-dollar"></i></button>
            </ul>
        </nav>
    </div>
  )
}
