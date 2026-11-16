import React, { useState } from 'react';
import {
  ExternalLink,
  MessageSquare,
  ShoppingBag,
  ShieldCheck,
  Copy,
  X,
  Play,
  Truck,
  Coffee,
  Factory,
} from 'lucide-react';
import {
  APPLICATION_SCENARIOS,
  M3000_HARDWARE_SPECS,
  SiteConfig,
} from '../data/chawrtData';
import m3000FrontImg from '../assets/images/m3000_front.png';
import m3000PortsImg from '../assets/images/m3000_ports.png';
import m3000SideImg from '../assets/images/m3000_side.png';
import m3000IsoImg from '../assets/images/m3000_iso.png';
import m3000InnerImg from '../assets/images/m3000_inner.png';
import qqGroupQrImg from '../assets/images/qq-group.jpg';

interface HardwareShowcaseProps {
  config: SiteConfig;
  onCopy: (text: string, label: string) => void;
}

type GalleryView = 'video' | 'front' | 'ports' | 'side' | 'iso' | 'inner';

interface GalleryTabItem {
  id: GalleryView;
  label: string;
  tag: string;
}

const GALLERY_TABS: GalleryTabItem[] = [
  { id: 'video', label: '🎥 3D 展机视频', tag: '旋转动态' },
  { id: 'front', label: '📸 CNC 全金属整机', tag: '正面散热' },
  { id: 'ports', label: '🔌 5×千兆/串口面板', tag: 'RS232/485' },
  { id: 'side', label: '📶 高通 5G 双 SIM', tag: '双卡热备' },
  { id: 'iso', label: '📐 3D 轴测立体', tag: '工控身型' },
  { id: 'inner', label: '🔬 核心主板拆解', tag: 'PCB实拍' },
];

