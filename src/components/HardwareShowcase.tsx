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
  { id: 'video', label: '🎥 展机实录', tag: '3D 旋转' },
  { id: 'front', label: '📸 正面外观', tag: '散热鳍片' },
  { id: 'ports', label: '🔌 接口背板', tag: 'RS232/485' },
  { id: 'side', label: '📶 5G 双 SIM', tag: '蜂窝双卡' },
  { id: 'iso', label: '📐 3D 轴测', tag: '130×80mm' },
  { id: 'inner', label: '🔬 主板拆解', tag: 'PCB 实拍' },
];

interface GalleryPhotoItem {
  id: string;
  title: string;
  subtitle: string;
  src: string;
  description: string;
}

const REAL_HARDWARE_PHOTOS: GalleryPhotoItem[] = [
  {
    id: 'front',
    title: '正面全金属机壳与状态指示灯',
    subtitle: '加厚 CNC 铝合金导热机身 · 状态灯阵列',
    src: m3000FrontImg,
    description: '采用一体化加厚铝合金外壳，表面立体散热凹槽设计。正面配备 5G 信号、系统、Wi-Fi 与 5 端口以太网运行状态灯阵列。',
  },
  {
    id: 'ports',
    title: '5×千兆电口 + RS232/RS485 工业串口阵列',
    subtitle: '1 WAN + 4 LAN · 工业现场总线直连 PLC',
    src: m3000PortsImg,
    description: '标配 5 个全千兆以太网口（1 WAN + 4 LAN），2 路 RS232 串口与 1 路 RS485 凤凰端子现场总线，支持 DC 12V~65V 工业超宽压供电。',
  },
  {
    id: 'side',
    title: '高通 5G SA/NSA 双 SIM 卡槽与 SMA 射频天线柱',
    subtitle: '双卡双待毫秒级热备 · 4 根高增益蜂窝与 Wi-Fi 天线',
    src: m3000SideImg,
    description: '侧面标配双 SIM 卡卡槽，支持运营商热备与断线自动秒切；外置镀金 SMA 射频天线接口，支持高增益车载吸盘天线扩展。',
  },
  {
    id: 'iso',
    title: '3D 轴测整机立体紧凑工控形态',
    subtitle: '130 × 80 × 33 mm 精巧身躯 · 无风扇静音被动散热',
    src: m3000IsoImg,
    description: '工业级小巧体积，无论置于机柜导轨、房车内部还是桌面均极其紧凑。整机无风扇被动静音散热，杜绝积灰与风扇老化故障。',
  },
  {
    id: 'angle',
    title: '正面斜切工业质感与倒角细节',
    subtitle: '沉稳工业质感 · 抗震防静电',
    src: m3000FrontAngleImg,
    description: '全金属边角倒角精细打磨，内置防浪涌与 ESD 防静电元器件，支持车载电瓶点火瞬态高压与机房恶劣电磁环境。',
  },
  {
    id: 'inner',
    title: '内部核心主板 PCB 拆解实拍',
    subtitle: '高通 5G 基带模组 · MT7981B 处理核心 · 独立金属屏蔽罩',
    src: m3000InnerImg,
    description: '拆开机壳可见高集成度沉金主板，高通 5G 模组与主芯片均覆盖独立冲压金属屏蔽罩，辅以高性能固态滤波电容与硬件看门狗。',
  },
];

