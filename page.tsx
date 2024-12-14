import Image from "next/image";

export default function Home() {
  return (
    <div>
      <nav className="bg-teal-600 flex justify-between p-4">
        <Image
          src="/Imagen3.png"
          width={50}
          height={70}
          alt="LOGO"
        />
        <ul className='flex justify-between text-white'>
          <li className="hover:underline">Nosotros</li>
          <li className="hover:underline">Productos</li>
          <li className="hover:underline">Contacto</li>
        </ul>
      </nav>
      <section className="justify-between flex pr-16">
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
      </section>
    </div>
  );
}
