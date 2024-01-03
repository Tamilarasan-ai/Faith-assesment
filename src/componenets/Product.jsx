import { Button, Card } from "flowbite-react";

function Product() {
  return (
    <Card className="max-w-sm rounded-none bg-[#f5ecfe]">
      <h5 className="text-l font-bold  text-gray-900 dark:text-white">
        Course fees
      </h5>
      <h5 className="text-5xl font-bold tracking-tight -mt-4 text-gray-900 dark:text-white">
        ₹5,000
      </h5>
      <h3 className="font-bold"> What's included:</h3>
      <p className="font-semibold text-gray-800 dark:text-gray-400">
        <div className=" bg-[#f5ecfe] dark:bg-gray-800 ">
          <ul>
            <li className="flex items-start mt-4">
              <div className="flex-shrink-0">
             <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="48px" height="48px">    <path d="M20,3H4C2.897,3,2,3.897,2,5v14c0,1.103,0.897,2,2,2h16c1.103,0,2-0.897,2-2V5C22,3.897,21.103,3,20,3z M9,15.306V8.694 c0-0.532,0.575-0.866,1.037-0.602l5.624,3.306c0.466,0.266,0.466,0.937,0,1.203l-5.624,3.306C9.575,16.172,9,15.838,9,15.306z"/></svg>
              </div>
              
              <p className="ml-3 text-base leading-6 text-gray-700 dark:text-gray-200">
                On demand videos
              </p>
            </li>
            <li className="flex items-start mt-4">
              <div className="flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="48px" height="48px">    <path d="M20,3H4C2.897,3,2,3.897,2,5v14c0,1.103,0.897,2,2,2h16c1.103,0,2-0.897,2-2V5C22,3.897,21.103,3,20,3z M9,15.306V8.694 c0-0.532,0.575-0.866,1.037-0.602l5.624,3.306c0.466,0.266,0.466,0.937,0,1.203l-5.624,3.306C9.575,16.172,9,15.838,9,15.306z"/></svg>
              </div>
              <p className="ml-3 text-base leading-6 text-gray-800 dark:text-gray-200">
                2 livestream sessions
              </p>
            </li>
            <li className="flex items-start mt-4">
              <div className="flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
<path d="M 22 0 C 19.757813 0 18 1.757813 18 4 L 18 20 C 18 22.242188 19.757813 24 22 24 L 37.625 24 L 45.34375 30.75 C 45.527344 30.910156 45.761719 31 46 31 C 46.140625 31 46.273438 30.96875 46.40625 30.90625 C 46.765625 30.746094 47 30.394531 47 30 L 47 23.875 C 48.742188 23.441406 50 21.898438 50 20 L 50 4 C 50 1.757813 48.242188 0 46 0 Z M 33 6.09375 L 35.09375 6.09375 L 37.5 17.59375 L 35.6875 17.59375 L 35.09375 14.59375 L 32.90625 14.59375 L 32.3125 17.59375 L 30.5 17.59375 Z M 34 8 C 33.898438 8.800781 33.695313 9.894531 33.59375 10.59375 L 33.09375 13.1875 L 35 13.1875 L 34.5 10.59375 C 34.300781 9.894531 34.195313 8.800781 34.09375 8 Z M 4 19 C 1.757813 19 0 20.757813 0 23 L 0 39 C 0 40.894531 1.257813 42.441406 3 42.875 L 3 49 C 3 49.394531 3.234375 49.746094 3.59375 49.90625 C 3.726563 49.96875 3.859375 50 4 50 C 4.238281 50 4.46875 49.910156 4.65625 49.75 L 12.375 43 L 28 43 C 30.242188 43 32 41.242188 32 39 L 32 26 L 22 26 C 18.636719 26 16 23.363281 16 20 L 16 19 Z M 15.59375 25 C 17.992188 25 18.90625 27.585938 18.90625 30.6875 C 18.90625 33.6875 18.195313 35.398438 17.09375 36 L 17.09375 36.09375 C 17.792969 36.394531 18.613281 36.707031 19.3125 36.90625 L 18.6875 38.3125 C 17.789063 37.914063 16.605469 37.304688 15.90625 36.90625 C 15.707031 36.804688 15.507813 36.6875 15.40625 36.6875 C 13.304688 36.6875 12 34.710938 12 30.8125 C 12 27.414063 13.292969 25 15.59375 25 Z M 15.5 26.5 C 14.300781 26.5 13.90625 28.585938 13.90625 30.6875 C 13.90625 33.085938 14.300781 35.09375 15.5 35.09375 C 16.601563 35.09375 17 33.085938 17 30.6875 C 17 28.488281 16.601563 26.5 15.5 26.5 Z"></path>
</svg>
              </div>
              <p className="ml-3 text-base leading-6 text-gray-800 dark:text-gray-200">
                Live Q&A sessions with Nityanand Charan Das
              </p>
            </li>
            <li className="flex items-start mt-4">
              <div className="flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
    <path d="M25,3.07C12.356,3.07,2.07,12.011,2.07,23c0,6.176,3.338,12.045,8.957,15.805c-0.126,1.034-0.646,3.622-2.787,6.66 c-0.199,0.283-0.225,0.653-0.066,0.961c0.159,0.308,0.476,0.502,0.822,0.504c0.02,0,0.038,0,0.059,0 c5.448-0.001,9.115-3.367,10.283-4.611c1.843,0.405,3.744,0.611,5.662,0.611c12.644,0,22.93-8.94,22.93-19.93S37.644,3.07,25,3.07z M14,16h22c0.552,0,1,0.447,1,1s-0.448,1-1,1H14c-0.552,0-1-0.447-1-1S13.448,16,14,16z M10,24c-0.552,0-1-0.447-1-1s0.448-1,1-1h17 c0.552,0,1,0.447,1,1s-0.448,1-1,1H10z M36,30H14c-0.552,0-1-0.447-1-1s0.448-1,1-1h22c0.552,0,1,0.447,1,1S36.552,30,36,30z M40,24 h-7c-0.552,0-1-0.447-1-1s0.448-1,1-1h7c0.552,0,1,0.447,1,1S40.552,24,40,24z"></path>
</svg>
              </div>
              <p className="ml-3 text-base leading-6 text-gray-800 dark:text-gray-200">
                An active whatsapp community
              </p>
            </li>
          </ul>
        </div>
      </p>
      <Button className="rounded-full bg-[#5e3cb2]">
        Read more
       
      </Button>
    </Card>

    // <div className="mb-4 overflow-hidden shadow-lg max-w-sm ">
    //   <div className="px-6 py-8 bg-[#d8bcf5] dark:bg-gray-900 sm:p-10 sm:pb-6">
    //     <div className="flex ">
    //       <span className="inline-flex px-4 py-1 text-sm font-semibold leading-5 tracking-wide uppercase rounded-full dark:text-white">
    //         Team Plan
    //       </span>
    //     </div>
    //     <div className="flex  mt-4 text-6xl font-extrabold leading-none dark:text-white">

    //     ₹5,000

    //     </div>
    //   </div>
    //   <div className="px-6 pt-6 pb-8 bg-[#d8bcf5] dark:bg-gray-800 sm:p-10 sm:pt-6">
    //     <ul>
    //         <h1 className='font-bold text-xl'>What's included: </h1>
    //       <li className="flex items-start mt-4">
    //         <div className="flex-shrink-0">
    //           <svg className="w-6 h-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
    //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
    //           </svg>
    //         </div>
    //         <p className="ml-3 text-base leading-6 text-gray-700 dark:text-gray-200">
    //           On demand videos
    //         </p>
    //       </li>
    //       <li className="flex items-start mt-4">
    //         <div className="flex-shrink-0">
    //           <svg className="w-6 h-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
    //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
    //           </svg>
    //         </div>
    //         <p className="ml-3 text-base leading-6 text-gray-800 dark:text-gray-200">
    //         2 livestream sessions
    //         </p>
    //       </li>
    //       <li className="flex items-start mt-4">
    //         <div className="flex-shrink-0">
    //           <svg className="w-6 h-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
    //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
    //           </svg>
    //         </div>
    //         <p className="ml-3 text-base leading-6 text-gray-800 dark:text-gray-200">
    //           Live Q&A sessions with Nityanand Charan Das
    //         </p>
    //       </li>
    //       <li className="flex items-start mt-4">
    //         <div className="flex-shrink-0">
    //           <svg className="w-6 h-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
    //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
    //           </svg>
    //         </div>
    //         <p className="ml-3 text-base leading-6 text-gray-800 dark:text-gray-200">
    //           An active whatsapp community
    //         </p>
    //       </li>
    //     </ul>
    //     <div className="mt-6 rounded-4xl shadow">
    //       <a href="#" className="flex items-center justify-center px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:shadow-outline">
    //         Register Today
    //       </a>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Product;
