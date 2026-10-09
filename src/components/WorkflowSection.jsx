import React from 'react';
import { motion } from 'framer-motion';
import { Search, MousePointerClick, BookOpen, PenTool, RefreshCcw, Trophy } from 'lucide-react';
import Glow from './Glow';

const ease = [0.22, 1, 0.36, 1];

/** Ordered steps of the learning flow. Edit here to change the chart. */
const STEPS = [
  { icon: Search, title: 'Pick a module', text: 'Search or filter the curriculum.' },
  { icon: MousePointerClick, title: 'Open lesson', text: 'Opens in its own tab.' },
  { icon: BookOpen, title: 'Study visually', text: 'Read the sketch-style guide.' },
  { icon: PenTool, title: 'Practice code', text: 'Type the examples yourself.' },
  { icon: RefreshCcw, title: 'Review', text: 'Revisit what felt unclear.', loop: true },
  { icon: Trophy, title: 'Next module', text: 'Level up and repeat.' },
];

/** Time (s) each step takes to appear; connectors draw between steps. */
const STEP_DELAY = 0.35;

/**
 * Connector — line between two nodes that "draws" itself on scroll-in,
 * with a travelling dot (CSS `flow-dot`) to suggest direction of flow.
 * Horizontal on desktop, vertical on mobile.
 */
function Connector({ delay }) {
  return (
    <motion.div
      aria-hidden="true"
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, ease, delay }}
      className="relative bg-line mx-auto lg:my-auto
                 h-8 w-px origin-top
                 lg:h-px lg:w-full lg:origin-left"
    >
      <span className="flow-dot absolute rounded-full bg-accent w-1.5 h-1.5 shadow-[0_0_10px_#FACC15]" />
    </motion.div>
  );
}

/**
 * WorkflowSection — "Overall workflow": an animated flowchart of how to learn here.
 */
export default function WorkflowSection() {
  return (
    <section id="workflow" className="relative border-y border-line overflow-hidden scroll-mt-20">
      <Glow tone="blue" className="-top-24 left-1/3 w-96 h-96" />
      <Glow tone="accent" className="bottom-0 -left-20 w-72 h-72" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <p className="label mb-3">How it works</p>
        <h2 className="text-3xl font-light tracking-tight text-white">Overall workflow</h2>

        {/* Flex layout: nodes and connectors alternate (column on mobile, row on desktop) */}
        <div className="mt-14 flex flex-col lg:flex-row lg:items-start">
          {STEPS.map((s, i) => (
            <React.Fragment key={s.title}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 16 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, ease, delay: i * STEP_DELAY }}
                className="lg:w-36 shrink-0 text-center mx-auto"
              >
                <div className="relative mx-auto w-14 h-14 rounded-full border border-line bg-surface grid place-items-center shadow-[0_0_30px_-8px_rgba(250,204,21,0.5)]">
                  <s.icon className="w-5 h-5 text-accent" strokeWidth={1.5} />
                  <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-accent text-black text-[10px] font-mono grid place-items-center">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mt-4 text-sm text-white font-medium">{s.title}</h3>
                <p className="mt-1 text-xs text-neutral-500 leading-relaxed">{s.text}</p>
              </motion.div>

              {/* Connector sits at the vertical centre of the icon circle on desktop */}
              {i < STEPS.length - 1 && (
                <div className="lg:flex-1 lg:pt-7 lg:self-start">
                  <Connector delay={i * STEP_DELAY + 0.25} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        <p className="mt-12 text-center text-xs text-neutral-500 font-mono">
          ↺ Not clear? Loop back to Study or Review before moving on.
        </p>
      </div>
    </section>
  );
}
