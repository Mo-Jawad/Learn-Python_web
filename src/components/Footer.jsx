import React from 'react';
import { Github, Linkedin, Twitter, Globe } from 'lucide-react';

/**
 * Footer — creator credit on the left, social icon links on the right.
 */
export default function Footer() {
  // Replace the URLs with your own handles
  const socials = [
    { name: 'GitHub', url: 'https://github.com/Mo-Jawad', icon: Github },
    { name: 'LinkedIn', url: 'https://linkedin.com/', icon: Linkedin },
    { name: 'X / Twitter', url: 'https://x.com/JaoyadCode', icon: Twitter },
    { name: 'Portfolio', url: 'https://jaoyaddev.com/', icon: Globe },
  ];

  return (
    <footer id="creator" className="border-t border-line">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-sm text-neutral-500">
          © {new Date().getFullYear()} Py-Learn-HTML · Created by{' '}
          <span className="text-white">Md Jaoyad SWE</span>
        </p>

        <div className="flex items-center gap-5">
          {socials.map(({ name, url, icon: Icon }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              className="text-neutral-500 hover:text-white transition-colors"
            >
              <Icon className="w-[18px] h-[18px]" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
