import React from 'react';
import { Zap, Code, ShieldAlert, Cpu, Sparkles, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * =============================================================================
 * StatsSection Component
 * =============================================================================
 * Displays key platform metrics: 23 interactive modules, 0ms latency, zero database overhead.
 */
export default function StatsSection() {
  const stats = [
    {
      icon: BookOpen,
      value: "23 Modules",
      label: "Visual HTML Guides",
      detail: "Syntax, OOP, CRUD & APIs",
      color: "text-yellow-400",
      border: "hover:border-yellow-400/50"
    },
    {
      icon: Zap,
      value: "0ms Latency",
      label: "Instant Interactive Load",
      detail: "Pure client-side performance",
      color: "text-cyan-400",
      border: "hover:border-cyan-400/50"
    },
    {
      icon: Cpu,
      value: "Zero DB Overhead",
      label: "Lightweight Array Catalog",
      detail: "Structured object architecture",
      color: "text-emerald-400",
      border: "hover:border-emerald-400/50"
    },
    {
      icon: Sparkles,
      value: "Md Jaoyad SWE",
      label: "software Engineer & Creator",
      detail: "High-contrast UI design",
      color: "text-purple-400",
      border: "hover:border-purple-400/50"
    }
  ];

  return (
    <section className="py-12 border-y border-gray-800/80 bg-[#080C16]/60 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`p-5 rounded-2xl bg-[#0F1423]/70 border border-gray-800/80 ${stat.border} transition-all duration-300 shadow-md`}
              >
                <Icon className={`w-6 h-6 ${stat.color} mb-3`} />
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-sans">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-200 mt-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5 font-mono">
                  {stat.detail}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
