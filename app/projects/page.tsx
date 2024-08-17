// app/projects/page.tsx
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <section className="py-16 z-50">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-90"
        style={{
          backgroundImage:
            "url('https://unblast.com/wp-content/uploads/2021/01/Space-Background-Images.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          objectFit: "cover",
          clipPath: "polygon(0 0%, 100% 0, 100% 100%, 40% 60%)",
        }}
      ></div>{" "}
      <div className="flex flex-col z-40 justify-center  w-30 mb-9 relative">
        <h1 className="text-4xl font-bold text-white mb-20 text-center">
          My Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard title="Project One" description="A cool project." />
          <ProjectCard
            title="Project Two"
            description="Another cool project."
          />
          <ProjectCard
            title="Project Two"
            description="Another cool project."
          />
          <ProjectCard
            title="Project Two"
            description="Another cool project."
          />
          <ProjectCard
            title="Project Three"
            description="Yet another project."
          />
        </div>
      </div>
    </section>
  );
}
