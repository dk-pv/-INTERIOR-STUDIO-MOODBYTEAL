// // "use client";

// // import { useRef, use } from "react";
// // import { motion, useInView, useScroll, useTransform } from "framer-motion";
// // import { notFound } from "next/navigation";
// // import Link from "next/link";
// // import Image from "next/image";
// // import { projects } from "@/data/projects";

// // const EXPO = [0.16, 1, 0.3, 1] as const;

// // type ExtendedProject = (typeof projects)[number] & {
// //   images?: string[];
// //   location?: string;
// //   year?: string;
// //   quote?: string;
// //   description?: string;
// //   area?: string;
// // };

// // // ─── Parallax Hero ────────────────────────────────────────
// // function HeroImage({ src, alt }: { src: string; alt: string }) {
// //   const ref = useRef(null);
// //   const { scrollYProgress } = useScroll({
// //     target: ref,
// //     offset: ["start start", "end start"],
// //   });
// //   const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

// //   return (
// //     <div
// //       ref={ref}
// //       style={{
// //         position: "relative",
// //         height: "clamp(420px, 70vh, 720px)",
// //         overflow: "hidden",
// //       }}
// //     >
// //       <motion.div
// //         initial={{ clipPath: "inset(100% 0 0 0)" }}
// //         animate={{ clipPath: "inset(0% 0 0 0)" }}
// //         transition={{ duration: 1.3, ease: EXPO }}
// //         style={{ position: "absolute", inset: 0 }}
// //       >
// //         <motion.div style={{ y, position: "absolute", inset: "-20%" }}>
// //           <Image
// //             src={src}
// //             alt={alt}
// //             fill
// //             priority
// //             style={{ objectFit: "cover" }}
// //           />
// //         </motion.div>
// //       </motion.div>

// //       {/* Bottom gradient */}
// //       <div
// //         style={{
// //           position: "absolute",
// //           inset: 0,
// //           background:
// //             "linear-gradient(to top, rgba(245,244,240,0.6), transparent 60%)",
// //           pointerEvents: "none",
// //         }}
// //       />
// //     </div>
// //   );
// // }

// // // ─── Detail Image ─────────────────────────────────────────
// // function DetailImage({
// //   src,
// //   alt,
// //   index,
// // }: {
// //   src: string;
// //   alt: string;
// //   index: number;
// // }) {
// //   const ref = useRef(null);
// //   const inView = useInView(ref, { once: true, margin: "-80px" });

// //   return (
// //     <motion.div
// //       ref={ref}
// //       initial={{ opacity: 0, y: 40 }}
// //       animate={inView ? { opacity: 1, y: 0 } : {}}
// //       transition={{ duration: 0.9, delay: index * 0.08, ease: EXPO }}
// //       style={{
// //         position: "relative",
// //         width: "100%",
// //         aspectRatio: index % 3 === 0 ? "16/10" : "4/3",
// //         overflow: "hidden",
// //         borderRadius: 2,
// //       }}
// //     >
// //       <Image
// //         src={src}
// //         alt={alt}
// //         fill
// //         sizes="(max-width:768px) 100vw, 60vw"
// //         style={{ objectFit: "cover" }}
// //       />
// //     </motion.div>
// //   );
// // }

// // // ─── Next Project Card ────────────────────────────────────
// // function NextProject({ project }: { project: ExtendedProject }) {
// //   const ref = useRef(null);
// //   const inView = useInView(ref, { once: true, margin: "-60px" });

// //   return (
// //     <Link
// //       href={`/work/${project.id}`}
// //       style={{ cursor: "none", display: "block" }}
// //     >
// //       <motion.div
// //         ref={ref}
// //         initial={{ opacity: 0 }}
// //         animate={inView ? { opacity: 1 } : {}}
// //         whileHover="hover"
// //         transition={{ duration: 0.6 }}
// //         style={{
// //           position: "relative",
// //          height: "clamp(240px, 38vh, 400px)",
// //           overflow: "hidden",
// //         }}
// //       >
// //         <motion.div
// //           variants={{ hover: { scale: 1.04 } }}
// //           transition={{ duration: 0.65, ease: EXPO }}
// //           style={{ position: "absolute", inset: 0 }}
// //         >
// //           <Image
// //             src={project.image}
// //             alt={project.title}
// //             fill
// //             style={{ objectFit: "cover", opacity: 0.5 }}
// //           />
// //         </motion.div>

// //         <div
// //           style={{
// //             position: "absolute",
// //             inset: 0,
// //             background:
// //               "linear-gradient(to top, rgba(10,10,10,0.7), rgba(10,10,10,0.15))",
// //           }}
// //         />

// //         <div style={{ position: "absolute", bottom: 24, left: 32, right: 32 }}>
// //           <p
// //             style={{
// //               fontFamily: "'DM Mono', monospace",
// //               fontSize: "0.58rem",
// //               letterSpacing: "0.28em",
// //               textTransform: "uppercase",
// //               color: "rgba(245,244,240,0.45)",
// //               marginBottom: 12,
// //             }}
// //           >
// //             Next Project
// //           </p>
// //           <h3
// //             style={{
// //               fontFamily: "var(--font-heading)",
// //               fontSize: "clamp(1.8rem, 4vw, 3.5rem)",
// //               letterSpacing: "-0.04em",
// //               color: "#f5f4f0",
// //               fontWeight: 400,
// //             }}
// //           >
// //             {project.title}
// //           </h3>
// //           <p
// //             style={{
// //               fontFamily: "'DM Mono', monospace",
// //               fontSize: "0.6rem",
// //               letterSpacing: "0.2em",
// //               color: "rgba(245,244,240,0.35)",
// //               marginTop: 10,
// //               textTransform: "uppercase",
// //             }}
// //           >
// //             {project.category}
// //           </p>
// //         </div>

// //         {/* Arrow */}
// //         <motion.div
// //           variants={{ hover: { x: 0, opacity: 1 } }}
// //           initial={{ x: -10, opacity: 0 }}
// //           transition={{ duration: 0.3 }}
// //           style={{
// //             position: "absolute",
// //             top: 24,
// //             right: 32,
// //             fontFamily: "var(--font-heading)",
// //             fontSize: "2rem",
// //             color: "rgba(245,244,240,0.6)",
// //           }}
// //         >
// //           →
// //         </motion.div>
// //       </motion.div>
// //     </Link>
// //   );
// // }

// // // ─── MAIN PAGE ────────────────────────────────────────────
// // export default function ProjectDetailPage({
// //   params,
// // }: {
// //   params: Promise<{ slug: string }>;
// // }) {
// //   const { slug } = use(params);

// //   const project = projects.find((p) => p.id === slug) as ExtendedProject;
// //   if (!project) return notFound();

// //   const idx = projects.findIndex((p) => p.id === slug);
// //   const nextProject = projects[(idx + 1) % projects.length] as ExtendedProject;

// //   const extraImages = project.images?.slice(1) ?? [];

// //   const specs = [
// //     { label: "Category", value: project.category },
// //     { label: "Location", value: project.location ?? "Kerala, India" },
// //     { label: "Year", value: project.year ?? "2024" },
// //     { label: "Area", value: project.area ?? "—" },
// //   ];

// //   return (
// //     <main style={{ backgroundColor: "#f5f4f0", color: "#0a0a0a" }}>
// //       {/* Hero */}
// //       <HeroImage src={project.image} alt={project.title} />

// //       {/* ── Project Title + Meta ── */}
// //       <section
// //         data-theme="light"
// //         style={{
// //           padding: "clamp(36px, 6vw, 64px) clamp(24px, 5vw, 72px)",
// //           maxWidth: 1280,
// //           margin: "0 auto",
// //         }}
// //       >
// //         <div
// //           style={{
// //             display: "grid",
// //             gridTemplateColumns: "1fr auto",
// //             gap: 32,
// //             alignItems: "start",
// //             flexWrap: "wrap",
// //           }}
// //         >
// //           {/* Left: title */}
// //           <div>
// //             <motion.p
// //               initial={{ opacity: 0, y: 12 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.6 }}
// //               style={{
// //                 fontFamily: "'DM Mono', monospace",
// //                 fontSize: "0.58rem",
// //                 letterSpacing: "0.28em",
// //                 textTransform: "uppercase",
// //                 color: "rgba(10,10,10,0.3)",
// //                 marginBottom: 10,
// //               }}
// //             >
// //               {project.category}
// //             </motion.p>