export const HardwareShowcase: React.FC<HardwareShowcaseProps> = ({ config, onCopy }) => {
  const [galleryView, setGalleryView] = useState<GalleryView>('video');
  const [showOrderModal, setShowOrderModal] = useState(false);

  const getImageSrc = (view: GalleryView) => {
    switch (view) {
      case 'front':
        return m3000FrontImg;
      case 'ports':
        return m3000PortsImg;
      case 'side':
        return m3000SideImg;
      case 'iso':
        return m3000IsoImg;
      case 'inner':
        return m3000InnerImg;
      default:
        return m3000FrontImg;
    }
  };

  const renderScenarioIcon = (name: 'van' | 'coffee' | 'factory') => {
    if (name === 'van') return <Truck className="w-5 h-5 text-[#00f2fe] shrink-0" />;
    if (name === 'coffee') return <Coffee className="w-5 h-5 text-emerald-400 shrink-0" />;
    return <Factory className="w-5 h-5 text-purple-400 shrink-0" />;
  };

  const currentTab = GALLERY_TABS.find((t) => t.id === galleryView);

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
          {/* Left: Industrial Hardware Multi-View Gallery Switcher */}
          <div className="lg:col-span-6 flex flex-col bg-[#111b2e]/90 border border-cyan-500/25 rounded-xl overflow-hidden">
            <div className="aspect-[4/3] bg-[#040814] relative overflow-hidden border-b border-slate-800 flex items-center justify-center p-3">
              {galleryView === 'video' ? (
                <div className="relative w-full h-full flex items-center justify-center">
                  <video
                    key="hw-video"
                    src="/videos/hardware_showcase.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute top-3 left-3 px-2 py-1 rounded bg-black/60 backdrop-blur-sm border border-cyan-500/40 text-[10px] font-mono text-[#00f2fe] flex items-center gap-1.5">
                    <Play className="w-2.5 h-2.5 fill-current" />
                    <span>360° 实物 3D 展机视频</span>
                  </div>
                </div>
              ) : (
                <img
                  key={galleryView}
                  src={getImageSrc(galleryView)}
                  alt={`ClawWiFi M3000 v1 5G 工业级移动网关 - ${currentTab?.label}`}
                  className="w-full h-full object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.7)] transition-all duration-300"
                />
              )}
            </div>

            {/* 6 Interactive Perspective Tabs */}
            <div className="p-3 bg-[#0f172a] border-t border-slate-800/80">
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5">
                {GALLERY_TABS.map((tab) => {
                  const isActive = galleryView === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setGalleryView(tab.id)}
                      className={`px-2 py-1.5 text-[11px] font-medium rounded-lg transition-all text-center flex flex-col items-center justify-center gap-0.5 cursor-pointer ${
                        isActive
                          ? 'bg-[#00f2fe]/15 text-[#00f2fe] border border-cyan-400/50 shadow-sm'
                          : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800'
                      }`}
                    >
                      <span className="whitespace-nowrap font-medium">{tab.label}</span>
                      <span className="text-[9px] font-mono opacity-75">{tab.tag}</span>
                    </button>
                  );
                })}
              </div>
              <div className="mt-2.5 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400 px-1">
                <span>尺寸 130×80×33 mm · 无风扇全铝合金被动散热</span>
                <span className="text-[#00f2fe]">{currentTab?.label}</span>
              </div>
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
                  <div key={item.label} className="py-2.5 space-y-0.5">
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
              <button
                type="button"
                onClick={() => setShowOrderModal(true)}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#00f2fe] hover:bg-sky-300 text-slate-950 text-xs font-bold transition-colors cursor-pointer whitespace-nowrap"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>选购官方 M3000 硬件</span>
                <ExternalLink className="w-3 h-3" />
              </button>
              <button
                type="button"
                onClick={() => setShowOrderModal(true)}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap"
              >
                <span>现货与极客直营通道</span>
                <ExternalLink className="w-3 h-3" />
              </button>
              <button
                type="button"
                onClick={() => setShowOrderModal(true)}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg border border-purple-500/50 hover:border-purple-400 bg-[#0b1220] hover:bg-slate-800 text-slate-100 text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap"
              >
                <MessageSquare className="w-3.5 h-3.5 text-purple-400" />
                <span>企业批量采购与开票</span>
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
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="hardware-order-title"
        >
          <div className="bg-[#111b2e] border border-cyan-500/35 rounded-2xl w-full max-w-lg p-6 shadow-2xl relative animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-5">
              <div>
                <h3 id="hardware-order-title" className="font-display text-lg font-bold text-white flex items-center gap-2">
                  <span>ClawWiFi M3000 v1 选购与定制咨询</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    现货发售
                  </span>
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  高通 5G SA/NSA 双卡双待 · 5×千兆 + RS232/RS485 · 1 年质保 + 终身 OTA
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
              {/* Scan QQ Group to connect */}
              <div className="bg-[#0b1220] border border-slate-800 rounded-xl p-4 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
                <div className="bg-white p-2 rounded-lg shrink-0">
                  <img
                    src={qqGroupQrImg}
                    alt="官方技术交流 QQ 群二维码"
                    className="w-28 h-28 object-contain"
                  />
                </div>
                <div className="space-y-2 flex-1">
                  <p className="text-xs font-semibold text-white">
                    官方直通技术交流与售后服务群
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    群号：<strong className="font-mono text-[#00f2fe]">{config.qqGroup}</strong>
                    <br />
                    入群可直联核心作者，获取 M3000 v1 专属购买折扣、企业增票采购清单与 xfrpc 穿透预配置协助。
                  </p>
                  <button
                    type="button"
                    onClick={() => onCopy(config.qqGroup, '已复制官方技术交流 QQ 群号')}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 border border-slate-700 transition-colors cursor-pointer"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>一键复制群号</span>
                  </button>
                </div>
              </div>

              {/* Direct e-commerce links */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={config.taobaoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between px-4 py-3 rounded-lg bg-[#0b1220] border border-slate-800 hover:border-[#00f2fe]/60 text-xs font-semibold text-white transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <ShoppingBag className="w-4 h-4 text-[#00f2fe]" />
                    <span>官方淘宝店铺</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href={config.xianyuUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between px-4 py-3 rounded-lg bg-[#0b1220] border border-slate-800 hover:border-emerald-500/60 text-xs font-semibold text-white transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>闲鱼极客直营</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>

              <div className="text-[11px] text-slate-400 text-center leading-relaxed">
                💡 提供增值税专用发票 · 批量 10 台以上支持企业 Portal 认证界面与专属 VPN 预烧录定制
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
