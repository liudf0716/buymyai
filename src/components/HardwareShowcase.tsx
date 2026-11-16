import React, { useState } from 'react';
import {
  ExternalLink,
  MessageSquare,
  ShoppingBag,
  ShieldCheck,
  Copy,
  X,
  Cpu,
  Truck,
  Coffee,
  Factory,
} from 'lucide-react';
import {
  APPLICATION_SCENARIOS,
  M3000_HARDWARE_SPECS,
  SiteConfig,
} from '../data/chawrtData';
import m3000HeroImg from '../assets/images/clawi_m3000_industrial_hero_1794829758507.jpg';
import m3000PortsImg from '../assets/images/clawi_m3000_industrial_ports_1794829759959.jpg';

interface HardwareShowcaseProps {
  config: SiteConfig;
  onCopy: (text: string, label: string) => void;
}

export const HardwareShowcase: React.FC<HardwareShowcaseProps> = ({ config, onCopy }) => {
  const [galleryView, setGalleryView] = useState<'front' | 'ports'>('front');
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});
  const [showOrderModal, setShowOrderModal] = useState(false);

  const currentImgSrc = galleryView === 'front' ? m3000HeroImg : m3000PortsImg;

  const renderScenarioIcon = (name: 'van' | 'coffee' | 'factory') => {
    if (name === 'van') return <Truck className="w-5 h-5 text-[#00f2fe] shrink-0" />;
    if (name === 'coffee') return <Coffee className="w-5 h-5 text-emerald-400 shrink-0" />;
    return <Factory className="w-5 h-5 text-purple-400 shrink-0" />;
  };

  return (
    <section id="hardware" className="py-16 px-4 sm:px-6 border-b border-slate-800/80 bg-[#0b1220]/70">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="max-w-3xl mb-10">
          <p className="text-xs font-mono text-[#00f2fe] mb-2">
            通道 A · 官方 5G 工业级移动旗舰网关 · ClawWiFi M3000 v1 (M = Mobile)
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
            全金属工控级 5G/4G + Wi-Fi 6 移动网关，绝非普通家用塑料路由
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            专为房车移动办公、商业门店、车载与无人值守工业现场锻造：高通 5G 双模 + 双 SIM 秒级热备、5×千兆 + 2×RS232 + 1×RS485 总线、-40°C ~ +80°C 宽温及 DC 12V ~ 65V 宽压供电，出厂预装 83 项实测认证版 chaWrt。
          </p>
        </div>

        {/* Main Gallery + Industrial Hardware Spec Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-10">
          {/* Left: Industrial Hardware Gallery Switcher */}
          <div className="lg:col-span-6 flex flex-col bg-[#111b2e]/90 border border-cyan-500/25 rounded-xl overflow-hidden">
            <div className="aspect-[4/3] bg-[#090e1a] relative overflow-hidden border-b border-slate-800 flex-1">
              {!imgErrors[galleryView] ? (
                <img
                  src={currentImgSrc}
                  alt={
                    galleryView === 'front'
                      ? 'ClawWiFi M3000 v1 5G 工业级移动网关 CNC 全金属整机图'
                      : 'ClawWiFi M3000 v1 工业背板：5×千兆网口、2×RS232、RS485、双 SIM 卡与 DC 12-65V'
                  }
                  referrerPolicy="no-referrer"
                  onError={() => setImgErrors((prev) => ({ ...prev, [galleryView]: true }))}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center">
                  <Cpu className="w-12 h-12 text-[#00f2fe] mb-3" />
                  <p className="text-sm font-semibold text-white">
                    ClawWiFi M3000 v1 · CNC 全金属 5G 移动网关
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    130×80×33 mm · 双 SIM 5G + RS232/RS485 + DC 12-65V
                  </p>
                </div>
              )}
            </div>

            <div className="p-4 flex flex-wrap items-center justify-between gap-3 bg-[#0f172a]">
              <div className="flex items-center gap-1.5 p-1 bg-slate-900 rounded-lg border border-slate-800">
                <button
                  type="button"
                  onClick={() => setGalleryView('front')}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                    galleryView === 'front'
                      ? 'bg-[#00f2fe]/15 text-[#00f2fe] border border-cyan-400/40'
                      : 'text-slate-400 hover:text-slate-200 border border-transparent'
                  }`}
                >
                  CNC 全金属整机
                </button>
                <button
                  type="button"
                  onClick={() => setGalleryView('ports')}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                    galleryView === 'ports'
                      ? 'bg-[#00f2fe]/15 text-[#00f2fe] border border-cyan-400/40'
                      : 'text-slate-400 hover:text-slate-200 border border-transparent'
                  }`}
                >
                  工业串口 &amp; 双 SIM 面板
                </button>
              </div>
              <span className="text-[11px] font-mono text-slate-400 tabular-nums">
                尺寸 130×80×33 mm · 无风扇被动散热
              </span>
            </div>
          </div>

          {/* Right: 5 Industrial Hardware Spec Rows + Prominent Purchase CTAs */}
          <div className="lg:col-span-6 flex flex-col justify-between bg-[#111b2e]/90 border border-slate-800 rounded-xl p-6 sm:p-7 gap-5">
            <div className="space-y-4">
              <div>
                <h3 className="font-display text-xl font-bold text-white mb-1">
                  工业级硬件规格参数矩阵 (Hardware Specs)
                </h3>
                <p className="text-xs text-slate-400">
                  工控级元器件选型与全金属结构，确保恶劣环境下全天候高可靠连通
                </p>
              </div>

              <div className="divide-y divide-slate-800/80 border-t border-b border-slate-800/80">
                {M3000_HARDWARE_SPECS.map((item) => (
                  <div key={item.label} className="py-3 space-y-1">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <span className="text-xs font-mono text-[#00f2fe]">{item.label}</span>
                      <span className="text-xs font-mono font-semibold text-white tabular-nums">
                        {item.spec}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>

              {/* Warranty & Official Rights */}
              <div className="bg-[#0b1220] border border-emerald-500/25 rounded-lg p-3.5">
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 mb-1">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>通道 A · 官方硬件购买保障与终身 OTA 权益</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  出厂预装官方认证 chaWrt 25.12 LTS · 1 年官方硬件质保 · 终身在线 OTA 更新 · 7×24 专属技术售后（QQ 群 {config.qqGroup}）。
                </p>
              </div>
            </div>

            {/* Prominent Channel A Conversion Actions */}
            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              <a
                href={config.taobaoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#00f2fe] hover:bg-sky-300 text-slate-950 text-xs font-bold transition-colors whitespace-nowrap"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>官方淘宝店铺</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href={config.xianyuUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-colors whitespace-nowrap"
              >
                <span>闲鱼直营通道</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <button
                type="button"
                onClick={() => setShowOrderModal(true)}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg border border-purple-500/50 hover:border-purple-400 bg-[#0b1220] hover:bg-slate-800 text-slate-100 text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap"
              >
                <MessageSquare className="w-3.5 h-3.5 text-purple-400" />
                <span>企业批量采购咨询</span>
              </button>
            </div>
          </div>
        </div>

        {/* 3 Real-World Industrial & Commercial Application Scenario Cards */}
        <div>
          <p className="text-xs font-mono text-slate-400 mb-4">
            三大典型落地应用场景 · 从移动出行到工业无人值守现场
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {APPLICATION_SCENARIOS.map((sc) => (
              <div
                key={sc.title}
                className="bg-[#111b2e]/80 backdrop-blur-sm border border-slate-800 hover:border-slate-700 rounded-xl p-6 flex flex-col justify-between gap-4 transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-2.5">
                    {renderScenarioIcon(sc.iconName)}
                    <div>
                      <h3 className="font-display text-sm sm:text-base font-bold text-white">
                        {sc.title}
                      </h3>
                      <p className="text-[11px] font-mono text-slate-400">{sc.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {sc.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-800/80 text-[11px] font-mono text-[#00f2fe]">
                  {sc.highlights}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hardware Enterprise & Direct Consultation Modal */}
      {showOrderModal && (
        <div
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="hardware-order-title"
        >
          <div className="bg-[#111b2e] border border-cyan-500/30 rounded-xl w-full max-w-lg p-6 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-5">
              <div>
                <h3 id="hardware-order-title" className="font-display text-lg font-bold text-white">
                  ClawWiFi M3000 v1 购买与企业批量采购咨询
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  全金属 5G 工业移动网关 · 1 年官方质保 + 终身 OTA + 7×24 售后
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowOrderModal(false)}
                aria-label="关闭窗口"
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={config.taobaoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between px-4 py-3 rounded-lg bg-[#0b1220] border border-slate-800 hover:border-[#00f2fe]/60 text-xs font-semibold text-white transition-colors"
                >
                  <span>官方淘宝店铺下单</span>
                  <ExternalLink className="w-4 h-4 text-[#00f2fe] shrink-0" />
                </a>
                <a
                  href={config.xianyuUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between px-4 py-3 rounded-lg bg-[#0b1220] border border-slate-800 hover:border-emerald-500/60 text-xs font-semibold text-white transition-colors"
                >
                  <span>闲鱼直营通道下单</span>
                  <ExternalLink className="w-4 h-4 text-emerald-400 shrink-0" />
                </a>
              </div>

              <div className="bg-[#0b1220] border border-slate-800 rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <p className="text-xs font-semibold text-white flex items-center gap-1.5">
                      <MessageSquare className="w-4 h-4 text-[#00f2fe]" />
                      <span>企业批量采购 / 商业门店组网 / 工控 PLC 定制</span>
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      加入官方技术交流 QQ 群：
                      <span className="font-mono text-white font-semibold">{config.qqGroup}</span>
                      （提供 xfrpc 穿透预配、Portal 定制与批量报价）
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => onCopy(config.qqGroup, '已复制官方技术交流 QQ 群号')}
                    className="px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 border border-slate-700 transition-colors cursor-pointer flex items-center gap-1.5 shrink-0"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>复制群号</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