// //             <motion.h1
// //               initial={{ opacity: 0, y: 32 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 1, ease: EXPO, delay: 0.1 }}
// //               style={{
// //                 fontFamily: "var(--font-heading)",
// //                 fontSize: "clamp(2.2rem, 5.5vw, 5rem)",
// //                 letterSpacing: "-0.04em",
// //                 lineHeight: 1.0,
// //                 color: "#0a0a0a",
// //                 fontWeight: 400,
// //               }}
// //             >
// //               {project.title}
// //             </motion.h1>
// //           </div>

// //           {/* Right: specs */}
// //           <motion.div
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             transition={{ duration: 0.8, delay: 0.3 }}
// //             style={{
// //               display: "grid",
// //               gridTemplateColumns: "1fr 1fr",
// //               gap: "16px 32px",
// //               paddingTop: 8,
// //               minWidth: 240,
// //             }}
// //           >
// //             {specs.map((s) => (
// //               <div key={s.label}>
// //                 <p
// //                   style={{
// //                     fontFamily: "'DM Mono', monospace",
// //                     fontSize: "0.54rem",
// //                     letterSpacing: "0.24em",
// //                     textTransform: "uppercase",
// //                     color: "rgba(10,10,10,0.3)",
// //                     marginBottom: 6,
// //                   }}
// //                 >
// //                   {s.label}
// //                 </p>
// //                 <p
// //                   style={{
// //                     fontFamily: "var(--font-body)",
// //                     fontSize: "0.88rem",
// //                     color: "#0a0a0a",
// //                   }}
// //                 >
// //                   {s.value}
// //                 </p>
// //               </div>
// //             ))}
// //           </motion.div>
// //         </div>

// //         {/* Divider */}
// //         <motion.div
// //           initial={{ scaleX: 0 }}
// //           animate={{ scaleX: 1 }}
// //           transition={{ duration: 1, ease: EXPO, delay: 0.3 }}
// //           style={{
// //             height: 1,
// //             backgroundColor: "rgba(10,10,10,0.1)",
// //             marginTop: 28,
// //             transformOrigin: "left",
// //           }}
// //         />
// //       </section>

// //       {/* ── Description ── */}
// //       <section
// //         data-theme="light"
// //         style={{
// //           padding: "0 clamp(24px, 5vw, 72px) clamp(48px, 6vw, 72px)",
// //           maxWidth: 1280,
// //           margin: "0 auto",
// //         }}
// //       >
// //         <div
// //           style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}
// //         >
// //           <motion.p
// //             initial={{ opacity: 0, y: 24 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: 0.9, ease: EXPO }}
// //             style={{
// //               fontFamily: "var(--font-body)",
// //              fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)",
// //               lineHeight: 1.85,
// //               color: "rgba(10,10,10,0.55)",
// //             }}
// //           >
// //             {project.description ??
// //               "A premium interior project crafted with spatial harmony and emotional depth. Every detail was considered to create an environment that resonates with its inhabitants."}
// //           </motion.p>

// //           {project.quote && (
// //             <motion.div
// //               initial={{ opacity: 0, x: 24 }}
// //               whileInView={{ opacity: 1, x: 0 }}
// //               viewport={{ once: true }}
// //               transition={{ duration: 0.9, ease: EXPO, delay: 0.15 }}
// //               style={{
// //                 borderLeft: "2px solid rgba(10,10,10,0.15)",
// //                 paddingLeft: 20,
// //                 alignSelf: "center",
// //               }}
// //             >
// //               <p
// //                 style={{
// //                   fontFamily: "var(--font-heading)",
// //                   fontSize: "clamp(1.1rem, 1.8vw, 1.4rem)",
// //                   letterSpacing: "-0.02em",
// //                   fontStyle: "italic",
// //                   color: "rgba(10,10,10,0.55)",
// //                   lineHeight: 1.5,
// //                 }}
// //               >
// //                 "{project.quote}"
// //               </p>
// //             </motion.div>
// //           )}
// //         </div>
// //       </section>

// //       {/* ── Image Gallery ── */}
// //       {extraImages.length > 0 && (
// //         <section
// //           data-theme="light"
// //           style={{
// //             padding: "0 clamp(24px, 5vw, 72px) clamp(48px, 6vw, 72px)",
// //             maxWidth: 1280,
// //             margin: "0 auto",
// //             display: "flex",
// //             flexDirection: "column",
// //             gap: "clamp(16px, 2.5vw, 28px)",
// //           }}
// //         >
// //           {extraImages.map((img, i) => (
// //             <DetailImage
// //               key={i}
// //               src={img}
// //               alt={`${project.title} — ${i + 2}`}
// //               index={i}
// //             />
// //           ))}
// //         </section>
// //       )}

// //       {/* ── Back link ── */}
// //       <div
// //         style={{
// //            padding: "24px clamp(24px, 5vw, 72px) 48px",
// //           maxWidth: 1280,
// //           margin: "0 auto",
// //         }}
// //       >
// //         <Link
// //           href="/work"
// //           style={{
// //             display: "inline-flex",
// //             alignItems: "center",
// //             gap: 10,
// //             fontFamily: "'DM Mono', monospace",
// //             fontSize: "0.6rem",
// //             letterSpacing: "0.22em",
// //             textTransform: "uppercase",
// //             color: "rgba(10,10,10,0.4)",
// //             cursor: "none",
// //             transition: "color 0.25s ease",
// //           }}
// //         >
// //           ← All Projects
// //         </Link>
// //       </div>

// //       {/* ── Next project ── */}
// //       <NextProject project={nextProject} />
// //     </main>
// //   );
// // }






// "use client";

// import { useRef, use, useState } from "react";
// import {
//   motion,
//   useInView,
//   useScroll,
//   useTransform,
//   AnimatePresence,
// } from "framer-motion";
// import { notFound } from "next/navigation";
// import Link from "next/link";
// import Image from "next/image";
// import { projects } from "@/data/projects";

// const EXPO = [0.16, 1, 0.3, 1] as const;
// const EASE = [0.25, 0.1, 0.25, 1] as const;

// type ExtendedProject = (typeof projects)[number] & {
//   images?: string[];
//   location?: string;
//   year?: string;
//   quote?: string;
//   description?: string;
//   area?: string;
//   client?: string;
// };

// // ─── Utility: scroll-reveal wrapper ──────────────────────
// function Reveal({
//   children,
//   delay = 0,
//   y = 40,
//   className,
// }: {
//   children: React.ReactNode;
//   delay?: number;
//   y?: number;
//   className?: string;
// }) {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: "-60px" });
//   return (
//     <motion.div
//       ref={ref}
//       className={className}
//       initial={{ opacity: 0, y }}
//       animate={inView ? { opacity: 1, y: 0 } : {}}
//       transition={{ duration: 1.0, delay, ease: EXPO }}
//     >
//       {children}
//     </motion.div>
//   );
// }

// // ─── Parallax Hero ────────────────────────────────────────
// function HeroSection({
//   src,
//   title,
//   category,
//   index,
//   total,
// }: {
//   src: string;
//   title: string;
//   category: string;
//   index: number;
//   total: number;
// }) {
//   const ref = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end start"],
//   });
//   const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
//   const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

//   return (
//     <div
//       ref={ref}
//       style={{ position: "relative", height: "100svh", overflow: "hidden" }}
//     >
//       {/* Parallax image */}
//       <motion.div
//         style={{ position: "absolute", inset: "-15% 0", y }}
//       >
//         <motion.div
//           initial={{ scale: 1.12 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 2.2, ease: EXPO }}
//           style={{ width: "100%", height: "100%", position: "relative" }}
//         >
//           <Image
//             src={src}
//             alt={title}
//             fill
//             priority
//             style={{ objectFit: "cover" }}
//           />
//         </motion.div>
//       </motion.div>

//       {/* Deep gradient overlay */}
//       <div
//         style={{
//           position: "absolute",
//           inset: 0,
//           background:
//             "linear-gradient(160deg, rgba(10,10,10,0.55) 0%, rgba(10,10,10,0.15) 50%, rgba(10,10,10,0.7) 100%)",
//         }}
//       />

