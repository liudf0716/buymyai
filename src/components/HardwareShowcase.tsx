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
  Maximize2,
  Video,
  Camera,
  ChevronLeft,
  ChevronRight,
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
import m3000FrontAngleImg from '../assets/images/m3000_front_angle.png';
import m3000FrontZoomImg from '../assets/images/m3000_front_zoom.png';
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
  { id: 'video', label: '展机实录', tag: '3D 旋转' },
  { id: 'front', label: '正面外观', tag: '状态指示灯' },
  { id: 'ports', label: '接口背板', tag: '5×千兆电口' },
  { id: 'side', label: '侧面构造', tag: '外壳风道' },
  { id: 'iso', label: '3D 轴测', tag: '立体视角' },
  { id: 'inner', label: '主板拆解', tag: 'PCB 实拍' },
];

interface GalleryPhotoItem {
  id: string;
  title: string;
  subtitle: string;
  src: string;
  isDarkStage?: boolean;
  description: string;
}

const REAL_HARDWARE_PHOTOS: GalleryPhotoItem[] = [
  {
    id: 'front',
    title: '正面外观与系统状态灯阵列',
    subtitle: '流线散热机身 · LAN0-3 / WAN / Wi-Fi 指示灯',
    src: m3000FrontImg,
    description:
      '正面整齐排布系统运行、WAN 网口、LAN0-3 局域网口以及 2.4G/5G Wi-Fi 双频运行状态指示灯，网络运行状态一目了然。',
  },
  {
    id: 'ports',
    title: '5×全千兆以太网口与外置天线阵列',
    subtitle: '1 WAN + 4 LAN 全千兆 · USB 接口 · 高增益无线天线',
    src: m3000PortsImg,
    description:
      '背板标配 5 个全千兆以太网 RJ45 电口（1 WAN + 4 LAN），跑满家庭千兆宽带与企业内网；搭配外置高增益 Wi-Fi 6 射频天线，保障全屋穿墙覆盖。',
  },
  {
    id: 'iso',
    title: '3D 轴测立体机身视角',
    subtitle: '沉稳科技质感 · 紧凑桌面设计',
    src: m3000IsoImg,
    description:
      '整机小巧紧凑，兼顾桌面摆放美观与高效风道对流散热，长久满载运行稳定不积热。',
  },
  {
    id: 'angle',
    title: '正面斜切视角与面板细节',
    subtitle: '细致工艺做工 · 散热阻燃防尘',
    src: m3000FrontAngleImg,
    description:
      '外壳采用阻燃耐磨材质与精密结构设计，内置防浪涌与静电保护，从容应对各类复杂家庭与商用网络环境。',
  },
  {
    id: 'side',
    title: '侧面散热孔风道阵列',
    subtitle: '对流立体散热 · 静音无风扇',
    src: m3000SideImg,
    description:
      '机身侧边设计有精密对流散热格栅，配合内部大面积金属导热板，长久满载稳定不降速。',
  },
  {
    id: 'inner',
    title: '内部核心沉金主板 PCB 实拍',
    subtitle: 'MediaTek MT7981B + MT7976C + DDR 内存 + 固态电容',
    src: m3000InnerImg,
    isDarkStage: true,
    description:
      '拆机可见高集成度沉金 PCB，核心搭载 MediaTek MT7981B 处理器、MT7976C 双频 Wi-Fi 6 射频芯片、高品质高速内存与固态电容电感阵列。',
  },
];

