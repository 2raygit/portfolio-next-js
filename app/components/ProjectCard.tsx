// components/ProjectCard.tsx
interface ProjectCardProps {
  title: string;
  description: string;
}

export default function ProjectCard({ title, description }: ProjectCardProps) {
  return (
    <div className="bg-yellow-500 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-2xl  text-white font-bold mb-2">{title}</h3>
      <p className="text-gray-100">{description}</p>
    </div>
  );
}
