// app/page.tsx
export default function Home() {
  return (
    <section className="text-center py-16">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://unblast.com/wp-content/uploads/2021/01/Space-Background-Images.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          objectFit: "cover",
          clipPath: "polygon(0 0%, 100% 0, 100% 100%, 00% 100%)",
        }}
      >
        <div className="min-h-screen flex flex-col  px-50 justify-center items-center text-white  relative">
          <img src="/img.jpeg" alt="Mon profil" className="rounded-full w-64 h-64 object-cover" />
          <h1 className="text-5xl  font-bold mb-4 z-60">
            Bienvenue sur Mon Portfolio
          </h1>
          <p className="text-lg text-gray-100">
            Hie c'est El hadji cheikhou Toure, développeur full-stack js
          </p>
        </div>
      </div>
    </section>
  );
}
