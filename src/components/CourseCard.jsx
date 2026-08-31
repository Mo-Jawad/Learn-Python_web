import React from 'react';
import { ExternalLink, Clock, Code2, GitBranch, Layers, Boxes, Cpu, FileCode, ArrowUpRight, CheckCircle2, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

// Mapping icon names to Lucide icon components
const iconMap = {
  Code2: Code2,
  GitBranch: GitBranch,
  Layers: Layers,
  Boxes: Boxes,
  Cpu: Cpu,
  FileCode: FileCode
};

/**
 * =============================================================================
 * CourseCard Component (Ultra-Smooth Animation & High-Contrast)
 * =============================================================================
 * Beautiful animated card featuring:
 * 1. Prominent 'Module XX' badge
 * 2. High-contrast color palette and glowing hover state
 * 3. Ultra-smooth spring physics on hover
 * 4. High-contrast 'Open' button opening the standalone HTML in a new tab
 * 
 * @param {Object} props
 * @param {Object} props.course - Python course data object
 * @param {number} props.index - Index for staggered entry animation
 */
export default function CourseCard({ course, index = 0 }) {
  const IconComponent = iconMap[course.iconName] || Code2;
  const formattedModuleNum = course.moduleNumber 
    ? String(course.moduleNumber).padStart(2, '0') 
    : String(index + 1).padStart(2, '0');

  const handleOpen = (e) => {
    e?.stopPropagation();
    window.open(course.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ 
        type: "spring",
        stiffness: 260,
        damping: 24,
        delay: Math.min((index % 6) * 0.07, 0.4) 
      }}
      whileHover={{ 
        y: -6,
        transition: { type: "spring", stiffness: 350, damping: 25 }
      }}
      onClick={handleOpen}
      className="group relative flex flex-col justify-between rounded-2xl bg-[#0F1423]/90 backdrop-blur-xl border border-gray-800/90 hover:border-yellow-400/80 p-6 shadow-lg shadow-black/40 hover:shadow-2xl hover:shadow-yellow-400/10 transition-colors duration-300 cursor-pointer overflow-hidden"
    >
      
      {/* Dynamic Hover Glow Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" />

      {/* Top Bar: Module Number Badge & Level */}
      <div className="relative z-10">
        
        <div className="flex items-center justify-between gap-2 mb-4">
          
          {/* Prominent Module Number Badge */}
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-yellow-400 text-slate-950 shadow-sm shadow-yellow-400/20 group-hover:scale-105 transition-transform duration-200">
              <span>MOD</span>
              <span className="text-[13px]">{formattedModuleNum}</span>
            </span>

            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700/80">
              {course.badge || course.category}
            </span>
          </div>

          {/* Read Duration */}
          <div className="flex items-center gap-1 text-[11px] font-mono text-slate-400">
            <Clock className="w-3.5 h-3.5 text-slate-500" />
            <span>{course.duration}</span>
          </div>

        </div>

        {/* Icon & Title Header */}
        <div className="flex items-start gap-3.5 mb-3">
          <div className={`p-2.5 rounded-xl bg-gradient-to-br ${course.color || 'from-yellow-500/20 to-amber-500/20'} border ${course.borderColor || 'border-yellow-500/30'} shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
            <IconComponent className={`w-5 h-5 ${course.accentColor || 'text-yellow-400'}`} />
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-bold text-white group-hover:text-yellow-300 transition-colors duration-200 leading-snug">
              {course.title}
            </h3>
            
            {/* Target File Indicator */}
            <p className="text-[11px] font-mono text-slate-500 mt-0.5 truncate flex items-center gap-1">
              <span>📄</span>
              <span className="text-slate-400 truncate">{course.file.replace('src/py-html/', '')}</span>
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed mb-4 line-clamp-2">
          {course.description}
        </p>

        {/* Key Concepts Preview */}
        {course.topics && course.topics.length > 0 && (
          <div className="space-y-1.5 mb-5 pt-3 border-t border-gray-800/80">
            <div className="grid grid-cols-1 gap-1">
              {course.topics.slice(0, 2).map((topic, i) => (
                <div key={i} className="flex items-center gap-1.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="truncate">{topic}</span>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Card Action Footer with High-Contrast 'Open' Button */}
      <div className="relative z-10 pt-4 border-t border-gray-800/80 flex items-center justify-between gap-3">
        
        <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20">
          {course.level}
        </span>

        {/* High-Contrast 'Open' Button with smooth hover bounce */}
        <motion.button
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleOpen}
          className="relative inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold text-slate-950 bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-300 hover:from-yellow-300 hover:to-amber-200 shadow-md shadow-yellow-400/25 group-hover:shadow-lg group-hover:shadow-yellow-400/40 transition-all duration-200 cursor-pointer"
          title={`Open ${course.title} in a new tab`}
        >
          <span>Open</span>
          <ArrowUpRight className="w-4 h-4 text-slate-950 stroke-[2.5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
        </motion.button>

      </div>

    </motion.div>
  );
}
