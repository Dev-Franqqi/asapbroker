export default function Footer(){
    return(
        <footer className="bg-[#1c075b] py-10 px-3">
        <h5 className="text-white font-bold text-2xl mb-4">
          ELITE TRADING HUB
        </h5>
        <p className="text-gray-400 mb-10">
        We want you to not just Trade in the world&apos;s financial markets, but also with a simple and user friendly online platform.
        </p>


        <div className="mb-10">
          <h6 className="font-semibold mb-2 text-gray-200 text-xl">Useful Links</h6>
          <ul className=" leading-8 text-gray-300">
            <li>About</li>
            <li>Features</li>
            <li>Process</li>
          </ul>
        </div>
        <div className="mb-10">
          <h6 className="font-semibold mb-2 text-gray-200 text-xl">Markets</h6>
          <ul className="leading-8 text-gray-300">
            <li>Forex</li>
            <li>Indices</li>
            <li>Commodities</li>
          </ul>
        </div>
        <div className="mb-10">
          <h6 className="font-semibold mb-2 text-gray-200 text-xl">Contact</h6>
          <ul className="leading-8 text-gray-300">
            <li>Info@elitetradinghub.co</li>
            <li>+1203934848</li>
            <li>Georgia, CA 92100

            </li>
          </ul>
        </div>



        <p className="text-gray-300">Elite Trading Hub 2024 All rights reserved</p>
      </footer>
    )
}