export const HardwareShowcase: React.FC<HardwareShowcaseProps> = ({ config, onCopy }) => {
  const [galleryView, setGalleryView] = useState<GalleryView>('video');
  const [activeVideo, setActiveVideo] = useState<'commercial' | 'showcase'>('commercial');
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const getImageSrc = (view: GalleryView) => {
    switch (view) {
      case 'front':
        return m3000FrontZoomImg || m3000FrontImg;
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
  const lightboxPhoto = lightboxIdx !== null ? REAL_HARDWARE_PHOTOS[lightboxIdx] : null;

  const handleOpenCurrentViewInLightbox = () => {
    if (galleryView === 'video') {
      setLightboxIdx(0);
      return;
    }
    const idx = REAL_HARDWARE_PHOTOS.findIndex((p) => p.id === galleryView);
    setLightboxIdx(idx >= 0 ? idx : 0);
  };

  return (
    <section id="hardware" className="py-16 px-4 sm:px-6 border-b border-slate-800/80 bg-[#0b1220]/70">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Module Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-3xl">
            <p className="text-xs font-mono text-[#00f2fe] mb-2">
              通道 A · 官方标杆硬件 · ClawWiFi M3000 v1
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
              Wi-Fi 6 AX3000 标杆硬件，深度释放 chaWrt 全部性能潜能
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              专为追求极致网络体验的家庭、极客与商业门店打造：MediaTek MT7981B 双核 1.3GHz、5×全千兆以太网口、AX3000 双频并发与 160MHz 巨幅频宽，出厂预装官方实测认证版 chaWrt。
            </p>
          </div>
          <div className="text-xs font-mono text-slate-400 shrink-0 tabular-nums">
            <span>MT7981B 双核 1.3GHz</span>
            <span className="mx-2 text-slate-600">·</span>
            <span className="text-emerald-400 font-semibold">Wi-Fi 6 AX3000</span>
          </div>
        </div>

        {/* Part 1: Main Interactive Multi-View Showcase + Industrial Spec Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Quick Multi-View Box */}
          <div className="lg:col-span-6 flex flex-col justify-between bg-[#111b2e]/90 border border-cyan-500/25 rounded-xl overflow-hidden">
            <div
              className={`aspect-[4/3] relative overflow-hidden border-b border-slate-800 flex items-center justify-center p-4 transition-colors ${
                galleryView === 'video' || galleryView === 'inner' ? 'bg-[#040814]' : 'bg-white'
              }`}
            >
              {galleryView === 'video' ? (
                <div className="relative w-full h-full flex items-center justify-center">
                  <video
                    key="hw-showcase-video"
                    src="/videos/hardware_showcase.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-slate-950/85 backdrop-blur-sm border border-cyan-500/40 text-[11px] font-mono text-[#00f2fe] flex items-center gap-1.5">
                    <Play className="w-3 h-3 fill-current" />
                    <span>360° 实物 3D 展机视频</span>
                  </div>
                </div>
              ) : (
                <div
                  onClick={handleOpenCurrentViewInLightbox}
                  className="relative w-full h-full flex items-center justify-center cursor-pointer group"
                >
                  <img
                    key={galleryView}
                    src={getImageSrc(galleryView)}
                    alt={`ClawWiFi M3000 v1 标杆硬件 - ${currentTab?.label}`}
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-slate-950/85 backdrop-blur-sm border border-slate-800 text-[11px] font-mono text-[#00f2fe]">
                    {currentTab?.label} · {currentTab?.tag}
                  </div>
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded bg-slate-950/85 backdrop-blur-sm border border-slate-800 text-[11px] font-mono text-slate-200 flex items-center gap-1.5 group-hover:text-[#00f2fe] transition-colors">
                    <Maximize2 className="w-3 h-3" />
                    <span>点击放大检视</span>
                  </div>
                </div>
              )}
            </div>

            {/* 6 Clean Tabs (No Emoji Clutter) */}
            <div className="p-3.5 bg-[#0f172a] border-t border-slate-800/80">
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5">
                {GALLERY_TABS.map((tab) => {
                  const isActive = galleryView === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setGalleryView(tab.id)}
                      className={`px-2 py-2 text-[11px] font-medium rounded-lg transition-colors text-center flex flex-col items-center justify-center gap-0.5 cursor-pointer border ${
                        isActive
                          ? 'bg-[#00f2fe]/15 text-[#00f2fe] border-cyan-400/50'
                          : 'bg-slate-900/70 text-slate-400 hover:text-slate-200 border-slate-800'
                      }`}
                    >
                      <span className="whitespace-nowrap font-semibold">{tab.label}</span>
                      <span className="text-[10px] font-mono opacity-80 whitespace-nowrap">
                        {tab.tag}
                      </span>
                    </button>
                  );
                })}
              </div>
              <div className="mt-3 pt-2.5 border-t border-slate-800/60 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-slate-400 px-1">
                <span>MT7981B 双核 · 5×千兆网口 · AX3000 160MHz</span>
                <span className="text-[#00f2fe]">当前视角：{currentTab?.label}</span>
              </div>
            </div>
          </div>

          {/* Right: Spec Matrix & Purchase Entry */}
          <div className="lg:col-span-6 flex flex-col justify-between bg-[#111b2e]/90 border border-slate-800 rounded-xl p-6 sm:p-7 gap-5">
            <div className="space-y-4">
              <div>
                <h3 className="font-display text-xl font-bold text-white mb-1">
                  标杆硬件规格参数矩阵 (Hardware Specs)
                </h3>
                <p className="text-xs text-slate-400">
                  优质元器件选型与高效散热风道设计，确保长久运行高可靠连通
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

              {/* Warranty & Rights */}
              <div className="bg-[#0b1220] border border-emerald-500/25 rounded-lg p-3.5">
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 mb-1">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>通道 A · 官方标杆硬件与社区技术支持</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  出厂预装官方深度适配 chaWrt 25.12 LTS · 享官方技术交流 QQ 群（群号 {config.qqGroup}）技术交流与持续固件升级维护。
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              <button
                type="button"
                onClick={() => setShowOrderModal(true)}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#00f2fe] hover:bg-sky-300 text-slate-950 text-xs font-bold transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>选购官方 M3000 硬件</span>
                <ExternalLink className="w-3 h-3" />
              </button>
              <button
                type="button"
                onClick={() => setShowOrderModal(true)}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                <span>现货与极客直营通道</span>
                <ExternalLink className="w-3 h-3" />
              </button>
              <button
                type="button"
                onClick={() => setShowOrderModal(true)}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg border border-purple-500/50 hover:border-purple-400 bg-[#0b1220] hover:bg-slate-800 text-slate-100 text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                <MessageSquare className="w-3.5 h-3.5 text-purple-400" />
                <span>企业批量采购与开票</span>
              </button>
            </div>
          </div>
        </div>

        {/* Part 2: Dedicated Video Showcase Player */}
        <div
          id="hardware-video"
          className="bg-[#111b2e]/90 border border-cyan-500/30 rounded-xl overflow-hidden"
        >
          <div className="p-5 sm:p-6 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#0b1220]">
            <div>
              <p className="text-xs font-mono text-[#00f2fe] mb-1 flex items-center gap-1.5">
                <Video className="w-3.5 h-3.5" />
                <span>官方硬件实机宣传大片 · 工业全景解析视频</span>
              </p>
              <h3 className="font-display text-lg sm:text-xl font-bold text-white">
                ClawWiFi M3000 v1 官方实景宣传大片与 3D 展机演示
              </h3>
            </div>
            <div className="flex items-center gap-1.5 p-1 bg-slate-900 rounded-lg border border-slate-800 shrink-0 self-start sm:self-auto">
              <button
                type="button"
                onClick={() => setActiveVideo('commercial')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                  activeVideo === 'commercial'
                    ? 'bg-[#00f2fe] text-slate-950 font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                官方商业宣传大片
              </button>
              <button
                type="button"
                onClick={() => setActiveVideo('showcase')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                  activeVideo === 'showcase'
                    ? 'bg-[#00f2fe] text-slate-950 font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                3D 360° 旋转展机
              </button>
            </div>
          </div>

          <div className="relative aspect-video max-h-[540px] bg-[#040814] flex items-center justify-center">
            <video
              key={activeVideo}
              src={
                activeVideo === 'commercial'
                  ? '/videos/m3000_commercial.mp4'
                  : '/videos/hardware_showcase.mp4'
              }
              controls
              autoPlay
              muted
              playsInline
              loop
              className="w-full h-full object-contain"
            />
          </div>

          <div className="p-4 sm:p-5 bg-[#0d1525] border-t border-slate-800 text-xs text-slate-400 flex flex-wrap items-center justify-between gap-3 font-mono">
            <span>
              {activeVideo === 'commercial'
                ? '正在播放：ClawWiFi M3000 v1 标杆外观、5×千兆网口与 Wi-Fi 6 核心特性演示'
                : '正在播放：ClawWiFi M3000 v1 机身 360° 真实 3D 细节旋转展示'}
            </span>
            <span className="text-emerald-400 font-semibold">1080P Full HD · 真实实机拍摄</span>
          </div>
        </div>

        {/* Part 3: Real Hardware Photo Gallery Grid (6 High-res Views on Clean Studio Stage) */}
        <div>
          <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <p className="text-xs font-mono text-[#00f2fe] mb-1 flex items-center gap-1.5">
                <Camera className="w-3.5 h-3.5" />
                <span>实拍真机画廊 · 做工与内部主板拆解细节</span>
              </p>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                ClawWiFi M3000 v1 实拍全景图库
              </h3>
            </div>
            <span className="text-xs text-slate-400 font-mono">
              全视角高清实拍 · 点击任意卡片即可全屏放大检视
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {REAL_HARDWARE_PHOTOS.map((photo, idx) => (
              <div
                key={photo.id}
                onClick={() => setLightboxIdx(idx)}
                className="group bg-[#111b2e]/90 border border-slate-800 hover:border-cyan-500/50 rounded-xl overflow-hidden cursor-pointer transition-all duration-200 flex flex-col justify-between"
              >
                <div
                  className={`aspect-[16/10] relative overflow-hidden flex items-center justify-center p-4 border-b border-slate-800/80 ${
                    photo.isDarkStage ? 'bg-[#040814]' : 'bg-white'
                  }`}
                >
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-slate-950/85 text-[10px] font-mono text-slate-200 border border-slate-800">
                    0{idx + 1}
                  </div>
                  <div className="absolute top-2.5 right-2.5 p-1.5 rounded-lg bg-slate-950/85 text-slate-300 group-hover:text-[#00f2fe] border border-slate-800 transition-colors">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>
                <div className="p-4 space-y-1.5 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-display text-sm font-bold text-white group-hover:text-[#00f2fe] transition-colors">
                      {photo.title}
                    </h4>
                    <p className="text-[11px] font-mono text-cyan-400/85 mt-0.5">{photo.subtitle}</p>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed pt-1">
                    {photo.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Part 4: 3 Real-World Application Scenario Cards */}
        <div>
          <p className="text-xs font-mono text-slate-400 mb-4">
            三大典型落地应用场景 · 从移动出行到工业无人值守现场
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {APPLICATION_SCENARIOS.map((sc) => (
              <div
                key={sc.title}
                className="bg-[#111b2e]/85 backdrop-blur-sm border border-slate-800 hover:border-slate-700 rounded-xl p-6 flex flex-col justify-between gap-4 transition-colors"
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

      {/* Lightbox Fullscreen Image Modal with Prev/Next Navigation */}
      {lightboxPhoto && lightboxIdx !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-[#111b2e] border border-cyan-500/40 rounded-2xl w-full max-w-4xl overflow-hidden shadow-2xl relative">
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-800 bg-slate-900/90">
              <div>
                <p className="text-xs font-mono text-[#00f2fe] mb-0.5">
                  视角 0{lightboxIdx + 1} / 0{REAL_HARDWARE_PHOTOS.length} · {lightboxPhoto.subtitle}
                </p>
                <h3 className="font-display text-base sm:text-lg font-bold text-white">
                  {lightboxPhoto.title}
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() =>
                    setLightboxIdx(
                      (lightboxIdx - 1 + REAL_HARDWARE_PHOTOS.length) % REAL_HARDWARE_PHOTOS.length
                    )
                  }
                  aria-label="上一张实拍图"
                  className="p-2 rounded-lg border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setLightboxIdx((lightboxIdx + 1) % REAL_HARDWARE_PHOTOS.length)}
                  aria-label="下一张实拍图"
                  className="p-2 rounded-lg border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setLightboxIdx(null)}
                  aria-label="关闭预览"
                  className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div
              className={`aspect-[16/10] flex items-center justify-center p-4 sm:p-6 ${
                lightboxPhoto.isDarkStage ? 'bg-[#040814]' : 'bg-white'
              }`}
            >
              <img
                src={lightboxPhoto.src}
                alt={lightboxPhoto.title}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="p-4 sm:p-5 bg-[#0d1525] border-t border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed">
              {lightboxPhoto.description}
            </div>
          </div>
        </div>
      )}

      {/* Hardware Enterprise & Direct Consultation Modal */}
      {showOrderModal && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="hardware-order-title"
        >
          <div className="bg-[#111b2e] border border-cyan-500/35 rounded-2xl w-full max-w-lg p-6 shadow-2xl relative">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-5">
              <div>
                <h3
                  id="hardware-order-title"
                  className="font-display text-lg font-bold text-white flex items-center gap-2"
                >
                  <span>ClawWiFi M3000 v1 标杆硬件咨询</span>
                  <span className="text-xs font-mono text-emerald-400">· 交流答疑</span>
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  MT7981B 双核 · Wi-Fi 6 AX3000 · 5×全千兆网口 · 预装认证版 chaWrt
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
                支持开具增值税专用发票 · 批量 10 台以上支持企业 Portal 认证界面与专属 VPN 预烧录定制
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
