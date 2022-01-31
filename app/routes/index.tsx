import { Link } from "remix";

export default function Index() {
  return (
    <>
      <div className="select-none h-screen overflow-y-hidden">
        <div className="sticky top-0 z-50 h-20">
          <div className="flex justify-between items-center h-20 bg-gradient-to-b from-black/20 to-black/5 w-full">
            <div className="space-x-2 mx-5">
              <a
                href=""
                className="text-white font-medium text-lg hover:text-rose-400 hover:underline hover:decoration-wavy transition duration-200"
              >
                <span>Add Word</span>
              </a>
              <a
                href=""
                className="text-white font-medium text-lg hover:text-rose-400 hover:underline hover:decoration-wavy transition duration-200"
              >
                <span>Remove Word</span>
              </a>
            </div>
            <Link to="/auth" className="mx-10">
              <button className="bg-rose-600 px-5 py-2 rounded-lg border-b-2 hover:border-b-4 transition-all border-rose-800 hover:scale-105">
                <span className=" font-black text-rose-900">Login</span>
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-center h-screen items-center lg:mx-0 mx-2">
          <div className="inline-flex justify-center items-center slide-in-elliptic-top-fwd">
            <h2 className="text-2xl lg:text-7xl text-white font-bold drop-shadow-lg">
              RemixJS Experimentation
            </h2>
            <span className="text-lg lg:text-6xl">&#128540;</span>
          </div>
          <div className="text-xl text-white slide-in-elliptic-top-fwd">
            <p>That's cool &#129322;</p>
          </div>
        </div>
      </div>
    </>
  );
}
