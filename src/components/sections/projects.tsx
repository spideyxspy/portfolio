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
      className="relative z-[100] max-w-7xl mx-auto py-10 px-4"
    >
      <SectionHeader id="projects" title="Projects" />

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            className="group relative rounded-xl overflow-hidden cursor-pointer shadow-xl bg-black/20 backdrop-blur"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedMedia(project)}
          >
            {/* Media */}
            <div className="relative w-full h-[220px] overflow-hidden">

              {project.type === "image" ? (
                <motion.div
                  whileHover={{ scale: 1.12 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full"
                >
                  <Image
                    src={project.src}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              ) : (
                <video
                  src={project.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                />
              )}

              {/* Overlay */}
              <motion.div
                className="absolute inset-0 flex items-end bg-black/60"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-4 text-white text-lg font-semibold">
                  {project.title}
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-[200]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMedia(null)}
          >
            <motion.div
              initial={{ scale: 0.7 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.7 }}
              transition={{ duration: 0.35 }}
              className="max-w-[90vw] max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedMedia.type === "image" ? (
                <Image
                  src={selectedMedia.src}
                  alt={selectedMedia.title}
                  width={1920}
                  height={1080}
                  className="max-h-[90vh] object-contain rounded-lg"
                />
              ) : (
                <video
                  src={selectedMedia.src}
                  controls
                  autoPlay
                  className="max-h-[90vh] rounded-lg"
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
