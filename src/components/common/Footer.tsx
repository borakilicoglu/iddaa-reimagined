const Footer = () => {
  return (
    <footer className="mt-auto text-gray-600">
      <div className="bg-gray-800">
        <div className="container mx-auto flex flex-col flex-wrap px-4 py-10 md:flex-row md:flex-nowrap md:items-center lg:items-start">
          <div className="mx-auto shrink-0 text-center md:mx-0 md:text-left">
            <a
              href="/"
              className="flex items-center justify-center font-medium text-gray-900 md:justify-start"
            >
              <span className="text-4xl font-semibold text-yellow-400">
                iddaa
              </span>
            </a>
            <p className="mt-2 text-sm text-gray-500">
              Yasa gereği 18 yaşından büyükler üye olabilir.
            </p>
            <div className="mt-4 flex md:flex-col lg:flex-row">
              <button className="inline-flex items-center rounded-lg bg-gray-900 px-5 py-3 hover:opacity-50 focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="size-6"
                  viewBox="0 0 512 512"
                >
                  <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
                </svg>
                <span className="ml-4 flex flex-col items-start leading-none">
                  <span className="mb-1 text-xs text-gray-600">GET IT ON</span>
                  <span className="font-medium">Google Play</span>
                </span>
              </button>
              <button className="ml-4 mt-0 inline-flex items-center rounded-lg bg-gray-900 px-5 py-3 hover:opacity-50 focus:outline-none md:ml-0 md:mt-4 lg:ml-4 lg:mt-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="size-6"
                  viewBox="0 0 305 305"
                >
                  <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
                  <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
                </svg>
                <span className="ml-4 flex flex-col items-start leading-none">
                  <span className="mb-1 text-xs text-gray-600">
                    Download on the
                  </span>
                  <span className="font-medium">App Store</span>
                </span>
              </button>
            </div>
          </div>
          <div className="-mb-10 mt-10 flex grow flex-wrap text-center md:mt-0 md:pl-20 md:text-left">
            <div className="w-full px-4 md:w-1/2 lg:w-1/4">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-400">
                KATEGORİLER
              </h2>
              <nav className="mb-10 list-none">
                <li>
                  <a href="/" className="text-gray-600 hover:text-gray-700">
                    Canlı
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-600 hover:text-gray-700">
                    Bülten
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-600 hover:text-gray-700">
                    Sonuçlar
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-600 hover:text-gray-700">
                    Yardım
                  </a>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/4">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-400">
                CANLI SONUÇLAR
              </h2>
              <nav className="mb-10 list-none">
                <li>
                  <a href="/" className="text-gray-600 hover:text-gray-700">
                    iddaa Haberleri
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-600 hover:text-gray-700">
                    Bayi Malzemeleri
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-600 hover:text-gray-700">
                    iddaa Nasıl Oynanır?
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-600 hover:text-gray-700">
                    iddaa Bayi Bul
                  </a>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/4">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-400">
                ÖZEL ETKİNLİKLER
              </h2>
              <nav className="mb-10 list-none">
                <li>
                  <a href="/" className="text-gray-600 hover:text-gray-700">
                    Canlı
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-600 hover:text-gray-700">
                    Bülten
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-600 hover:text-gray-700">
                    Sonuçlar
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-600 hover:text-gray-700">
                    Yardım
                  </a>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/4">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-400">
                POPÜLER BAHİSLER
              </h2>
              <nav className="mb-10 list-none">
                <li>
                  <a href="/" className="text-gray-600 hover:text-gray-700">
                    iddaa Haberleri
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-600 hover:text-gray-700">
                    Bayi Malzemeleri
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-600 hover:text-gray-700">
                    iddaa Nasıl Oynanır?
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-600 hover:text-gray-700">
                    iddaa Bayi Bul
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-900">
        <div className="container mx-auto flex flex-col flex-wrap px-4 py-10 sm:flex-row">
          <p className="text-center text-sm text-gray-500 sm:text-left">
            © {new Date().getFullYear()} iddaa
          </p>
          <span className="mt-2 inline-flex justify-center sm:ml-auto sm:mt-0 sm:justify-start">
            <a href="/" className="text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="size-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a href="/" className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="size-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a href="/" className="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="size-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a href="/" className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="size-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
