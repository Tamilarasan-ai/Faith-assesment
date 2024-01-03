import logo from "../assets/nityanand-charandas.jpg";
import Data from "../constant/data.js";
function About() {
  return (<>
    <h1 className="text-2xl px-20 font-bold flex justify-start ">
    {Data.aboutInstructor.title}
  </h1>
    <section className=" py-2  px-20 h-50vh flex flex-wrap  justify-center  ">
     
      <div className="fw-full sm:w-1/6 px-4 flex items-center flex-col-3">
        <div className="w-1/2 sm:w-full mx-auto ">
          <img
            src={logo}
            alt="..."
            className="shadow rounded-full max-w-full h-20vh"
          />
        </div>
      </div>
      <div className="w-full sm:w-1/3 px-4">
        Deserunt exercitation incididunt et eu voluptate commodo officia qui.
        Minim sit cillum qui duis ad proident. Dolore cillum consequat quis et
        ea Lorem. Deserunt dolor officia et commodo laboris sint veniam amet ea
        reprehenderit qui ut cupidatat.
       
      </div>
      
      <div className="w-full sm:w-1/2 px-4">
        PVelit sint est ad dolor. Sunt excepteur esse proident elit id ullamco
        ullamco proident in fugiat. Fugiat ullamco ipsum eu cupidatat commodo
        aute. Ex Lorem fugiat commodo proident ut dolore ut consequat enim.
      
      </div>
      <ul className="grid grid-cols-4 gap-6 justify-center py-6 sm:flex flex-wrap">
          <li className="flex" >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="48"
              height="48"
              viewBox="0 0 48 48"
            >
              <path
                fill="#039be5"
                d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
              ></path>
              <path
                fill="#fff"
                d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
              ></path>
            </svg>
            Facebook
          </li>

          <li className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="50"
              height="50"
              viewBox="0 0 50 50"
            >
              <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
            </svg>
            Twitter
          </li>
          <li className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="48"
              height="48"
              viewBox="0 0 48 48"
            >
              <path
                fill="#FF3D00"
                d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"
              ></path>
              <path fill="#FFF" d="M20 31L20 17 32 24z"></path>
            </svg>
            Youtube
          </li>
          <li className="flex ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="48"
              height="48"
              viewBox="0 0 48 48"
            >
              <radialGradient
                id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1"
                cx="19.38"
                cy="42.035"
                r="44.899"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#fd5"></stop>
                <stop offset=".328" stop-color="#ff543f"></stop>
                <stop offset=".348" stop-color="#fc5245"></stop>
                <stop offset=".504" stop-color="#e64771"></stop>
                <stop offset=".643" stop-color="#d53e91"></stop>
                <stop offset=".761" stop-color="#cc39a4"></stop>
                <stop offset=".841" stop-color="#c837ab"></stop>
              </radialGradient>
              <path
                fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)"
                d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
              ></path>
              <radialGradient
                id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2"
                cx="11.786"
                cy="5.54"
                r="29.813"
                gradientTransform="matrix(1 0 0 .6663 0 1.849)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#4168c9"></stop>
                <stop
                  offset=".999"
                  stop-color="#4168c9"
                  stop-opacity="0"
                ></stop>
              </radialGradient>
              <path
                fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)"
                d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
              ></path>
              <path
                fill="#fff"
                d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
              ></path>
              <circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle>
              <path
                fill="#fff"
                d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
              ></path>
            </svg>
            Instagram
          </li>
        </ul>
    </section>
    </>
  );
}

export default About;
