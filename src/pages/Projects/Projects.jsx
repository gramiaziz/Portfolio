import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import pfe from "@/assets/images/incidentm/pfe.png";
import powerbi from "@/assets/images/incidentm/powerbi.png";
import chatagent from "@/assets/images/incidentm/chatagent.png";
import searchbyname from "@/assets/images/incidentm/searchbyname.png";
import teampage from "@/assets/images/incidentm/teampage.png";
import home from "@/assets/images/coconsult/home.png";
import proj from "@/assets/images/coconsult/projects.jpg";
import login from "@/assets/images/coconsult/login.jpg";

import bill from "@/assets/images/coconsult/bill.jpg";
import { FaCogs } from "react-icons/fa";

import homeshop from "@/assets/images/yshop/home.jpg";

import panier from "@/assets/images/yshop/panier.jpg";

import produit from "@/assets/images/yshop/produit.jpg";

import first from "@/assets/images/F2K/first.jpg";

import second from "@/assets/images/F2K/second.jpg";

import third from "@/assets/images/F2K/third.jpg";
import fourth from "@/assets/images/F2K/fourth.jpg";



const projects = [
  {
    title: "Client Portal 🚀 An Incident Management Platform",
    description:
      "Developed an integrated incident management platform connected with Microsoft Dynamics CRM, streamlining service operations through automated workflows, SLA tracking, and multi-level escalation processes. Designed and implemented real-time Power BI dashboards to monitor performance metrics and enhance decision-making.",
    images: [pfe, powerbi, chatagent, searchbyname, teampage],
    color: "#5196fd",
    technologies: [".NET", "Next.js", "Dynamics 365", "Power BI"],
  },
  {
    title: "CoConsult",
    description:
      "Designed and developed a tailored ERP solution for small and medium-sized enterprises, focusing on scalability and modular architecture. The platform integrates core business processes — including finance, HR, and inventory management — within a unified system. Implemented a robust CI/CD pipeline to ensure seamless deployment, automated testing, and continuous integration across all services, enhancing development efficiency and system reliability.",
    images: [login, home, proj, bill],
    color: "#8f89ff",
    technologies: ["Springboot", "Angular", "Devops"],
  },
  {
    title: "🚀YShop – Sports Nutrition E-Shop",
    description:
      "🚀 YShop is an e-shop for sports nutrition products.It allows users to browse, filter, and purchase supplements with a modern, responsive interface.💻✨",
    images: [homeshop, produit, panier],
    color: "#fff",
    technologies: ["Springboot", "React"],
  },
  {
    title: "F2K - Official Website for French Company 🔥",
    description:
      " Designed and developed the official website for F2K, enhancing client visibility and brand presence.💻✨",
    images: [first, second, third, fourth],
    color: "#ed649e",
    technologies: ["Angular"],

  },
];

export default function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    // Add specific styles for 1366x768 resolution
    const style = document.createElement("style");
    style.textContent = `
      @media screen and (width: 1366px) and (height: 768px),
             screen and (width: 1367px) and (height: 768px),
             screen and (width: 1368px) and (height: 769px) {
        .project-card {
          scale: 0.85;
          margin-top: -5vh;
        }
        .project-container {
          height: 90vh;
        }
      }
    `;
    document.head.appendChild(style);

    // Resolution check function
    const checkResolution = () => {
      const isTargetResolution =
        window.innerWidth >= 1360 &&
        window.innerWidth <= 1370 &&
        window.innerHeight >= 760 &&
        window.innerHeight <= 775;

      if (isTargetResolution) {
        document.documentElement.style.setProperty("--project-scale", "0.85");
        document.documentElement.style.setProperty("--project-margin", "-5vh");
      } else {
        document.documentElement.style.setProperty("--project-scale", "1");
        document.documentElement.style.setProperty("--project-margin", "0");
      }
    };

    checkResolution();
    window.addEventListener("resize", checkResolution);

    return () => {
      document.head.removeChild(style);
      window.removeEventListener("resize", checkResolution);
    };
  }, []);

  return (
    <ReactLenis root>
      <main className="bg-black" ref={container}>
        <section className="text-white w-full bg-slate-950">
          {projects.map((project, i) => {
             const targetScale = 0.97; 

            return (
              <Card
                key={`p_${i}`}
                i={i}
                images={project.images}
                title={project.title}
                color={project.color}
                description={project.description}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
                technologies={project.technologies ?? []}   // ✅ add this
                liveLink={project.liveLink}
              />

            );
          })}
        </section>
      </main>
    </ReactLenis>
  );
}

