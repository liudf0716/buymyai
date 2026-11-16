import React, { useState } from 'react';
import {
  Download,
  Copy,
  Check,
  ExternalLink,
  BookOpen,
  Terminal,
  HardDrive,
  FileCode2,
} from 'lucide-react';
import {
  FIRMWARE_DEVICES,
  DOC_GUIDES,
  SiteConfig,
  FirmwareDevice,
  DocGuideTab,
} from '../data/chawrtData';

interface DownloadAndDocsSectionProps {
  config: SiteConfig;
  onCopy: (text: string, label: string) => void;
}

export const DownloadAndDocsSection: React.FC<DownloadAndDocsSectionProps> = ({
  config,
  onCopy,
}) => {
  const [selectedDeviceId, setSelectedDeviceId] =
    useState<FirmwareDevice['id']>('clawwifi_m3000_v1');
  const [activeDocId, setActiveDocId] = useState<DocGuideTab['id']>('flash');
  const [copiedVersion, setCopiedVersion] = useState(false);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const selectedDevice =
    FIRMWARE_DEVICES.find((d) => d.id === selectedDeviceId) || FIRMWARE_DEVICES[0];
  const activeDoc = DOC_GUIDES.find((doc) => doc.id === activeDocId) || DOC_GUIDES[0];

  const handleCopyVersion = () => {
    const versionText = `${selectedDevice.version} (Build ${selectedDevice.releaseDate})`;
    onCopy(versionText, '已复制 chaWrt 固件版本号与构建日期');
    setCopiedVersion(true);
    setTimeout(() => setCopiedVersion(false), 1800);
  };

  const handleLocalCopy = (text: string, label: string, key: string) => {
    onCopy(text, label);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 1800);
  };

  return (
    <>
      {/* Module 6: Channel B - Pure Open-Source Firmware Download Matrix */}
      <section id="downloads" className="py-16 px-4 sm:px-6 border-b border-slate-800/80 bg-[#0b1220]/70">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div className="max-w-3xl">
              <p className="text-xs font-mono text-purple-400 mb-2">
                通道 B · 纯净开源固件分发站 · chaWrt Releases
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
                免费下载 chaWrt 开源固件（支持 M3000 v1 及主流 MT7981 机型）
              </h2>
              <p className="text-sm text-slate-400 leading-relaxed">
                面向极客与 DIY 刷机玩家提供 360T7、H3C NX30 Pro、锐捷 X30E、Cudy WR3000 / M3000 与 ClawWiFi M3000 v1 的 Factory / Sysupgrade 镜像矩阵与 SHA256 校验，通过国内高速百度网盘通道与 GitHub Releases 分发。
              </p>
            </div>
            <a
              href={config.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-slate-700 hover:border-purple-400/60 bg-slate-900/70 hover:bg-slate-800 text-xs font-semibold text-slate-200 transition-colors whitespace-nowrap shrink-0 self-start md:self-auto"
            >
              <span>访问 GitHub Releases 源码仓库</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#00f2fe]" />
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left: Device Selector Sidebar */}
            <div className="lg:col-span-4 space-y-2.5">
              <p className="text-xs font-mono text-slate-400 mb-3">选择目标硬件型号矩阵</p>
              {FIRMWARE_DEVICES.map((device) => {
                const isSelected = device.id === selectedDevice.id;
                return (
                  <button
                    key={device.id}
                    type="button"
                    onClick={() => setSelectedDeviceId(device.id)}
                    className={`w-full text-left p-4 rounded-xl border transition-colors cursor-pointer ${
                      isSelected
                        ? 'bg-[#111b2e] border-cyan-400/60 text-white'
                        : 'bg-[#0f172a]/70 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-[#111b2e]/50'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="font-display text-sm font-bold">{device.name}</span>
                      <HardDrive
                        className={`w-4 h-4 shrink-0 ${
                          isSelected ? 'text-[#00f2fe]' : 'text-slate-500'
                        }`}
                      />
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">{device.tierLabel}</p>
                  </button>
                );
              })}

              {/* Baidu Netdisk Mirror Info (subordinate to firmware downloads) */}
              <div className="mt-4 p-4 rounded-xl bg-[#111b2e] border border-slate-800 space-y-3">
                <div>
                  <p className="text-xs font-semibold text-white">chaWrt 固件国内高速镜像</p>
                  <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                    包含全机型 Factory / Sysupgrade 镜像包、SHA256SUMS 校验文件与 U-Boot 刷机指引。
                  </p>
                </div>

                <div className="flex items-center justify-between gap-2 px-3 py-2 rounded-lg bg-[#0b1220] border border-slate-800">
                  <div className="text-xs">
                    <span className="text-slate-400">提取码：</span>
                    <span className="font-mono font-bold text-[#00f2fe] tabular-nums">
                      {config.baiduCode}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      handleLocalCopy(config.baiduCode, '已复制提取码', 'baidu-code')
                    }
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-[11px] font-medium text-slate-200 transition-colors cursor-pointer"
                  >
                    {copiedKey === 'baidu-code' ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400">已复制</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>复制提取码</span>
                      </>
                    )}
                  </button>
                </div>

                <a
                  href={config.baiduUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg bg-[#00f2fe] hover:bg-sky-300 text-slate-950 text-xs font-bold transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span>前往下载 chaWrt 固件合集</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>
              </div>
            </div>

            {/* Right: Firmware Details Card */}
            <div className="lg:col-span-8 bg-[#111b2e]/90 border border-slate-800 rounded-xl p-6 sm:p-8 space-y-6">
              {/* Top Header + Dedicated Copy Version Button */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-800">
                <div>
                  <p className="text-xs font-mono text-[#00f2fe] mb-1">chawrt 固件版本</p>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                      {selectedDevice.name} · {selectedDevice.version}
                    </h3>
                    <span className="text-xs font-mono text-slate-400 tabular-nums">
                      构建日期 {selectedDevice.releaseDate}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyVersion}
                  title="复制当前固件版本号与构建日期，方便反馈与技术支持"
                  className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#0b1220] hover:bg-slate-800 border border-slate-700 hover:border-cyan-400/60 text-xs font-medium text-slate-200 transition-colors cursor-pointer whitespace-nowrap shrink-0 self-start sm:self-auto"
                >
                  {copiedVersion ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">已复制版本信息</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#00f2fe]" />
                      <span>复制版本与构建日期</span>
                    </>
                  )}
                </button>
              </div>

              {/* Hardware & Kernel Metadata Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-3.5 rounded-lg bg-[#0b1220] border border-slate-800/80">
                  <p className="text-slate-400 mb-1">处理器 / 硬件特性</p>
                  <p className="font-mono text-slate-200 font-medium">{selectedDevice.soc}</p>
                </div>
                <div className="p-3.5 rounded-lg bg-[#0b1220] border border-slate-800/80">
                  <p className="text-slate-400 mb-1">内存与闪存规格</p>
                  <p className="font-mono text-slate-200 font-medium">{selectedDevice.flashRam}</p>
                </div>
                <div className="p-3.5 rounded-lg bg-[#0b1220] border border-slate-800/80">
                  <p className="text-slate-400 mb-1">Linux 内核版本</p>
                  <p className="font-mono text-emerald-400 font-medium">{selectedDevice.kernel}</p>
                </div>
                <div className="p-3.5 rounded-lg bg-[#0b1220] border border-slate-800/80">
                  <p className="text-slate-400 mb-1">现代软件包管理器</p>
                  <p className="font-mono text-[#00f2fe] font-medium">
                    {selectedDevice.pkgManager}（已废除 opkg）
                  </p>
                </div>
              </div>

              {/* Firmware Image List */}
              <div className="space-y-3">
                <p className="text-xs font-mono text-slate-400">
                  可用固件镜像与 SHA256 校验码（百度网盘高速通道）
                </p>
                {selectedDevice.images.map((img, idx) => {
                  const shaKey = `${selectedDevice.id}-${idx}`;
                  return (
                    <div
                      key={img.filename}
                      className="p-4 rounded-xl bg-[#0b1220] border border-slate-800 flex flex-col gap-3"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <FileCode2 className="w-4 h-4 text-[#00f2fe] shrink-0" />
                            <span className="text-sm font-semibold text-white">{img.type}</span>
                            <span className="text-xs font-mono text-slate-400 tabular-nums">
                              ({img.size})
                            </span>
                          </div>
                          <p className="text-xs text-slate-400 mt-1">{img.note}</p>
                        </div>

                        <a
                          href={config.baiduUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg bg-sky-600/90 hover:bg-sky-500 text-white text-xs font-semibold transition-colors whitespace-nowrap shrink-0 self-start sm:self-auto"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>下载固件</span>
                        </a>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2.5 border-t border-slate-800/80 text-[11px] font-mono">
                        <div className="truncate text-slate-300" title={img.filename}>
                          文件：<span className="text-slate-100">{img.filename}</span>
                        </div>
                        <button
                          type="button"
                          onClick={() =>
                            handleLocalCopy(img.sha256, `已复制 ${img.type} SHA256`, shaKey)
                          }
                          className="inline-flex items-center gap-1.5 text-slate-400 hover:text-[#00f2fe] transition-colors cursor-pointer shrink-0 self-start sm:self-auto"
                        >
                          {copiedKey === shaKey ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                              <span className="text-emerald-400">SHA256 已复制</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span>SHA256: {img.sha256.slice(0, 14)}...</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrated Knowledge Base Documentation Hub */}
      <section id="docs" className="py-16 px-4 sm:px-6 border-b border-slate-800/80">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div className="max-w-2xl">
              <p className="text-xs font-mono text-[#00f2fe] mb-2">知识库文档中心 · Documentation</p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
                从三步刷机到小茶 AI 联调与 APK 3.x 实战指南
              </h2>
              <p className="text-sm text-slate-400 leading-relaxed">
                面向 DIY 玩家与企业运维团队的标准化参考手册，涵盖刷机校验、VPS 自动化联调与内核态流表观测。
              </p>
            </div>

            {/* Doc Tabs */}
            <div className="flex flex-wrap gap-1.5 p-1 bg-[#111b2e] border border-slate-800 rounded-lg self-start md:self-auto">
              {DOC_GUIDES.map((tab) => {
                const isActive = tab.id === activeDoc.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveDocId(tab.id)}
                    className={`px-3.5 py-2 rounded-md text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                      isActive
                        ? 'bg-[#00f2fe] text-slate-950 font-bold'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                    }`}
                  >
                    {tab.title}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="bg-[#111b2e]/90 border border-slate-800 rounded-xl p-6 sm:p-8">
            <div className="flex items-center gap-2.5 pb-5 border-b border-slate-800 mb-6">
              <BookOpen className="w-5 h-5 text-[#00f2fe] shrink-0" />
              <div>
                <h3 className="font-display text-lg font-bold text-white">{activeDoc.title}</h3>
                <p className="text-xs text-slate-400 mt-0.5">{activeDoc.subtitle}</p>
              </div>
            </div>

            <div className="space-y-6">
              {activeDoc.steps.map((step, idx) => {
                const codeKey = `doc-${activeDoc.id}-${idx}`;
                return (
                  <div key={step.heading} className="space-y-2.5">
                    <h4 className="text-sm font-semibold text-white">{step.heading}</h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {step.description}
                    </p>
                    {step.code && (
                      <div className="relative bg-[#0b1220] border border-slate-800 rounded-lg p-4">
                        <div className="flex items-center justify-between gap-2 mb-2 pb-2 border-b border-slate-800/70">
                          <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                            <Terminal className="w-3.5 h-3.5 text-[#00f2fe]" />
                            <span>参考指令 / 范例</span>
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              handleLocalCopy(step.code || '', '已复制参考指令', codeKey)
                            }
                            className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-400 hover:text-[#00f2fe] transition-colors cursor-pointer"
                          >
                            {copiedKey === codeKey ? (
                              <>
                                <Check className="w-3 h-3 text-emerald-400" />
                                <span className="text-emerald-400">已复制</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3 h-3" />
                                <span>复制</span>
                              </>
                            )}
                          </button>
                        </div>
                        <pre className="font-mono text-xs text-cyan-300/90 overflow-x-auto whitespace-pre-wrap leading-relaxed">
                          {step.code}
                        </pre>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