//       {/* Top bar */}
//       <motion.div
//         initial={{ opacity: 0, y: -12 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: 0.4, ease: EXPO }}
//         style={{
//           position: "absolute",
//           top: "clamp(20px,3vw,36px)",
//           left: "clamp(24px,5vw,72px)",
//           right: "clamp(24px,5vw,72px)",
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           zIndex: 10,
//         }}
//       >
//         <Link
//           href="/work"
//           style={{
//             fontFamily: "'DM Mono', monospace",
//             fontSize: "0.54rem",
//             letterSpacing: "0.28em",
//             textTransform: "uppercase",
//             color: "rgba(245,244,240,0.55)",
//             textDecoration: "none",
//           }}
//         >
//           ← Work
//         </Link>
//         <span
//           style={{
//             fontFamily: "'DM Mono', monospace",
//             fontSize: "0.54rem",
//             letterSpacing: "0.28em",
//             textTransform: "uppercase",
//             color: "rgba(245,244,240,0.35)",
//           }}
//         >
//           {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
//         </span>
//       </motion.div>

//       {/* Bottom hero content */}
//       <motion.div
//         style={{ opacity }}
//         className="hero-bottom-content"
//       >
//         {/* Category tag */}
//         <motion.div
//           initial={{ opacity: 0, x: -16 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, delay: 0.7, ease: EXPO }}
//           style={{
//             display: "inline-flex",
//             alignItems: "center",
//             gap: 10,
//             marginBottom: 20,
//           }}
//         >
//           <div
//             style={{
//               width: 28,
//               height: 1,
//               backgroundColor: "rgba(245,244,240,0.5)",
//             }}
//           />
//           <span
//             style={{
//               fontFamily: "'DM Mono', monospace",
//               fontSize: "0.54rem",
//               letterSpacing: "0.32em",
//               textTransform: "uppercase",
//               color: "rgba(245,244,240,0.6)",
//             }}
//           >
//             {category}
//           </span>
//         </motion.div>

//         {/* Title — letter by letter */}
//         <div style={{ overflow: "hidden" }}>
//           <motion.h1
//             initial={{ y: "110%" }}
//             animate={{ y: "0%" }}
//             transition={{ duration: 1.2, delay: 0.5, ease: EXPO }}
//             className="hero-title"
//           >
//             {title}
//           </motion.h1>
//         </div>

//         {/* Scroll cue */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1.6, duration: 1 }}
//           style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 32 }}
//         >
//           <motion.div
//             animate={{ scaleY: [0, 1, 0] }}
//             transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
//             style={{
//               width: 1,
//               height: 36,
//               backgroundColor: "rgba(245,244,240,0.4)",
//               transformOrigin: "top",
//             }}
//           />
//           <span
//             style={{
//               fontFamily: "'DM Mono', monospace",
//               fontSize: "0.46rem",
//               letterSpacing: "0.3em",
//               textTransform: "uppercase",
//               color: "rgba(245,244,240,0.3)",
//             }}
//           >
//             Scroll to explore
//           </span>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// }

// // ─── Full-Width Image Block ───────────────────────────────
// function FullImage({
//   src,
//   alt,
//   aspectRatio = "16/9",
//   caption,
// }: {
//   src: string;
//   alt: string;
//   aspectRatio?: string;
//   caption?: string;
// }) {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: "-40px" });

//   return (
//     <div ref={ref}>
//       <motion.div
//         initial={{ clipPath: "inset(100% 0 0 0)" }}
//         animate={inView ? { clipPath: "inset(0% 0 0 0)" } : {}}
//         transition={{ duration: 1.2, ease: EXPO }}
//         style={{ position: "relative", aspectRatio, overflow: "hidden" }}
//       >
//         <motion.div
//           initial={{ scale: 1.08 }}
//           animate={inView ? { scale: 1 } : {}}
//           transition={{ duration: 1.6, ease: EXPO }}
//           style={{ position: "absolute", inset: 0 }}
//         >
//           <Image src={src} alt={alt} fill style={{ objectFit: "cover" }} />
//         </motion.div>
//       </motion.div>
//       {caption && (
//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={inView ? { opacity: 1 } : {}}
//           transition={{ duration: 0.7, delay: 0.6 }}
//           style={{
//             fontFamily: "'DM Mono', monospace",
//             fontSize: "0.5rem",
//             letterSpacing: "0.24em",
//             textTransform: "uppercase",
//             color: "rgba(10,10,10,0.28)",
//             marginTop: 12,
//             textAlign: "right",
//           }}
//         >
//           {caption}
//         </motion.p>
//       )}
//     </div>
//   );
// }

// // ─── Two-Image Row ────────────────────────────────────────
// function DualImage({
//   left,
//   right,
//   leftAlt,
//   rightAlt,
//   flip = false,
// }: {
//   left: string;
//   right: string;
//   leftAlt: string;
//   rightAlt: string;
//   flip?: boolean;
// }) {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: "-60px" });

//   const sizes = flip ? ["40%", "60%"] : ["60%", "40%"];

//   return (
//     <div
//       ref={ref}
//       className="dual-image-row"
//       style={{ display: "flex", gap: "clamp(12px,2vw,24px)", alignItems: "stretch" }}
//     >
//       {[
//         { src: left, alt: leftAlt, w: sizes[0], ratio: "3/4", delay: 0 },
//         { src: right, alt: rightAlt, w: sizes[1], ratio: "4/5", delay: 0.1 },
//       ].map((img, i) => (
//         <motion.div
//           key={i}
//           initial={{ clipPath: "inset(100% 0 0 0)", opacity: 0 }}
//           animate={inView ? { clipPath: "inset(0% 0 0 0)", opacity: 1 } : {}}
//           transition={{ duration: 1.15, delay: img.delay, ease: EXPO }}
//           style={{ flex: `0 0 ${img.w}`, position: "relative", aspectRatio: img.ratio, overflow: "hidden" }}
//         >
//           <motion.div
//             initial={{ scale: 1.1 }}
//             animate={inView ? { scale: 1 } : {}}
//             transition={{ duration: 1.6, delay: img.delay, ease: EXPO }}
//             style={{ position: "absolute", inset: 0 }}
//           >
//             <Image src={img.src} alt={img.alt} fill style={{ objectFit: "cover" }} />
//           </motion.div>
//         </motion.div>
//       ))}
//     </div>
//   );
// }

// // ─── Quote Block ──────────────────────────────────────────
// function QuoteBlock({ quote }: { quote: string }) {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: "-80px" });

//   return (
//     <div ref={ref} style={{ textAlign: "center", maxWidth: 640, margin: "0 auto" }}>
//       <motion.div
//         initial={{ scaleX: 0 }}
//         animate={inView ? { scaleX: 1 } : {}}
//         transition={{ duration: 0.9, ease: EXPO }}
//         style={{
//           height: 1,
//           backgroundColor: "rgba(10,10,10,0.1)",
//           transformOrigin: "center",
//           marginBottom: 32,
//         }}
//       />
//       <motion.p
//         initial={{ opacity: 0, y: 20 }}
//         animate={inView ? { opacity: 1, y: 0 } : {}}
//         transition={{ duration: 1, delay: 0.2, ease: EXPO }}
//         style={{
//           fontFamily: "var(--font-heading)",
//           fontSize: "clamp(1.4rem, 2.8vw, 2.2rem)",
//           letterSpacing: "-0.03em",
//           fontStyle: "italic",
//           color: "rgba(10,10,10,0.55)",
//           lineHeight: 1.4,
//         }}
//       >
//         "{quote}"
//       </motion.p>
//       <motion.div
//         initial={{ scaleX: 0 }}
//         animate={inView ? { scaleX: 1 } : {}}
//         transition={{ duration: 0.9, delay: 0.5, ease: EXPO }}
//         style={{
//           height: 1,
//           backgroundColor: "rgba(10,10,10,0.1)",
//           transformOrigin: "center",
//           marginTop: 32,
//         }}
//       />
//     </div>
//   );
// }

// // ─── Staggered 3-Image Grid ───────────────────────────────
// function TrioGrid({ imgs, alts }: { imgs: string[]; alts: string[] }) {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: "-40px" });

//   const configs = [
//     { gridArea: "1/1/3/2", ratio: "3/4" },
//     { gridArea: "1/2/2/3", ratio: "16/10" },
//     { gridArea: "2/2/3/3", ratio: "16/10" },
//   ];

