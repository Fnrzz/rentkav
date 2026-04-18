import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-[#0A2540] text-white flex flex-col w-full">
      <div className="px-6 md:px-10 lg:px-16 xl:px-20 py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
        <div className="flex flex-col gap-6 md:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-3">
            <Image
              src="/kavdra-logo.avif"
              alt="logo"
              width={50}
              height={50}
              className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] object-contain"
            />
            <h6 className="text-2xl md:text-3xl font-bold tracking-wide">
              RentKav
            </h6>
          </div>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed pr-0 md:pr-10 lg:pr-0">
            Reliable cars, transparent pricing, and peace of mind on every
            journey.
          </p>

          <div className="flex items-center gap-4 mt-2">
            <Link href="#" className="hover:text-[#C9A66B] transition-colors">
              <svg
                className="w-6 h-6 md:w-7 md:h-7"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            <Link href="#" className="hover:text-[#C9A66B] transition-colors">
              <svg
                className="w-6 h-6 md:w-7 md:h-7"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
              </svg>
            </Link>
            <Link href="#" className="hover:text-[#C9A66B] transition-colors">
              <svg
                className="w-6 h-6 md:w-7 md:h-7"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12.031 2C6.495 2 2 6.495 2 12.031c0 1.764.453 3.473 1.312 4.993L2.24 21.76l4.864-1.074A9.97 9.97 0 0012.031 22c5.536 0 10.031-4.495 10.031-10.031S17.567 2 12.031 2zm0 18.337c-1.488 0-2.951-.383-4.238-1.107l-.304-.171-3.146.695.706-3.072-.188-.311A8.344 8.344 0 013.663 12.03C3.663 7.416 7.416 3.663 12.031 3.663c4.614 0 8.368 3.753 8.368 8.368 0 4.614-3.754 8.306-8.368 8.306zm4.593-6.273c-.251-.126-1.488-.735-1.718-.819-.23-.084-.398-.126-.566.126-.168.252-.648.819-.795.987-.146.168-.293.189-.544.063-.251-.126-1.06-.391-2.021-1.252-.748-.67-1.252-1.498-1.398-1.75-.146-.252-.015-.388.111-.514.113-.113.251-.293.377-.44.126-.146.168-.252.251-.419.084-.168.042-.314-.021-.44-.063-.126-.566-1.363-.775-1.867-.203-.491-.41-.424-.566-.431-.146-.007-.314-.007-.482-.007-.168 0-.44.063-.67.314-.23.252-.88 .86-.88 2.097 0 1.237.901 2.433 1.027 2.601.126.168 1.774 2.706 4.296 3.795.6.258 1.068.412 1.433.527.602.19 1.15.163 1.583.1.483-.07 1.488-.608 1.698-1.196.21-.588.21-1.092.146-1.196-.063-.105-.23-.168-.482-.294z" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-lg text-white mb-2">Company</h4>
          <ul className="flex flex-col gap-3 text-gray-300 text-sm md:text-base">
            <li>
              <Link href="/" className="hover:text-[#C9A66B] transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-[#C9A66B] transition-colors">
                Our Vehicles
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-[#C9A66B] transition-colors">
                Locations
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-[#C9A66B] transition-colors">
                Careers
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-lg text-white mb-2">Services</h4>
          <ul className="flex flex-col gap-3 text-gray-300 text-sm md:text-base">
            <li>
              <Link href="/" className="hover:text-[#C9A66B] transition-colors">
                Daily Rental
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-[#C9A66B] transition-colors">
                12 Hours / 24 Hours Rental
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-[#C9A66B] transition-colors">
                With Driver
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-[#C9A66B] transition-colors">
                Self Drive
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-lg text-white mb-2">
            Support & Contact
          </h4>
          <div className="flex flex-col gap-3 text-gray-300 text-sm md:text-base">
            <p className="font-semibold text-white mt-1">Get in Touch:</p>
            <p>
              <span className="font-bold text-white">WhatsApp:</span> +62 8xx
              xxxx xxxx
            </p>
            <p>
              <span className="font-bold text-white">Email:</span>{" "}
              kavdrastudio@gmail.com
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#E5E7EB] text-[#0A2540] py-6 px-6 md:px-10 lg:px-16 xl:px-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm font-medium text-center md:text-left">
            © 2026 Kavdra Studio. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6 text-sm font-medium">
            <Link href="/" className="hover:text-[#C9A66B] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/" className="hover:text-[#C9A66B] transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/" className="hover:text-[#C9A66B] transition-colors">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
