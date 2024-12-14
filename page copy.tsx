'use client'

import Image from "next/image";

import { useState, useEffect } from "react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Cambia el valor según cuándo quieres que se active.
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <nav className={`sticky flex justify-between top-0 h-[15vh] p-4 items-center z-50 transition-colors duration-300 ${
        isScrolled ? "bg-teal-600 bg-opacity-90 shadow-md" : "bg-teal-600"
      }`}>
        <Image
          src="/Imagen3.png"
          width={70}
          height={40}
          alt="LOGO"
        />
        <ul className='flex gap-10 text-4xl text-white'>
          <li className="hover:underline">Nosotros</li>
          <li className="hover:underline">Productos</li>
          <li className="hover:underline">Contacto</li>
        </ul>
      </nav>
      <section>
        <div className="h-[85vh] relative">
          <Image
            src='/mujerlateral2.jpg'
            fill
            priority
            alt="Header"
            className='md:block hidden'
          />
          <div className="relative">
            <h1>EmeraldSpa</h1>
            <h2>Your beauty is our job.</h2>
            <h3>Put yourself in the hands of the best professionals in beauty and care, we have the perfect plan for you.</h3>
            <button>Get started</button>
          </div>
        </div>
      </section>
      <section>
        <div className="justify-between flex pr-16">
          <div>
            <h2 className="text-emerald-600">SummerFlower</h2>
            <h3>Try the latest in care and whitening for your face, a mixture of cocoa and vanilla created for you.</h3>
          </div>
          <Image
            src="/crema.png"
            width={350}
            height={350}
            alt="crema"
            className="animate-spin360"
          />
          <div>
            <h3>Un grandioso complemento para el cuidado de tu piel y cuerpo y demas cosas que tengas por ahi</h3>
            <button>Order now</button>
          </div>
        </div>

        <div>
          <h2>More Products</h2>

        </div>
      </section>
      <section>
        <h2>Leave your beauty at our hands</h2>
        <h3>We offer you only the best</h3>
        <ul className="flex justify-between ">
          <li>
            <Image
              src="/depilacionç.png"
              width={50}
              height={70}
              alt="LOGO"
            />
            <h2>Silver</h2>
            <ul className="list-disc">
              <li>Loremp impsun</li>
              <li>Loremp impsun</li>
              <li>Loremp impsun</li>
              <li>Loremp impsun</li>
              <li>Loremp impsun</li>
            </ul>
            <button>$3.99</button>
          </li>
          <li>
            <Image
              src="/depilacionç.png"
              width={50}
              height={70}
              alt="LOGO"
            />
            <h2>Gold</h2>
            <ul>
              <li>Loremp impsun</li>
              <li>Loremp impsun</li>
              <li>Loremp impsun</li>
              <li>Loremp impsun</li>
              <li>Loremp impsun</li>
            </ul>
            <button>$5.99</button>
          </li>
          <li>
            <Image
              src="/depilacionç.png"
              width={50}
              height={70}
              alt="LOGO"
            />
            <h2>Platinium</h2>
            <ul>
              <li>Loremp impsun</li>
              <li>Loremp impsun</li>
              <li>Loremp impsun</li>
              <li>Loremp impsun</li>
              <li>Loremp impsun</li>
            </ul>
            <button>$9.99</button>
          </li>
        </ul>
      </section>
    </div>
  );
}
