import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onNavigate?: (id: string) => void;
}

const NAV_LINKS = [
  { id: 'comparison', label: '架构对比' },
  { id: 'copilot-core', label: '小茶 AI 助手' },
  { id: 'services', label: '四大核心服务' },
  { id: 'hardware', label: 'M3000 5G 网关' },
  { id: 'benchmarks', label: '83项测试报告' },
  { id: 'downloads', label: '固件下载' },
];

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    setMobileOpen(false);
    if (onNavigate) {
      e.preventDefault();
      onNavigate(id);
    }
  };

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-[#0f172a]/90 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single clean wordmark */}
        <a
          href="#top"
          onClick={(e) => handleLinkClick(e, 'top')}
          className="font-display text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00f2fe] rounded"
        >
          chaWrt
        </a>

        {/* Zone 2: 5 clean single-line navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          {NAV_LINKS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleLinkClick(e, item.id)}
              className="hover:text-white hover:underline underline-offset-4 decoration-[#00f2fe]/80 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00f2fe] rounded"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary CTA button + mobile menu trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#downloads"
            onClick={(e) => handleLinkClick(e, 'downloads')}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-bold text-slate-950 bg-[#00f2fe] hover:bg-sky-300 rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00f2fe]"
          >
            下载固件
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? '关闭导航菜单' : '打开导航菜单'}
            aria-expanded={mobileOpen}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-slate-800 bg-[#0f172a] px-4 py-4 space-y-2">
          {NAV_LINKS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleLinkClick(e, item.id)}
              className="block py-2.5 px-3 text-sm font-medium text-slate-200 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#downloads"
            onClick={(e) => handleLinkClick(e, 'downloads')}
            className="block w-full text-center mt-2 py-2.5 px-4 text-sm font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-lg transition-colors"
          >
            立即下载开源固件
          </a>
        </div>
      )}
    </header>
  );
};
