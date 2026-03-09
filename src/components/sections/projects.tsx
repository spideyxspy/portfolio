"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import projects, { Project } from "@/data/projects";

const ProjectsSection = () => {
  const [selectedMedia, setSelectedMedia] = useState<Project | null>(null);

  return (
    <SectionWrapper
      id="projects"
      className="relative z-20 max-w-7xl mx-auto py-10 px-4"
    >
      <SectionHeader id="projects" title="Projects" />

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            className="flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedMedia(project)}
          >
            {/* Card */}
            <div
              className="relative w-full rounded-lg overflow-hidden cursor-pointer"
              style={{ aspectRatio: "3/2" }}
            >
              {/* Media */}
              {project.type === "image" ? (
                <Image
                  src={project.src}
                  alt={project.title}
                  fill
                  className="absolute w-full h-full object-cover transition-transform hover:scale-[1.05]"
                />
              ) : (
                <video
                  src={project.src}
                  muted
                  className="absolute w-full h-full object-cover"
                />
              )}

              {/* Gradient Overlay */}
              <div className="absolute w-full h-1/2 bottom-0 left-0 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none">
                <div className="flex flex-col h-full justify-end p-4 text-white">
                  <div className="text-lg">{project.title}</div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMedia(null)}
          >
            <motion.div
              className="max-w-[90%] max-h-[90%]"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              {selectedMedia.type === "image" ? (
                <Image
                  src={selectedMedia.src}
                  alt={selectedMedia.title}
                  width={1920}
                  height={1080}
                  className="max-w-full max-h-[90vh] object-contain rounded-md"
                />
              ) : (
                <video
                  src={selectedMedia.src}
                  controls
                  autoPlay
                  className="max-w-full max-h-[90vh] object-contain rounded-md"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
};

export default ProjectsSection;
