import React, { useState } from 'react';
import { ArrowRight, Download, Cpu, Terminal, ShieldCheck } from 'lucide-react';
import { COPILOT_SCENARIOS, SiteConfig } from '../data/chawrtData';
import m3000HeroImg from '../assets/images/regenerated_image_1794830257281.png';

interface HeroSectionProps {
  config: SiteConfig;
  onScrollTo: (id: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ config, onScrollTo }) => {
  const [activeScenarioIdx, setActiveScenarioIdx] = useState(0);
  const [imageError, setImageError] = useState(false);

  const activeScenario = COPILOT_SCENARIOS[activeScenarioIdx];

  return (
    <section
      id="top"
      className="pt-12 pb-16 sm:pt-16 sm:pb-20 px-4 sm:px-6 border-b border-slate-800/80 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Core Proposition & Dual-Channel CTAs */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <p className="text-xs font-mono text-[#00f2fe] tracking-wide mb-4">
                {config.latestVersion} · Linux 6.12 LTS + 内核级 eBPF + 83 项实机测试 100% 通过
              </p>

              <h1 className="font-display text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold text-white tracking-tight leading-[1.18] mb-5">
                下一代智能路由器系统：Linux 6.12、内核级 eBPF 与 5G 工业移动网关
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl mb-8">
                集成 DeepSeek「小茶助手」AI Copilot、MediaTek PPE 硬件全线速与 OpenWrt 官方收录组件{' '}
                <code className="font-mono text-[#00f2fe] text-sm">xfrpc</code>。为极客提供纯正开源固件，为商用与移动场景交付全金属{' '}
                <strong className="text-white font-semibold">ClawWiFi M3000 v1</strong> 5G 旗舰网关。
              </p>

              {/* Dual Channel CTAs */}
              <div className="flex flex-wrap items-center gap-3 mb-8">
                <a
                  href="#hardware"
                  onClick={(e) => {
                    e.preventDefault();
                    onScrollTo('hardware');
                  }}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#00f2fe] hover:bg-sky-300 text-slate-950 text-sm font-bold transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00f2fe]"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>通道 A：M3000 v1 5G 硬件完全体</span>
                </a>
                <a
                  href="#downloads"
                  onClick={(e) => {
                    e.preventDefault();
                    onScrollTo('downloads');
                  }}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-purple-500/50 hover:border-purple-400 bg-[#111b2e]/80 hover:bg-slate-800/90 text-slate-100 text-sm font-semibold transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
                >
                  <Download className="w-4 h-4 text-[#00f2fe]" />
                  <span>通道 B：免费下载开源固件</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quiet Unboxed Trust Bar */}
            <div className="pt-6 border-t border-slate-800/80">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs font-mono text-slate-400">
                <span className="text-slate-200 font-medium">Linux 6.12 LTS</span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span className="text-slate-200 font-medium">Alpine APK 3.x</span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span className="text-[#00f2fe] font-medium">OpenWrt 官方收录 xfrpc</span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span className="text-emerald-400 font-medium">83 项实机回归 100% 通过</span>
              </div>
            </div>
          </div>

          {/* Right Column: Industrial 5G Hardware Visual + Upgraded XiaoCha Copilot HUD */}
          <div className="lg:col-span-6 flex flex-col bg-[#111b2e]/85 backdrop-blur-md border border-cyan-500/25 rounded-xl overflow-hidden shadow-[0_0_40px_-15px_rgba(0,242,254,0.2)]">
            {/* Hardware Studio Render Image */}
            <div className="relative aspect-video bg-[#0b1220] overflow-hidden border-b border-slate-800">
              {!imageError ? (
                <img
                  src={m3000HeroImg}
                  alt="ClawWiFi M3000 v1 CNC 全金属 5G 工业级移动网关渲染图"
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-slate-900 to-[#0b1220] text-slate-400">
                  <Cpu className="w-10 h-10 text-[#00f2fe] mb-3" />
                  <p className="text-sm font-semibold text-white">ClawWiFi M3000 v1 5G 工业移动网关</p>
                  <p className="text-xs text-slate-400 mt-1">CNC 全金属外壳 · 双 SIM 5G · RS232/RS485</p>
                </div>
              )}
            </div>

            {/* Interactive LuCI XiaoCha Copilot HUD */}
            <div className="p-5 flex-1 flex flex-col justify-between gap-4">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-800/80">
                <div className="flex items-center gap-2 text-xs font-semibold text-white">
                  <Terminal className="w-4 h-4 text-[#00f2fe] shrink-0" />
                  <span>小茶 AI 助手 · ClawWRT Copilot 实机演示</span>
                </div>
                <div className="flex flex-wrap items-center gap-2.5 text-[11px] font-mono tabular-nums text-slate-300">
                  <span>
                    CPU <strong className="text-emerald-400 font-semibold">67°C</strong>
                  </span>
                  <span aria-hidden="true" className="text-slate-700">/</span>
                  <span>
                    NAT <strong className="text-[#00f2fe] font-semibold">937.77 Mbps</strong>
                  </span>
                  <span aria-hidden="true" className="text-slate-700">/</span>
                  <span>
                    xdns-bpf <strong className="text-purple-400 font-semibold">120MB+</strong>
                  </span>
                </div>
              </div>

              {/* Prompt Selector Tabs */}
              <div className="grid grid-cols-2 gap-1.5">
                {COPILOT_SCENARIOS.map((sc, idx) => {
                  const isActive = idx === activeScenarioIdx;
                  return (
                    <button
                      key={sc.id}
                      type="button"
                      onClick={() => setActiveScenarioIdx(idx)}
                      className={`px-2.5 py-2 rounded-md text-xs font-medium transition-colors text-left cursor-pointer border ${
                        isActive
                          ? 'bg-cyan-500/15 text-[#00f2fe] border-cyan-400/50'
                          : 'bg-slate-900/70 text-slate-400 border-slate-800 hover:text-slate-200 hover:border-slate-700'
                      }`}
                    >
                      <span className="block text-[10px] font-mono opacity-80 mb-0.5">{sc.tag}</span>
                      <span className="block truncate">“{sc.prompt}”</span>
                    </button>
                  );
                })}
              </div>

              {/* Copilot Output Box */}
              <div className="bg-[#0b1220] border border-slate-800/90 rounded-lg p-3.5 font-mono text-[11px] leading-relaxed">
                <div className="flex items-center justify-between text-slate-400 mb-2">
                  <span>{activeScenario.latencyLabel}</span>
                  <span className="text-emerald-400">实装功能 · 已通过校验</span>
                </div>
                <p className="text-white font-sans text-xs font-medium mb-2">
                  {activeScenario.actionSummary}
                </p>
                <pre className="text-cyan-300/90 overflow-x-auto whitespace-pre-wrap break-all">
                  {activeScenario.terminalOutput}
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Dual-Channel Architecture Strip (Clear Funnel for Buyers vs DIY Geeks) */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 border border-slate-800 rounded-xl bg-[#111b2e]/75 backdrop-blur-sm divide-y md:divide-y-0 md:divide-x divide-slate-800">
          <div className="p-6 flex flex-col justify-between gap-3">
            <div>
              <div className="flex items-center justify-between gap-2 text-xs font-mono text-[#00f2fe] mb-1.5">
                <span>通道 A · 官方硬件完全体</span>
                <span className="text-slate-400">省心用户 / 商业门店 / 5G 移动与工业现场</span>
              </div>
              <h2 className="font-display text-lg font-bold text-white mb-1.5">
                ClawWiFi M3000 v1 5G 工业级移动旗舰网关
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                M 代表 Mobile（移动蜂窝）。CNC 全金属无风扇机身（-40°C~+80°C / DC 12-65V），高通 5G 双 SIM 热备 + AX3000 + RS232/RS485。出厂预装认证版 chaWrt，享 1 年官方质保、终身 OTA 与 7×24 技术售后。
              </p>
            </div>
          </div>

          <div className="p-6 flex flex-col justify-between gap-3">
            <div>
              <div className="flex items-center justify-between gap-2 text-xs font-mono text-purple-400 mb-1.5">
                <span>通道 B · 纯净开源固件</span>
                <span className="text-slate-400">极客 / 网络工程师 / DIY 刷机玩家</span>
              </div>
              <h2 className="font-display text-lg font-bold text-white mb-1.5">
                chaWrt 25.12 LTS 开源发行版（免费下载）
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                提供 Factory / Sysupgrade 镜像矩阵与 SHA256 校验码，原生支持 360T7、H3C NX30 Pro、锐捷 X30E、Cudy WR3000 / M3000 等主流 MT7981 机型，体验 Linux 6.12 + eBPF 与 Alpine APK 3.x。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