export const HardwareShowcase: React.FC<HardwareShowcaseProps> = ({ config, onCopy }) => {
  const [galleryView, setGalleryView] = useState<GalleryView>('video');
  const [activeVideo, setActiveVideo] = useState<'commercial' | 'showcase'>('commercial');
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [lightboxImg, setLightboxImg] = useState<GalleryPhotoItem | null>(null);

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
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Module Header */}
        <div className="max-w-3xl">
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

        {/* Part 1: Main Interactive Showcase + Industrial Spec Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Quick Multi-View Box */}
          <div className="lg:col-span-6 flex flex-col bg-[#111b2e]/90 border border-cyan-500/25 rounded-xl overflow-hidden">
            <div className="aspect-[4/3] bg-[#040814] relative overflow-hidden border-b border-slate-800 flex items-center justify-center p-3">
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

            {/* 6 Tabs */}
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

          {/* Right: Spec Matrix & Purchase Entry */}
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

              {/* Warranty & Rights */}
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

            {/* CTAs */}
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

        {/* Part 2: Dedicated Video Showcase Player */}
        <div id="hardware-video" className="bg-[#111b2e]/90 border border-cyan-500/30 rounded-2xl overflow-hidden shadow-2xl">
          <div className="p-5 sm:p-6 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-gradient-to-r from-slate-900 to-[#111b2e]">
            <div>
              <p className="text-xs font-mono text-[#00f2fe] mb-1 flex items-center gap-1.5">
                <Video className="w-3.5 h-3.5" />
                <span>官方硬件实机宣传大片 · 工业全景解析视频</span>
              </p>
              <h3 className="font-display text-lg sm:text-xl font-bold text-white">
                ClawWiFi M3000 v1 官方实景宣传大片与 3D 展机演示
              </h3>
            </div>
            <div className="flex items-center gap-2 p-1 bg-slate-900/90 rounded-lg border border-slate-800 shrink-0 self-start sm:self-auto">
              <button
                type="button"
                onClick={() => setActiveVideo('commercial')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer whitespace-nowrap ${
                  activeVideo === 'commercial'
                    ? 'bg-[#00f2fe] text-slate-950 font-bold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                🎬 官方商业宣传大片
              </button>
              <button
                type="button"
                onClick={() => setActiveVideo('showcase')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer whitespace-nowrap ${
                  activeVideo === 'showcase'
                    ? 'bg-[#00f2fe] text-slate-950 font-bold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                🎥 3D 360° 旋转展机
              </button>
            </div>
          </div>

          <div className="relative aspect-video max-h-[580px] bg-[#040814] flex items-center justify-center">
            <video
              key={activeVideo}
              src={activeVideo === 'commercial' ? '/videos/m3000_commercial.mp4' : '/videos/hardware_showcase.mp4'}
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
                ? '▶ 正在播放：ClawWiFi M3000 v1 旗舰工业外观、5G 蜂窝散热、RS232/485 现场总线与六大王牌特性全景演示'
                : '▶ 正在播放：ClawWiFi M3000 v1 全金属外壳 360° 真实 3D 细节旋转展示'}
            </span>
            <span className="text-emerald-400 font-semibold">1080P Full HD · 真实实机拍摄</span>
          </div>
        </div>

        {/* Part 3: Real Hardware Photo Gallery Grid (6 High-res Views) */}
        <div>
          <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <p className="text-xs font-mono text-[#00f2fe] mb-1 flex items-center gap-1.5">
                <Camera className="w-3.5 h-3.5" />
                <span>实拍真机画廊 · 工控做工与结构细节</span>
              </p>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                ClawWiFi M3000 v1 工业级工控实拍全景图库
              </h3>
            </div>
            <span className="text-xs text-slate-400 font-mono">
              全视角高清实拍 · 点击卡片即可放大查看超清细节
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {REAL_HARDWARE_PHOTOS.map((photo) => (
              <div
                key={photo.id}
                onClick={() => setLightboxImg(photo)}
                className="group bg-[#111b2e]/90 border border-slate-800 hover:border-cyan-500/50 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_-5px_rgba(0,242,254,0.15)] flex flex-col justify-between"
              >
                <div className="aspect-[16/10] bg-[#040814] relative overflow-hidden flex items-center justify-center p-3 border-b border-slate-800/80">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2.5 right-2.5 p-1.5 rounded-lg bg-black/60 text-slate-300 group-hover:text-[#00f2fe] group-hover:bg-slate-900 transition-colors">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>
                <div className="p-4 space-y-1.5">
                  <h4 className="font-display text-sm font-bold text-white group-hover:text-[#00f2fe] transition-colors">
                    {photo.title}
                  </h4>
                  <p className="text-[11px] font-mono text-cyan-400/80">{photo.subtitle}</p>
                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
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

      {/* Lightbox Fullscreen Image Modal */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-[#111b2e] border border-cyan-500/40 rounded-2xl w-full max-w-3xl overflow-hidden shadow-2xl relative animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-800 bg-slate-900/80">
              <div>
                <h3 className="font-display text-base sm:text-lg font-bold text-white">
                  {lightboxImg.title}
                </h3>
                <p className="text-xs font-mono text-[#00f2fe] mt-0.5">{lightboxImg.subtitle}</p>
              </div>
              <button
                type="button"
                onClick={() => setLightboxImg(null)}
                aria-label="关闭预览"
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="aspect-[16/10] bg-[#040814] flex items-center justify-center p-4 sm:p-6">
              <img
                src={lightboxImg.src}
                alt={lightboxImg.title}
                className="w-full h-full object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]"
              />
            </div>

            <div className="p-4 sm:p-5 bg-[#0d1525] border-t border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed">
              {lightboxImg.description}
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
