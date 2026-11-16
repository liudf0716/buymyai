import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { SITE_CONFIG } from './data/chawrtData';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { WhyChaWrtSection } from './components/WhyChaWrtSection';
import { TechFeaturesBento } from './components/TechFeaturesBento';
import { HardwareShowcase } from './components/HardwareShowcase';
import { TrustDashboard } from './components/TrustDashboard';
import { DownloadAndDocsSection } from './components/DownloadAndDocsSection';
import { FaqAndFooter } from './components/FaqAndFooter';

export function App() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 2400);
  };

  const handleCopy = (text: string, label: string) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(
        () => showToast(label),
        () => fallbackCopy(text, label)
      );
    } else {
      fallbackCopy(text, label);
    }
  };

  const fallbackCopy = (text: string, label: string) => {
    try {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      showToast(label);
    } catch {
      showToast('复制失败，请手动选中复制');
    }
  };

  const scrollToSection = (id: string) => {
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-100 antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Sticky 3-Zone Official Navbar */}
      <Navbar onNavigate={scrollToSection} />

      <main>
        {/* Hero + ClawWRT Copilot HUD + Channel A / Channel B Strip */}
        <HeroSection config={SITE_CONFIG} onScrollTo={scrollToSection} />

        {/* Legacy OpenWrt vs chaWrt Comparison */}
        <WhyChaWrtSection />

        {/* 6 Core Technical Capabilities + OpenWrt xfrpc Upstream Endorsement */}
        <TechFeaturesBento />

        {/* Channel A: ClawWiFi M3000 v1 5G Industrial Mobile Gateway */}
        <HardwareShowcase config={SITE_CONFIG} onCopy={handleCopy} />

        {/* 83-Item Industrial CI/CD Test Report & Telemetry */}
        <TrustDashboard />

        {/* Channel B: Pure Open-Source Firmware Matrix + Knowledge Base Docs */}
        <DownloadAndDocsSection config={SITE_CONFIG} onCopy={handleCopy} />

        {/* FAQ Accordion + Official Footer (QQ: 331230369 & buymyai.ai.studio) */}
        <FaqAndFooter config={SITE_CONFIG} onCopy={handleCopy} onScrollTo={scrollToSection} />
      </main>

      {/* Global Toast Notification */}
      {toastMessage && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#111b2e] border border-cyan-400/60 text-xs font-medium text-white shadow-xl"
        >
          <Check className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}

export default App;
