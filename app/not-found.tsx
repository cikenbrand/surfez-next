
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="w-full h-[100vh] flex flex-col items-center justify-center px-4 before:absolute before:top-0 before:right-0 before:w-[50%] before:h-[100%] before:bg-yellow-tint before:z-[-1]">
      <h1 className="text-[10rem] font-bold">404</h1>
      <p className="text-center">Sorry, the page that you requested does not exist.</p>

      <Link href="/" className="py-2 px-4 bg-black mt-8">
        <p className="font-medium text-white">Go Back</p>
      </Link>

      <p className="text-[0.8rem] mt-6 text-gray-400 underline">. website made by faridsharby .</p>
    </div>
  )
}

export default NotFound;