function Card({
  i,
  title,
  description,
  images,
  color,
  progress,
  range,
  targetScale,
  technologies = [],
  liveLink,
}) {
  const container = useRef(null);
  const [index, setIndex] = useState(0);
 
  const scale = useTransform(progress, range, [targetScale, 1]);
  const prev = () => setIndex((p) => (p === 0 ? images.length - 1 : p - 1));
  const next = () => setIndex((p) => (p === images.length - 1 ? 0 : p + 1));

  // drag threshold (px) to change slide
  const onDragEnd = (_e, info) => {
    if (info.offset.x > 80) prev();
    else if (info.offset.x < -80) next();
  };
  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0 project-container"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
          transform: `scale(var(--project-scale, 1))`,
          marginTop: "var(--project-margin, 0)",
        }}
        className="relative -top-[25%] h-auto w-[90%] md:w-[85%] lg:w-[75%] xl:w-[65%] origin-top project-card"
        whileHover={{ y: -8, transition: { duration: 0.3 } }}
      >
        <div className="w-full flex flex-col md:flex-row bg-zinc-900 rounded-2xl overflow-hidden shadow-xl">
          {/* IMAGE / CAROUSEL */}
          {/* IMAGE / CAROUSEL */}
          <div className="w-full md:w-[55%] relative overflow-hidden flex items-center justify-center bg-black">
            {/* Slide track */}
            <motion.div
              className="flex transition-transform ease-in-out duration-500"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {images.map((src, idx) => (
                <motion.div
                  key={idx}
                  className="w-full flex-shrink-0 flex items-center justify-center bg-black"
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={onDragEnd}
                >
                  <img
                    src={src}
                    alt={`${title} ${idx + 1}`}
                    className="max-w-full max-h-[450px] md:max-h-[500px] object-contain rounded-none"
                    draggable={false}
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Colored overlay on hover */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              style={{ backgroundColor: color, mixBlendMode: "overlay" }}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.2 }}
              transition={{ duration: 0.3 }}
            />

            {/* Project number */}
            <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium">
              Project {i + 1}
            </div>

            {/* Controls */}
            <button
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 hover:bg-black/80 px-3 py-2 backdrop-blur text-white"
            >
              ‹
            </button>
            <button
              onClick={next}
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 hover:bg-black/80 px-3 py-2 backdrop-blur text-white"
            >
              ›
            </button>

            {/* Dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, d) => (
                <button
                  key={d}
                  onClick={() => setIndex(d)}
                  aria-label={`Go to slide ${d + 1}`}
                  className={`h-2.5 w-2.5 rounded-full transition-all ${d === index ? "bg-white" : "bg-white/40"
                    }`}
                />
              ))}
            </div>
          </div>


          {/* CONTENT */}
          <div className="w-full md:w-[45%] p-6 md:p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div
                  className="w-2 h-2 md:w-3 md:h-3 rounded-full"
                  style={{ backgroundColor: color }}
                />
                <div className="h-[1px] w-12 md:w-20 bg-gray-600" />
              </div>

              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-4">
                {title}
              </h2>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed line-clamp-3 md:line-clamp-none max-w-md">
                {description}
              </p>
            </div>

   <div className="mt-3">
  <div className="flex items-center gap-2 mb-1">
    <FaCogs className="text-emerald-400" />
    <span className="text-white/90 font-semibold">Technologies :</span>
  </div>

  <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs md:text-sm font-medium text-gray-300">
    {technologies.map((t, i) => (
      <span key={t + i} className="whitespace-nowrap">
        {t}
        {i < technologies.length - 1 && (
          <span className="mx-1 text-gray-600">•</span>
        )}
      </span>
    ))}
  </div>
</div>



          </div>
        </div>
      </motion.div>
    </div>
  );
}

// Add PropTypes validation
Card.propTypes = {
  i: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired, // changed
  color: PropTypes.string.isRequired,
  progress: PropTypes.object.isRequired,
  range: PropTypes.array.isRequired,
  targetScale: PropTypes.number.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string),
  liveLink: PropTypes.string.isRequired,
};