//   return (
//     <div
//       ref={ref}
//       style={{
//         display: "grid",
//         gridTemplateColumns: "1fr 1fr",
//         gridTemplateRows: "auto auto",
//         gap: "clamp(10px,1.5vw,20px)",
//       }}
//     >
//       {imgs.slice(0, 3).map((src, i) => (
//         <motion.div
//           key={i}
//           initial={{ opacity: 0, y: 30 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.95, delay: i * 0.12, ease: EXPO }}
//           style={{
//             gridArea: configs[i].gridArea,
//             position: "relative",
//             aspectRatio: configs[i].ratio,
//             overflow: "hidden",
//           }}
//         >
//           <motion.div
//             initial={{ scale: 1.08 }}
//             animate={inView ? { scale: 1 } : {}}
//             transition={{ duration: 1.5, delay: i * 0.12, ease: EXPO }}
//             style={{ position: "absolute", inset: 0 }}
//           >
//             <Image src={src} alt={alts[i]} fill style={{ objectFit: "cover" }} />
//           </motion.div>
//         </motion.div>
//       ))}
//     </div>
//   );
// }

// // ─── Specs Table ─────────────────────────────────────────
// function SpecsRow({ specs }: { specs: { label: string; value: string }[] }) {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: "-60px" });

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0 }}
//       animate={inView ? { opacity: 1 } : {}}
//       transition={{ duration: 0.8 }}
//       className="specs-row"
//     >
//       {specs.map((s, i) => (
//         <motion.div
//           key={s.label}
//           initial={{ opacity: 0, y: 16 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.7, delay: i * 0.08, ease: EXPO }}
//           className="spec-item"
//         >
//           <p className="spec-label">{s.label}</p>
//           <p className="spec-value">{s.value}</p>
//         </motion.div>
//       ))}
//     </motion.div>
//   );
// }

// // ─── Next Project ─────────────────────────────────────────
// function NextProject({ project }: { project: ExtendedProject }) {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: "-60px" });
//   const [hovered, setHovered] = useState(false);

//   return (
//     <Link href={`/work/${project.id}`} style={{ display: "block" }}>
//       <motion.div
//         ref={ref}
//         initial={{ opacity: 0 }}
//         animate={inView ? { opacity: 1 } : {}}
//         transition={{ duration: 0.8 }}
//         onHoverStart={() => setHovered(true)}
//         onHoverEnd={() => setHovered(false)}
//         style={{ position: "relative", height: "clamp(280px, 45vh, 520px)", overflow: "hidden" }}
//       >
//         <motion.div
//           animate={{ scale: hovered ? 1.05 : 1 }}
//           transition={{ duration: 0.8, ease: EXPO }}
//           style={{ position: "absolute", inset: 0 }}
//         >
//           <Image
//             src={project.image}
//             alt={project.title}
//             fill
//             style={{ objectFit: "cover" }}
//           />
//         </motion.div>

//         <div
//           style={{
//             position: "absolute",
//             inset: 0,
//             background: "linear-gradient(to top, rgba(10,10,10,0.8) 0%, rgba(10,10,10,0.25) 60%, transparent 100%)",
//           }}
//         />

//         <div style={{ position: "absolute", bottom: "clamp(24px,4vw,48px)", left: "clamp(24px,5vw,72px)", right: "clamp(24px,5vw,72px)" }}>
//           <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
//             <div>
//               <motion.p
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={inView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ duration: 0.6, delay: 0.2 }}
//                 style={{
//                   fontFamily: "'DM Mono', monospace",
//                   fontSize: "0.54rem",
//                   letterSpacing: "0.3em",
//                   textTransform: "uppercase",
//                   color: "rgba(245,244,240,0.4)",
//                   marginBottom: 12,
//                 }}
//               >
//                 Next Project
//               </motion.p>
//               <motion.h3
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={inView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ duration: 0.9, delay: 0.3, ease: EXPO }}
//                 style={{
//                   fontFamily: "var(--font-heading)",
//                   fontSize: "clamp(2rem, 5vw, 4.5rem)",
//                   letterSpacing: "-0.04em",
//                   color: "#f5f4f0",
//                   fontWeight: 400,
//                   lineHeight: 1,
//                 }}
//               >
//                 {project.title}
//               </motion.h3>
//             </div>

//             <motion.div
//               animate={{ x: hovered ? 0 : -8, opacity: hovered ? 1 : 0 }}
//               transition={{ duration: 0.35, ease: EASE }}
//               style={{
//                 fontFamily: "var(--font-heading)",
//                 fontSize: "clamp(2rem,4vw,3.5rem)",
//                 color: "rgba(245,244,240,0.7)",
//                 lineHeight: 1,
//                 paddingBottom: 4,
//               }}
//             >
//               →
//             </motion.div>
//           </div>
//         </div>
//       </motion.div>
//     </Link>
//   );
// }

// // ─── MAIN PAGE ────────────────────────────────────────────
// export default function ProjectDetailPage({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) {
//   const { slug } = use(params);
//   const project = projects.find((p) => p.id === slug) as ExtendedProject;
//   if (!project) return notFound();

//   const idx = projects.findIndex((p) => p.id === slug);
//   const nextProject = projects[(idx + 1) % projects.length] as ExtendedProject;

//   // All 10 gallery images (project.images should have 10 entries: main + 1–10)
//   const allImages = project.images ?? [];
//   // heroSrc: first image or project.image
//   const heroSrc = project.image; // main.png mapped here in projects data
//   // Gallery: remaining images 1-10
//   const gallery = allImages.length > 0 ? allImages : [
//     "/images/1.png", "/images/2.png", "/images/3.png", "/images/4.png",
//     "/images/5.png", "/images/6.png", "/images/7.png", "/images/8.png",
//     "/images/9.png", "/images/10.png",
//   ];

//   const specs = [
//     { label: "Category", value: project.category },
//     { label: "Location", value: project.location ?? "Kerala, India" },
//     { label: "Year", value: project.year ?? "2024" },
//     { label: "Area", value: project.area ?? "—" },
//     { label: "Client", value: project.client ?? "Private Residence" },
//     { label: "Status", value: "Completed" },
//   ];

//   const description = project.description ??
//     "A premium interior project crafted with spatial harmony and emotional depth. Every detail was considered to create an environment that resonates with its inhabitants—where silence, weight, and light guide each surface and form. The project unfolds as a continuous spatial journey, revealing itself gradually through movement and perception.";

//   const quote = project.quote ?? "Space is not a container but a living field where architecture, intelligence, and perception become one.";

//   return (
//     <>
//       <style>{`
//         /* ─ Hero bottom content ─ */
//         .hero-bottom-content {
//           position: absolute;
//           bottom: clamp(32px, 6vw, 64px);
//           left: clamp(24px, 5vw, 72px);
//           right: clamp(24px, 5vw, 72px);
//           z-index: 10;
//         }
//         .hero-title {
//           font-family: var(--font-heading);
//           font-size: clamp(3rem, 9vw, 9.5rem);
//           font-weight: 400;
//           letter-spacing: -0.05em;
//           line-height: 0.95;
//           color: #f5f4f0;
//           margin: 0;
//         }

//         /* ─ Wrapper ─ */
//         .pd-outer {
//           background-color: #f5f4f0;
//           color: #0a0a0a;
//         }
//         .pd-container {
//           max-width: 1320px;
//           margin: 0 auto;
//           padding-left: clamp(24px, 5vw, 72px);
//           padding-right: clamp(24px, 5vw, 72px);
//         }

//         /* ─ Section spacing ─ */
//         .pd-section {
//           padding-top: clamp(48px, 7vw, 96px);
//           padding-bottom: clamp(48px, 7vw, 96px);
//         }
//         .pd-section-sm {
//           padding-top: clamp(32px, 4vw, 56px);
//           padding-bottom: clamp(32px, 4vw, 56px);
//         }

//         /* ─ Title row ─ */
//         .title-row {
//           display: grid;
//           grid-template-columns: 1fr auto;
//           gap: clamp(24px, 4vw, 56px);
//           align-items: end;
//           padding-bottom: clamp(28px, 3vw, 44px);
//           border-bottom: 1px solid rgba(10,10,10,0.1);
//         }
//         @media (max-width: 640px) {
//           .title-row {
//             grid-template-columns: 1fr;
//           }
//         }

