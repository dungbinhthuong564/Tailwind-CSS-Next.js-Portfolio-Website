'use client';
import Link from 'next/link';
import React from 'react';

const Logo: React.FC = () => {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-blue-400 flex items-center justify-center text-white font-bold text-xl shadow-md group-hover:scale-105 transition-all duration-300">
        <span className="font-extrabold tracking-tighter">AD</span>
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold tracking-tight text-midnight_text dark:text-white group-hover:text-primary transition-colors">
          Trung Dũng<span className="text-primary">.dev</span>
        </span>
        <span className="text-[10px] uppercase tracking-widest text-grey dark:text-white/50 font-semibold -mt-1">
          Front-End Dev
        </span>
      </div>
    </Link>
  );
};

export default Logo;
