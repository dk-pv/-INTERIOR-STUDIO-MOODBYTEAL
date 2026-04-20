import { projects } from "@/data/projects";
import Image from "next/image";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find((p) => p.id === slug);

  if (!project) {
    return <div className="p-10">Project not found</div>;
  }

  return (
    <main className="bg-white text-black px-6 md:px-16 py-20">
      <div className="max-w-5xl mx-auto space-y-10">
        
        <h1 className="text-4xl md:text-5xl font-semibold">
          {project.title}
        </h1>

        <div className="relative w-full h-[500px]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover rounded-xl"
          />
        </div>

        <p className="text-gray-500">{project.category}</p>

        <p className="text-lg text-gray-700">
          {project.description}
        </p>

      </div>
    </main>
  );
}