//         /* ─ Specs row ─ */
//         .specs-row {
//           display: grid;
//           grid-template-columns: repeat(6, 1fr);
//           gap: 0;
//           border-top: 1px solid rgba(10,10,10,0.08);
//           border-bottom: 1px solid rgba(10,10,10,0.08);
//         }
//         .spec-item {
//           padding: clamp(16px, 2.5vw, 28px) clamp(12px, 2vw, 24px);
//           border-right: 1px solid rgba(10,10,10,0.08);
//         }
//         .spec-item:first-child { padding-left: 0; }
//         .spec-item:last-child { border-right: none; }
//         .spec-label {
//           font-family: 'DM Mono', monospace;
//           font-size: 0.52rem;
//           letter-spacing: 0.26em;
//           text-transform: uppercase;
//           color: rgba(10,10,10,0.3);
//           margin-bottom: 8px;
//         }
//         .spec-value {
//           font-family: var(--font-body);
//           font-size: clamp(0.8rem, 1vw, 0.92rem);
//           color: #0a0a0a;
//           line-height: 1.4;
//         }
//         @media (max-width: 900px) {
//           .specs-row {
//             grid-template-columns: repeat(3, 1fr);
//           }
//           .spec-item:nth-child(3) { border-right: none; }
//         }
//         @media (max-width: 560px) {
//           .specs-row {
//             grid-template-columns: repeat(2, 1fr);
//           }
//           .spec-item:nth-child(2n) { border-right: none; }
//         }

//         /* ─ Description grid ─ */
//         .desc-grid {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: clamp(32px, 5vw, 80px);
//           align-items: start;
//         }
//         @media (max-width: 768px) {
//           .desc-grid {
//             grid-template-columns: 1fr;
//             gap: 24px;
//           }
//         }

//         /* ─ Dual image responsive ─ */
//         .dual-image-row {
//           flex-direction: row;
//         }
//         @media (max-width: 600px) {
//           .dual-image-row {
//             flex-direction: column !important;
//           }
//           .dual-image-row > div {
//             width: 100% !important;
//             flex: 0 0 100% !important;
//           }
//         }

//         /* ─ Counter strip ─ */
//         .img-counter {
//           display: flex;
//           align-items: center;
//           gap: 16px;
//           padding: clamp(16px, 2.5vw, 28px) 0;
//         }
//         .img-counter-num {
//           font-family: 'DM Mono', monospace;
//           font-size: 0.52rem;
//           letter-spacing: 0.26em;
//           color: rgba(10,10,10,0.25);
//         }
//         .img-counter-line {
//           flex: 1;
//           height: 1px;
//           background: rgba(10,10,10,0.08);
//         }

//         /* ─ Section label ─ */
//         .section-label {
//           display: flex;
//           align-items: center;
//           gap: 16px;
//           margin-bottom: clamp(28px, 4vw, 48px);
//         }
//         .section-label span {
//           font-family: 'DM Mono', monospace;
//           font-size: 0.52rem;
//           letter-spacing: 0.3em;
//           text-transform: uppercase;
//           color: rgba(10,10,10,0.3);
//           white-space: nowrap;
//         }
//         .section-label-line {
//           flex: 1;
//           height: 1px;
//           background: rgba(10,10,10,0.08);
//         }

//         /* ─ Back link strip ─ */
//         .back-strip {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           padding: clamp(20px, 3vw, 36px) 0;
//           border-top: 1px solid rgba(10,10,10,0.08);
//           margin-top: clamp(32px, 5vw, 64px);
//         }
//       `}</style>

//       <main className="pd-outer">

//         {/* ══ HERO ══════════════════════════════════════════ */}
//         <HeroSection
//           src={heroSrc}
//           title={project.title}
//           category={project.category}
//           index={idx}
//           total={projects.length}
//         />

//         {/* ══ TITLE + SPECS ═════════════════════════════════ */}
//         <div className="pd-container">
//           <div className="pd-section-sm">

//             {/* Title row */}
//             <Reveal>
//               <div className="title-row">
//                 <div>
//                   <p style={{
//                     fontFamily: "'DM Mono', monospace",
//                     fontSize: "0.54rem",
//                     letterSpacing: "0.3em",
//                     textTransform: "uppercase",
//                     color: "rgba(10,10,10,0.3)",
//                     marginBottom: 12,
//                   }}>
//                     {project.category}
//                   </p>
//                   <h2 style={{
//                     fontFamily: "var(--font-heading)",
//                     fontSize: "clamp(2rem, 5vw, 4.5rem)",
//                     letterSpacing: "-0.04em",
//                     lineHeight: 1.0,
//                     color: "#0a0a0a",
//                     fontWeight: 400,
//                     margin: 0,
//                   }}>
//                     {project.title}
//                   </h2>
//                 </div>

//                 {/* Teal culture mark */}
//                 <div style={{ textAlign: "right", paddingBottom: 8 }}>
//                   <p style={{
//                     fontFamily: "'DM Mono', monospace",
//                     fontSize: "0.48rem",
//                     letterSpacing: "0.28em",
//                     textTransform: "uppercase",
//                     color: "rgba(10,10,10,0.2)",
//                   }}>
//                     TEAL CULTURE
//                   </p>
//                   <p style={{
//                     fontFamily: "var(--font-heading)",
//                     fontSize: "clamp(1.2rem, 2vw, 1.8rem)",
//                     letterSpacing: "-0.03em",
//                     color: "rgba(10,10,10,0.12)",
//                     fontStyle: "italic",
//                     marginTop: 4,
//                   }}>
//                     Studio
//                   </p>
//                 </div>
//               </div>
//             </Reveal>

//             {/* Specs */}
//             <div style={{ marginTop: 0 }}>
//               <SpecsRow specs={specs} />
//             </div>
//           </div>
//         </div>

//         {/* ══ DESCRIPTION ═══════════════════════════════════ */}
//         <div className="pd-container">
//           <div className="pd-section-sm">
//             <Reveal>
//               <div className="section-label">
//                 <span>Project Overview</span>
//                 <div className="section-label-line" />
//               </div>
//             </Reveal>

//             <div className="desc-grid">
//               <Reveal delay={0.05}>
//                 <p style={{
//                   fontFamily: "var(--font-body)",
//                   fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)",
//                   lineHeight: 1.9,
//                   color: "rgba(10,10,10,0.52)",
//                   letterSpacing: "0.01em",
//                 }}>
//                   {description}
//                 </p>
//               </Reveal>

//               <Reveal delay={0.15}>
//                 <div style={{
//                   borderLeft: "2px solid rgba(10,10,10,0.12)",
//                   paddingLeft: "clamp(20px,3vw,36px)",
//                 }}>
//                   <p style={{
//                     fontFamily: "var(--font-heading)",
//                     fontSize: "clamp(1rem, 1.6vw, 1.25rem)",
//                     letterSpacing: "-0.02em",
//                     fontStyle: "italic",
//                     color: "rgba(10,10,10,0.45)",
//                     lineHeight: 1.6,
//                     marginBottom: 24,
//                   }}>
//                     Light and silence. Material and restraint. Each room a study in what can be left unsaid.
//                   </p>
//                   <p style={{
//                     fontFamily: "'DM Mono', monospace",
//                     fontSize: "0.52rem",
//                     letterSpacing: "0.24em",
//                     textTransform: "uppercase",
//                     color: "rgba(10,10,10,0.25)",
//                   }}>
//                     — Teal Culture Studio
//                   </p>
//                 </div>
//               </Reveal>
//             </div>
//           </div>
//         </div>

//         {/* ══ IMAGE 01 — Full width ═════════════════════════ */}
//         <div className="pd-container">
//           <div className="img-counter">
//             <span className="img-counter-num">01</span>
//             <div className="img-counter-line" />
//             <span className="img-counter-num">10</span>
//           </div>
//           <FullImage
//             src={gallery[0]}
//             alt={`${project.title} — 01`}
//             aspectRatio="21/10"
//             caption="Entry volume — skylights & curved joinery"
//           />
//         </div>

//         {/* ══ IMAGES 02 + 03 — Dual ═════════════════════════ */}
//         <div className="pd-container" style={{ marginTop: "clamp(16px,2.5vw,28px)" }}>
//           <DualImage
//             left={gallery[1]}
//             right={gallery[2]}
//             leftAlt={`${project.title} — 02`}
//             rightAlt={`${project.title} — 03`}
//           />
//         </div>

