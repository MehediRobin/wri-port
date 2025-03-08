

function Footer() {
  return (
    <footer className=" h-16 min-w-[100%] bg-white flex flex-col items-center justify-center">
      <small className="mb-2 block text-center text-gray-500 ">
        &copy; {new Date().getFullYear()} Mehedi Robin. All rights reserved.
      </small>
      <p className="text-sm">
        <span className="font-semibold">About this website:</span> I have built
        this website with React, Next.js, TypeScript, Tailwind CSS, Framer
        Motion, and Vercel.
      </p>
    </footer>
  );
}

export default Footer;
