export default function TopBar(props) {
  return (
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <Logo></Logo>
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      
      </nav>
      <Seach />
    </div>
  );
}

function Logo() {
  return (
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="164"
        height="32"
        viewBox="0 0 164 32"
        fill="none"
      >
        <path
          fill="#0F172A"
          d="M41.793 0v31.022h-7.136V9.439l-13.693 16.62h-.354L6.913 9.438v21.583H0V0h7.763l13.202 16.4L34.167 0h7.626zM82.48 25.083v5.939H50.322V0h31.713v5.938H57.414v6.382h20.562v5.939H57.414v6.827l25.066-.003zm33.877 5.939l-8.964-10.548H96.108v10.548h-7.092V0h21.544c7.626 0 13.381 3.501 13.381 10.237 0 5.273-3.525 8.553-8.699 9.75l9.635 11.035h-8.52zm-6.199-16.397c3.746 0 6.513-.888 6.513-4.343 0-3.456-2.763-4.344-6.513-4.344H96.06v8.69l14.098-.003zM163.855 0v16.4c0 9.307-6.2 15.6-17.528 15.6-11.33 0-17.529-6.293-17.529-15.6V0h7.136v15.865c0 6.205 3.658 9.925 10.393 9.925 6.734 0 10.392-3.723 10.392-9.925V0h7.136z"
        ></path>
      </svg>
      <span className="ml-3 text-xl md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
        Eccommerce
      </span>
    </a>
  );
}

function Seach() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
      />
    </svg>
  );
}