//         {/* ══ IMAGE 04 — Full width ═════════════════════════ */}
//         <div className="pd-container" style={{ marginTop: "clamp(16px,2.5vw,28px)" }}>
//           <FullImage
//             src={gallery[3]}
//             alt={`${project.title} — 04`}
//             aspectRatio="16/8"
//             caption="Corridor — precision woodwork & diffused ceiling light"
//           />
//         </div>

//         {/* ══ QUOTE ═════════════════════════════════════════ */}
//         <div className="pd-container pd-section">
//           <QuoteBlock quote={quote} />
//         </div>

//         {/* ══ IMAGES 05 + 06 — Duo flip ════════════════════ */}
//         <div className="pd-container">
//           <DualImage
//             left={gallery[4]}
//             right={gallery[5]}
//             leftAlt={`${project.title} — 05`}
//             rightAlt={`${project.title} — 06`}
//             flip
//           />
//         </div>

//         {/* ══ IMAGE 07 — Full width ═════════════════════════ */}
//         <div className="pd-container" style={{ marginTop: "clamp(16px,2.5vw,28px)" }}>
//           <FullImage
//             src={gallery[6]}
//             alt={`${project.title} — 07`}
//             aspectRatio="4/3"
//             caption="Master suite — terracotta marble & warm timber"
//           />
//         </div>

//         {/* ══ IMAGES 08 + 09 + (mid text) ══════════════════ */}
//         <div className="pd-container pd-section-sm">
//           <Reveal>
//             <div className="section-label">
//               <span>Material Language</span>
//               <div className="section-label-line" />
//             </div>
//           </Reveal>

//           <div style={{ marginBottom: "clamp(16px,2.5vw,28px)" }}>
//             <TrioGrid
//               imgs={[gallery[7], gallery[8], gallery[9]]}
//               alts={[
//                 `${project.title} — 08`,
//                 `${project.title} — 09`,
//                 `${project.title} — 10`,
//               ]}
//             />
//           </div>
//         </div>

//         {/* ══ BACK + CREDITS ════════════════════════════════ */}
//         <div className="pd-container">
//           <Reveal>
//             <div className="back-strip">
//               <Link
//                 href="/work"
//                 style={{
//                   display: "inline-flex",
//                   alignItems: "center",
//                   gap: 12,
//                   fontFamily: "'DM Mono', monospace",
//                   fontSize: "0.56rem",
//                   letterSpacing: "0.26em",
//                   textTransform: "uppercase",
//                   color: "rgba(10,10,10,0.38)",
//                   textDecoration: "none",
//                   transition: "color 0.25s",
//                 }}
//               >
//                 ← All Projects
//               </Link>
//               <p style={{
//                 fontFamily: "'DM Mono', monospace",
//                 fontSize: "0.5rem",
//                 letterSpacing: "0.24em",
//                 textTransform: "uppercase",
//                 color: "rgba(10,10,10,0.2)",
//               }}>
//                 Photography — TEAL CULTURE Studio
//               </p>
//             </div>
//           </Reveal>
//         </div>

//         {/* ══ NEXT PROJECT ══════════════════════════════════ */}
//         <NextProject project={nextProject} />
//       </main>
//     </>
//   );
// }




"use client";

import { useRef, use, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";

const EXPO = [0.16, 1, 0.3, 1] as const;

// Exact pixel dimensions measured from uploaded files:
// main.png  → 1024×1024  → aspectRatio "1/1"
// 1–7, 10   → 768×1376   → aspectRatio "768/1376"
// 8–9       → 960×1696   → aspectRatio "960/1696"
const R_PORTRAIT  = "768/1376";
const R_PORTRAIT2 = "960/1696";

type ExtendedProject = (typeof projects)[number] & {
  images?: string[];
  location?: string;
  year?: string;
  quote?: string;
  description?: string;
  area?: string;
  client?: string;
};

// Scroll-reveal
function Reveal({ children, delay = 0, y = 36, style }: {
  children: React.ReactNode; delay?: number; y?: number; style?: React.CSSProperties;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.div ref={ref} style={style}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.0, delay, ease: EXPO }}>
      {children}
    </motion.div>
  );
}

// Curtain image with exact aspect ratio
function CurtainImg({ src, alt, aspectRatio, delay = 0, caption, sizes = "(max-width:768px) 100vw, 50vw" }: {
  src: string; alt: string; aspectRatio: string;
  delay?: number; caption?: string; sizes?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <div ref={ref}>
      <motion.div
        initial={{ clipPath: "inset(100% 0 0 0)" }}
        animate={inView ? { clipPath: "inset(0% 0 0 0)" } : {}}
        transition={{ duration: 1.15, delay, ease: EXPO }}
        style={{ position: "relative", width: "100%", aspectRatio, overflow: "hidden" }}>
        <motion.div
          initial={{ scale: 1.1 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 1.7, delay, ease: EXPO }}
          style={{ position: "absolute", inset: 0 }}>
          <Image src={src} alt={alt} fill sizes={sizes}
            style={{ objectFit: "cover", objectPosition: "center" }} />
        </motion.div>
      </motion.div>
      {caption && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: delay + 0.55 }}
          style={{
            fontFamily: "'DM Mono', monospace", fontSize: "0.47rem",
            letterSpacing: "0.24em", textTransform: "uppercase",
            color: "rgba(10,10,10,0.24)", marginTop: 10, textAlign: "right",
          }}>
          {caption}
        </motion.p>
      )}
    </div>
  );
}

// Hero — main.png 1024x1024 square used as full-screen
function HeroSection({ src, title, category, projectIndex, total }: {
  src: string; title: string; category: string; projectIndex: number; total: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY   = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const fadeOp = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={ref} style={{ position: "relative", height: "100svh", minHeight: 560, overflow: "hidden" }}>
      <motion.div style={{ y: imgY, position: "absolute", inset: "-12% 0" }}>
        <motion.div
          initial={{ scale: 1.14 }} animate={{ scale: 1 }}
          transition={{ duration: 2.4, ease: EXPO }}
          style={{ position: "absolute", inset: 0 }}>
          {/* main.png is 1024x1024 square — objectPosition center 30% shows upper portion */}
          <Image src={src} alt={title} fill priority sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center 30%" }} />
        </motion.div>
      </motion.div>

      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(170deg, rgba(8,8,8,0.5) 0%, rgba(8,8,8,0.05) 45%, rgba(8,8,8,0.78) 100%)",
      }} />

      {/* Top bar */}
      <motion.div
        initial={{ opacity: 0, y: -14 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.5, ease: EXPO }}
        style={{
          position: "absolute", zIndex: 10,
          top: "clamp(18px,3vh,36px)",
          left: "clamp(20px,5vw,72px)", right: "clamp(20px,5vw,72px)",
          display: "flex", justifyContent: "space-between", alignItems: "center",
        }}>
        <Link href="/work" style={{
          fontFamily: "'DM Mono', monospace", fontSize: "0.52rem",
          letterSpacing: "0.28em", textTransform: "uppercase",
          color: "rgba(245,244,240,0.5)", textDecoration: "none",
        }}>← Work</Link>
        <span style={{
          fontFamily: "'DM Mono', monospace", fontSize: "0.52rem",
          letterSpacing: "0.28em", color: "rgba(245,244,240,0.3)",
        }}>
          {String(projectIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
      </motion.div>

      {/* Bottom content — fades on scroll */}
      <motion.div style={{
        opacity: fadeOp, position: "absolute", zIndex: 10,
        bottom: "clamp(28px,5vh,60px)",
        left: "clamp(20px,5vw,72px)", right: "clamp(20px,5vw,72px)",
      }}>
        <motion.div
          initial={{ opacity: 0, x: -14 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, delay: 0.75, ease: EXPO }}
          style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
          <div style={{ width: 24, height: 1, backgroundColor: "rgba(245,244,240,0.45)" }} />
          <span style={{
            fontFamily: "'DM Mono', monospace", fontSize: "0.52rem",
            letterSpacing: "0.32em", textTransform: "uppercase",
            color: "rgba(245,244,240,0.55)",
          }}>{category}</span>
        </motion.div>

        <div style={{ overflow: "hidden" }}>
          <motion.h1
            initial={{ y: "108%" }} animate={{ y: "0%" }}
            transition={{ duration: 1.25, delay: 0.55, ease: EXPO }}
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2.8rem,8.5vw,9rem)",
              fontWeight: 400, letterSpacing: "-0.05em", lineHeight: 0.93,
              color: "#f5f4f0", margin: 0,
            }}>
            {title}
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          style={{ display: "flex", alignItems: "center", gap: 14, marginTop: 28 }}>
          <motion.div
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ duration: 1.9, repeat: Infinity, ease: "easeInOut" }}
            style={{ width: 1, height: 34, backgroundColor: "rgba(245,244,240,0.38)", transformOrigin: "top" }} />
          <span style={{
            fontFamily: "'DM Mono', monospace", fontSize: "0.44rem",
            letterSpacing: "0.3em", textTransform: "uppercase",
            color: "rgba(245,244,240,0.28)",
          }}>Scroll to explore</span>
        </motion.div>
      </motion.div>
    </div>
  );
}

