import Image from "next/image";

export default function Hero() {
  return (
     <main className="relative h-screen w-full">
      {/* Background Image */}
      <Image
        src="/bg.jpeg" // replace with your image path
        alt="Background"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        {/* Logo / Partner info */}
        <div className="absolute top-6 left-40 flex items-center gap-2 text-white font-medium">
          <Image src="/car.svg" alt="Car" width={25} height={25} />
          <span className="font-bold">Luzhaven</span>
          <span className="text-xs">× Yango Partner</span>
        </div>

        {/* Main Text */}
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2">
          Get Paid What You're <br></br>Worth.
        </h1>
        <h2 className="text-3xl sm:text-4xl font-bold text-red-600 mb-4">
          A Partner Who's Got You.
        </h2>
        <p className="text-gray-200 max-w-lg mb-6">
          Stop getting blamed for every problem. Join the leading Yango partner
          that always has your back.
        </p>

        {/* Button */}
        <a
          href="#apply"
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition"
        >
          Apply Now. Start Earning. →
        </a>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 flex flex-col items-center text-gray-300">
          <span className="text-sm mb-2">Scroll to apply</span>
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex items-start justify-center">
            <div className="w-1 h-2 bg-gray-300 rounded-full mt-1 animate-bounce" />
          </div>
        </div>
      </div>
    </main>
  );
}