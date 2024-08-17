// app/about/page.tsx
export default function About() {
  return (
    <section className="py-16 ">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{
          backgroundImage:
            "url('https://unblast.com/wp-content/uploads/2021/01/Space-Background-Images.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          objectFit: "cover",
          clipPath: "polygon(0 0%, 100% 0, 100% 100%, 0% 100%)",
        }}
      ></div>{" "}
      <div className=" flex flex-col z-40 justify-center  w-30 mb-9 relative">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          A propos de Moi
        </h1>
        <p className=" text-2xl text-gray-600  items-end">
          Bonjour ! Je suis El Hadji Cheikhou Touré, un développeur React JS
          passionné . j'ai acquis une expertise solide dans la création
          d'interfaces utilisateur réactives et performantes en utilisant React
          et ses écosystèmes associés comme Redux, Next.js, et Node.js. Mon
          approche du développement est axée sur la livraison de solutions web
          robustes et évolutives qui répondent aux besoins des utilisateurs tout
          en étant accessibles et engageantes.
        </p>
      </div>
    </section>
  );
}