// Specs strip
function SpecsStrip({ specs }: { specs: { label: string; value: string }[] }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.7 }}
      className="specs-strip">
      {specs.map((s, i) => (
        <motion.div key={s.label}
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: i * 0.07, ease: EXPO }}
          style={{
            padding: "clamp(14px,2.2vw,26px) clamp(10px,1.8vw,20px)",
            borderRight: i < specs.length - 1 ? "1px solid rgba(10,10,10,0.07)" : "none",
          }}>
          <p style={{
            fontFamily: "'DM Mono', monospace", fontSize: "0.5rem",
            letterSpacing: "0.26em", textTransform: "uppercase",
            color: "rgba(10,10,10,0.28)", marginBottom: 7,
          }}>{s.label}</p>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "clamp(0.78rem,1vw,0.9rem)",
            color: "#0a0a0a", lineHeight: 1.35,
          }}>{s.value}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}

function SectionLabel({ text }: { text: string }) {
  return (
    <Reveal style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: "clamp(22px,3.5vw,42px)" }}>
      <span style={{
        fontFamily: "'DM Mono', monospace", fontSize: "0.5rem",
        letterSpacing: "0.3em", textTransform: "uppercase",
        color: "rgba(10,10,10,0.28)", whiteSpace: "nowrap",
      }}>{text}</span>
      <div style={{ flex: 1, height: 1, background: "rgba(10,10,10,0.08)" }} />
    </Reveal>
  );
}

function QuoteBlock({ quote }: { quote: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <div ref={ref} style={{ textAlign: "center", maxWidth: 680, margin: "0 auto" }}>
      <motion.div initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.9, ease: EXPO }}
        style={{ height: 1, background: "rgba(10,10,10,0.1)", transformOrigin: "center", marginBottom: 30 }} />
      <motion.p initial={{ opacity: 0, y: 22 }} animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.0, delay: 0.18, ease: EXPO }}
        style={{
          fontFamily: "var(--font-heading)", fontSize: "clamp(1.35rem,2.6vw,2.1rem)",
          letterSpacing: "-0.03em", fontStyle: "italic",
          color: "rgba(10,10,10,0.5)", lineHeight: 1.42,
        }}>"{quote}"</motion.p>
      <motion.div initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.9, delay: 0.45, ease: EXPO }}
        style={{ height: 1, background: "rgba(10,10,10,0.1)", transformOrigin: "center", marginTop: 30 }} />
    </div>
  );
}

function NextProject({ project }: { project: ExtendedProject }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [hovered, setHovered] = useState(false);
  return (
    <Link href={`/work/${project.id}`} style={{ display: "block" }}>
      <motion.div ref={ref}
        initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.8 }}
        onHoverStart={() => setHovered(true)} onHoverEnd={() => setHovered(false)}
        style={{ position: "relative", height: "clamp(260px,42vh,500px)", overflow: "hidden" }}>
        <motion.div animate={{ scale: hovered ? 1.05 : 1 }}
          transition={{ duration: 0.85, ease: EXPO }}
          style={{ position: "absolute", inset: 0 }}>
          <Image src={project.image} alt={project.title} fill style={{ objectFit: "cover" }} />
        </motion.div>
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to top, rgba(8,8,8,0.82) 0%, rgba(8,8,8,0.2) 60%, transparent 100%)",
        }} />
        <div style={{
          position: "absolute",
          bottom: "clamp(24px,4.5vw,52px)", left: "clamp(20px,5vw,72px)", right: "clamp(20px,5vw,72px)",
          display: "flex", justifyContent: "space-between", alignItems: "flex-end",
        }}>
          <div>
            <motion.p initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              style={{
                fontFamily: "'DM Mono', monospace", fontSize: "0.52rem",
                letterSpacing: "0.3em", textTransform: "uppercase",
                color: "rgba(245,244,240,0.38)", marginBottom: 10,
              }}>Next Project</motion.p>
            <motion.h3 initial={{ opacity: 0, y: 18 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.28, duration: 0.9, ease: EXPO }}
              style={{
                fontFamily: "var(--font-heading)", fontSize: "clamp(2rem,5vw,4.5rem)",
                letterSpacing: "-0.045em", color: "#f5f4f0",
                fontWeight: 400, lineHeight: 1, margin: 0,
              }}>{project.title}</motion.h3>
          </div>
          <motion.div animate={{ x: hovered ? 0 : -10, opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            style={{
              fontFamily: "var(--font-heading)", fontSize: "clamp(2rem,4vw,3.5rem)",
              color: "rgba(245,244,240,0.65)", lineHeight: 1, paddingBottom: 4,
            }}>→</motion.div>
        </div>
      </motion.div>
    </Link>
  );
}

