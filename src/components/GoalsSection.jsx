import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Layers, Code2, Rocket, Wifi, Brain } from 'lucide-react';
import Glow from './Glow';

const ease = [0.22, 1, 0.36, 1];

/** Data-driven so goals can be edited without touching markup. */
const GOALS = [
  { icon: Eye, title: 'Think visually', text: 'Hand-drawn style lessons make abstract ideas stick faster than walls of text.' },
  { icon: Layers, title: 'Solid fundamentals', text: 'From variables to OOP, build the core every Python developer relies on.' },
  { icon: Code2, title: 'Write real code', text: 'Loops, functions, classes, file I/O and JSON — skills you use in real projects.' },
  { icon: Brain, title: 'Problem-solving mindset', text: 'Learn to break problems down and handle errors like a professional.' },
  { icon: Wifi, title: 'Learn anywhere', text: 'Standalone HTML modules: no sign-up, no database, works offline.' },
  { icon: Rocket, title: 'Ready for what’s next', text: 'Be prepared for web dev, data science, automation or AI with confidence.' },
];

/**
 * GoalsSection — what a learner gains after finishing the modules.
 */
export default function GoalsSection() {
  return (
    <section id="goals" className="relative max-w-6xl mx-auto px-6 py-24">
      <Glow tone="violet" className="top-10 -left-24 w-80 h-80" />
      <Glow tone="accent" className="bottom-0 right-0 w-72 h-72" />

      <p className="label mb-3">Our Goals</p>
      <h2 className="text-3xl font-light tracking-tight text-white">What you gain from learning here</h2>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {GOALS.map(({ icon: Icon, title, text }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease, delay: i * 0.07 }}
            whileHover={{ y: -4 }}
            className="group rounded-lg border border-line bg-surface/70 backdrop-blur p-6 transition-colors hover:border-accent/40 hover:shadow-[0_0_40px_-12px_rgba(250,204,21,0.35)]"
          >
            <Icon className="w-5 h-5 text-accent" strokeWidth={1.5} />
            <h3 className="mt-4 text-white font-medium">{title}</h3>
            <p className="mt-2 text-sm text-neutral-400 leading-relaxed">{text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