// MAIN PAGE
export default function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const project = projects.find((p) => p.id === slug) as ExtendedProject;
  if (!project) return notFound();

  const idx = projects.findIndex((p) => p.id === slug);
  const nextProject = projects[(idx + 1) % projects.length] as ExtendedProject;

  const gallery = project.images?.length
    ? project.images
    : Array.from({ length: 10 }, (_, i) => `/images/${i + 1}.png`);

  const specs = [
    { label: "Category", value: project.category },
    { label: "Location", value: project.location ?? "Kerala, India" },
    { label: "Year",     value: project.year ?? "2024" },
    { label: "Area",     value: project.area ?? "—" },
    { label: "Client",   value: project.client ?? "Private Residence" },
    { label: "Status",   value: "Completed" },
  ];

  const description = project.description ??
    "A premium interior project crafted with spatial harmony and emotional depth. Every detail was considered to create an environment that resonates with its inhabitants — where silence, weight, and light guide each surface and form. The project unfolds as a continuous spatial journey, revealing itself gradually through movement and perception.";

  const quote = project.quote ??
    "Space is not a container but a living field where architecture, intelligence, and perception become one.";

  const GAP = "clamp(10px,1.6vw,20px)";

  return (
    <>
      <style>{`
        .pd-wrap { background-color: #f5f4f0; color: #0a0a0a; }
        .pd-cx { max-width: 1320px; margin: 0 auto; padding-left: clamp(20px,5vw,72px); padding-right: clamp(20px,5vw,72px); }
        .pd-py  { padding-top: clamp(40px,6vw,88px); padding-bottom: clamp(40px,6vw,88px); }
        .pd-pys { padding-top: clamp(22px,3.8vw,52px); padding-bottom: clamp(22px,3.8vw,52px); }

        /* Specs — 6 col → 3 → 2 */
        .specs-strip {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          border-top: 1px solid rgba(10,10,10,0.08);
          border-bottom: 1px solid rgba(10,10,10,0.08);
        }
        @media (max-width: 900px) { .specs-strip { grid-template-columns: repeat(3,1fr); } }
        @media (max-width: 520px)  { .specs-strip { grid-template-columns: repeat(2,1fr); } }

        /* Title row */
        .title-row {
          display: grid; grid-template-columns: 1fr auto;
          gap: clamp(20px,4vw,56px); align-items: end;
          padding-bottom: clamp(22px,3vw,38px);
          border-bottom: 1px solid rgba(10,10,10,0.09);
        }
        @media (max-width: 560px) { .title-row { grid-template-columns: 1fr; } }

        /* Description grid */
        .desc-grid { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(28px,5vw,80px); align-items: start; }
        @media (max-width: 720px) { .desc-grid { grid-template-columns: 1fr; gap: 22px; } }

        /* Gallery layouts — all portrait images */

        /* 3-col trio (imgs 1-3, each 768/1376) */
        .g-trio { display: grid; grid-template-columns: repeat(3,1fr); gap: ${GAP}; }
        @media (max-width: 640px) { .g-trio { grid-template-columns: 1fr; } }

        /* 2-col duo (imgs 5-6, each 768/1376) */
        .g-duo { display: grid; grid-template-columns: 1fr 1fr; gap: ${GAP}; }
        @media (max-width: 560px) { .g-duo { grid-template-columns: 1fr; } }

        /* 3-col final: imgs 8(960/1696) + 9(960/1696) + 10(768/1376), align-items:start so each sits at top */
        .g-final { display: grid; grid-template-columns: repeat(3,1fr); gap: ${GAP}; align-items: start; }
        @media (max-width: 640px) { .g-final { grid-template-columns: 1fr; } }

        /* Centered narrow (img 7) */
        .g-center { max-width: 600px; margin: 0 auto; }

        /* Back strip */
        .back-strip {
          display: flex; align-items: center; justify-content: space-between;
          padding: clamp(16px,3vw,30px) 0;
          border-top: 1px solid rgba(10,10,10,0.08);
          margin-top: clamp(24px,4vw,52px);
        }
        @media (max-width: 480px) { .back-strip { flex-direction: column; align-items: flex-start; gap: 10px; } }
      `}</style>

      <main className="pd-wrap">

        {/* 1 ── HERO (main.png 1024×1024, objectFit cover) */}
        <HeroSection
          src={project.image}
          title={project.title}
          category={project.category}
          projectIndex={idx}
          total={projects.length}
        />

        {/* 2 ── TITLE + SPECS */}
        <div className="pd-cx pd-pys">
          <Reveal>
            <div className="title-row">
              <div>
                <p style={{
                  fontFamily: "'DM Mono', monospace", fontSize: "0.52rem",
                  letterSpacing: "0.3em", textTransform: "uppercase",
                  color: "rgba(10,10,10,0.28)", marginBottom: 10,
                }}>{project.category}</p>
                <h2 style={{
                  fontFamily: "var(--font-heading)", fontSize: "clamp(1.9rem,5vw,4.5rem)",
                  letterSpacing: "-0.04em", lineHeight: 1.0,
                  color: "#0a0a0a", fontWeight: 400, margin: 0,
                }}>{project.title}</h2>
              </div>
              <div style={{ textAlign: "right", paddingBottom: 6 }}>
                <p style={{
                  fontFamily: "'DM Mono', monospace", fontSize: "0.46rem",
                  letterSpacing: "0.26em", textTransform: "uppercase",
                  color: "rgba(10,10,10,0.18)",
                }}>TEAL CULTURE</p>
                <p style={{
                  fontFamily: "var(--font-heading)", fontSize: "clamp(1.1rem,2vw,1.7rem)",
                  letterSpacing: "-0.03em", color: "rgba(10,10,10,0.1)",
                  fontStyle: "italic", marginTop: 3,
                }}>Studio</p>
              </div>
            </div>
          </Reveal>
          <SpecsStrip specs={specs} />
        </div>

        {/* 3 ── DESCRIPTION */}
        <div className="pd-cx pd-pys">
          <SectionLabel text="Project Overview" />
          <div className="desc-grid">
            <Reveal delay={0.04}>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: "clamp(0.92rem,1.15vw,1.02rem)",
                lineHeight: 1.9, color: "rgba(10,10,10,0.5)", letterSpacing: "0.01em",
              }}>{description}</p>
            </Reveal>
            <Reveal delay={0.14}>
              <div style={{ borderLeft: "2px solid rgba(10,10,10,0.11)", paddingLeft: "clamp(18px,2.8vw,34px)" }}>
                <p style={{
                  fontFamily: "var(--font-heading)", fontSize: "clamp(0.98rem,1.55vw,1.22rem)",
                  letterSpacing: "-0.02em", fontStyle: "italic",
                  color: "rgba(10,10,10,0.42)", lineHeight: 1.65, marginBottom: 22,
                }}>
                  Light and silence. Material and restraint. Each room a study in what can be left unsaid.
                </p>
                <p style={{
                  fontFamily: "'DM Mono', monospace", fontSize: "0.5rem",
                  letterSpacing: "0.24em", textTransform: "uppercase",
                  color: "rgba(10,10,10,0.22)",
                }}>— Teal Culture Studio</p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* 4 ── IMAGES 1·2·3 — trio of 768/1376 portraits */}
        <div className="pd-cx">
          <SectionLabel text="Spatial Sequence" />
          <div className="g-trio">
            {[gallery[0], gallery[1], gallery[2]].map((src, i) => (
              <CurtainImg key={i} src={src} alt={`${project.title} — 0${i+1}`}
                aspectRatio={R_PORTRAIT} delay={i * 0.1}
                sizes="(max-width:640px) 100vw, 33vw" />
            ))}
          </div>
        </div>

        {/* 5 ── IMAGE 4 — single full-width 768/1376 */}
        <div className="pd-cx" style={{ marginTop: "clamp(10px,1.6vw,20px)" }}>
          <CurtainImg src={gallery[3]} alt={`${project.title} — 04`}
            aspectRatio={R_PORTRAIT}
            sizes="(max-width:768px) 100vw, 80vw"
            caption="Corridor volume — precision timber & diffused ceiling light" />
        </div>

        {/* 6 ── QUOTE */}
        <div className="pd-cx pd-py">
          <QuoteBlock quote={quote} />
        </div>

        {/* 7 ── IMAGES 5·6 — duo of 768/1376 portraits */}
        <div className="pd-cx">
          <SectionLabel text="Interior Detail" />
          <div className="g-duo">
            {[gallery[4], gallery[5]].map((src, i) => (
              <CurtainImg key={i} src={src} alt={`${project.title} — 0${i+5}`}
                aspectRatio={R_PORTRAIT} delay={i * 0.12}
                sizes="(max-width:560px) 100vw, 50vw" />
            ))}
          </div>
        </div>

        {/* 8 ── IMAGE 7 — centered narrow 768/1376 */}
        <div className="pd-cx" style={{ marginTop: "clamp(10px,1.6vw,20px)" }}>
          <div className="g-center">
            <CurtainImg src={gallery[6]} alt={`${project.title} — 07`}
              aspectRatio={R_PORTRAIT}
              sizes="(max-width:768px) 100vw, 600px"
              caption="Master suite — terracotta marble & warm timber herringbone" />
          </div>
        </div>

        {/* 9 ── IMAGES 8(960/1696) · 9(960/1696) · 10(768/1376) — final trio */}
        <div className="pd-cx pd-pys">
          <SectionLabel text="Material Language" />
          <div className="g-final">
            {/* img 8 — 960×1696 */}
            <CurtainImg src={gallery[7]} alt={`${project.title} — 08`}
              aspectRatio={R_PORTRAIT2} delay={0}
              sizes="(max-width:640px) 100vw, 33vw" />
            {/* img 9 — 960×1696 */}
            <CurtainImg src={gallery[8]} alt={`${project.title} — 09`}
              aspectRatio={R_PORTRAIT2} delay={0.1}
              sizes="(max-width:640px) 100vw, 33vw" />
            {/* img 10 — 768×1376 */}
            <CurtainImg src={gallery[9]} alt={`${project.title} — 10`}
              aspectRatio={R_PORTRAIT} delay={0.2}
              sizes="(max-width:640px) 100vw, 33vw" />
          </div>
        </div>

        {/* 10 ── BACK */}
        <div className="pd-cx">
          <Reveal>
            <div className="back-strip">
              <Link href="/work" style={{
                display: "inline-flex", alignItems: "center", gap: 12,
                fontFamily: "'DM Mono', monospace", fontSize: "0.54rem",
                letterSpacing: "0.26em", textTransform: "uppercase",
                color: "rgba(10,10,10,0.36)", textDecoration: "none",
              }}>← All Projects</Link>
              <p style={{
                fontFamily: "'DM Mono', monospace", fontSize: "0.48rem",
                letterSpacing: "0.22em", textTransform: "uppercase",
                color: "rgba(10,10,10,0.18)",
              }}>Photography — TEAL CULTURE Studio</p>
            </div>
          </Reveal>
        </div>

        {/* 11 ── NEXT PROJECT */}
        <NextProject project={nextProject} />
      </main>
    </>
  );
}