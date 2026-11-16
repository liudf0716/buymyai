import React, { useState } from 'react';
import {
  ChevronDown,
  ExternalLink,
  MessageSquare,
  X,
  Copy,
  Globe,
} from 'lucide-react';
import { FAQ_ITEMS, SiteConfig } from '../data/chawrtData';
import qqGroupQrImg from '../assets/images/qq-group.jpg';

interface FaqAndFooterProps {
  config: SiteConfig;
  onCopy: (text: string, label: string) => void;
  onScrollTo: (id: string) => void;
}

export const FaqAndFooter: React.FC<FaqAndFooterProps> = ({
  config,
  onCopy,
  onScrollTo,
}) => {
  const [openIndices, setOpenIndices] = useState<number[]>([0, 1]);
  const [showCommunityModal, setShowCommunityModal] = useState(false);

  const toggleFaq = (idx: number) => {
    setOpenIndices((prev) =>
      prev.includes(idx) ? prev.filter((item) => item !== idx) : [...prev, idx]
    );
  };

  return (
    <>
      {/* Module 7: FAQ Accordion */}
      <section id="faq" className="py-16 px-4 sm:px-6 border-b border-slate-800/80 bg-[#0b1220]/50">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <p className="text-xs font-mono text-[#00f2fe] mb-2">常见问题解答 · FAQ</p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
              明确工业级定位，理清商业购买与开源边界
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              关于 ClawWiFi M3000 v1 5G 移动网关硬件规格、通道 A/B 选择以及 xfrpc / APK 3.x 架构的核心答疑。
            </p>
          </div>

          <div className="space-y-3">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openIndices.includes(idx);
              return (
                <div
                  key={item.q}
                  className="bg-[#111b2e]/90 border border-slate-800 rounded-xl overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                    className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-slate-800/30 transition-colors cursor-pointer"
                  >
                    <span className="font-display text-sm sm:text-base font-semibold text-white">
                      {item.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#00f2fe]' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Module 8: Official Standard Footer */}
      <footer className="py-12 px-4 sm:px-6 bg-[#0b1220]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800/80">
            <div className="md:col-span-5 space-y-3">
              <a
                href="#top"
                onClick={(e) => {
                  e.preventDefault();
                  onScrollTo('top');
                }}
                className="flex items-center gap-2.5 font-display text-lg font-bold text-white group"
              >
                <img
                  src="/favicon.svg"
                  alt="chaWrt Logo"
                  className="w-7 h-7 rounded-lg shadow-sm shadow-teal-500/30 group-hover:scale-105 transition-transform"
                />
                <span>chaWrt &amp; ClawWiFi</span>
              </a>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
                基于 Linux 6.12 LTS、内核级 eBPF 与 DeepSeek 小茶助手打造的下一代开源智能路由器系统，与 ClawWiFi M3000 v1 5G 工业级移动网关协同构建完整产品矩阵。
              </p>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-mono text-slate-400">
                <a
                  href={config.developerSiteUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-[#00f2fe] hover:underline"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>{config.developerSiteUrl}</span>
                </a>
                <span className="text-slate-600">·</span>
                <span>{config.latestVersion}</span>
              </div>
            </div>

            <div className="md:col-span-3 space-y-2.5 text-xs">
              <p className="font-semibold text-slate-200">站点导航</p>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a
                    href="#comparison"
                    onClick={(e) => {
                      e.preventDefault();
                      onScrollTo('comparison');
                    }}
                    className="hover:text-white transition-colors"
                  >
                    架构代差对比
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    onClick={(e) => {
                      e.preventDefault();
                      onScrollTo('features');
                    }}
                    className="hover:text-white transition-colors"
                  >
                    小茶 AI 与核心技术
                  </a>
                </li>
                <li>
                  <a
                    href="#hardware"
                    onClick={(e) => {
                      e.preventDefault();
                      onScrollTo('hardware');
                    }}
                    className="hover:text-white transition-colors"
                  >
                    M3000 v1 5G 工业网关
                  </a>
                </li>
                <li>
                  <a
                    href="#benchmarks"
                    onClick={(e) => {
                      e.preventDefault();
                      onScrollTo('benchmarks');
                    }}
                    className="hover:text-white transition-colors"
                  >
                    83 项实机测试报告
                  </a>
                </li>
                <li>
                  <a
                    href="#downloads"
                    onClick={(e) => {
                      e.preventDefault();
                      onScrollTo('downloads');
                    }}
                    className="hover:text-white transition-colors"
                  >
                    开源固件下载站
                  </a>
                </li>
              </ul>
            </div>

            <div className="md:col-span-4 space-y-2.5 text-xs">
              <p className="font-semibold text-slate-200">官方交流渠道与开源社区</p>
              <ul className="space-y-2.5 text-slate-400">
                <li>
                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setShowCommunityModal(true)}
                      className="inline-flex items-center gap-1.5 text-[#00f2fe] hover:text-sky-300 font-medium transition-colors cursor-pointer"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>官方技术交流 QQ 群：{config.qqGroup}（扫码加入）</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => onCopy(config.qqGroup, '已复制官方技术交流 QQ 群号')}
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-[11px] font-mono text-slate-200 transition-colors cursor-pointer"
                    >
                      <Copy className="w-3 h-3" />
                      <span>复制</span>
                    </button>
                  </div>
                </li>
                <li>
                  <a
                    href={config.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                  >
                    <span>GitHub 开源仓库与 Issue 反馈</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a
                    href={config.telegramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                  >
                    <span>Telegram 技术交流频道</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a
                    href={config.bilibiliLiveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                  >
                    <span>Bilibili 作者直播间与视频教程</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-500">
            <p>
              © {new Date().getFullYear()} chaWrt &amp; ClawWiFi Project · Official Developer Portal:{' '}
              <a
                href={config.developerSiteUrl}
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
              >
                buymyai.ai.studio
              </a>
            </p>
            <p className="font-mono text-slate-500">
              遵循 GPLv2 / MIT 开源协议分发 · xfrpc 已合并入 OpenWrt 官方库
            </p>
          </div>
        </div>
      </footer>

      {/* Official QQ Group QR Modal */}
      {showCommunityModal && (
        <div
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="community-modal-title"
        >
          <div className="bg-[#111b2e] border border-cyan-500/30 rounded-xl w-full max-w-sm p-6 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-5">
              <div>
                <h3 id="community-modal-title" className="font-display text-base font-bold text-white">
                  chaWrt 官方技术交流 QQ 群
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  M3000 v1 硬件售后 · 固件刷机答疑 · eBPF 技术交流
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowCommunityModal(false)}
                aria-label="关闭弹窗"
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4 text-center">
              <div className="bg-white p-3 rounded-xl inline-block">
                <img
                  src={qqGroupQrImg}
                  alt="chaWrt 官方技术交流 QQ 群二维码"
                  className="w-48 h-48 object-contain"
                />
              </div>

              <div className="flex items-center justify-between gap-2 px-3.5 py-2.5 rounded-lg bg-[#0b1220] border border-slate-800 text-xs">
                <span className="text-slate-400">
                  官方技术交流群：<strong className="font-mono text-[#00f2fe]">{config.qqGroup}</strong>
                </span>
                <button
                  type="button"
                  onClick={() => onCopy(config.qqGroup, '已复制官方技术交流 QQ 群号')}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors cursor-pointer"
                >
                  <Copy className="w-3 h-3" />
                  <span>复制群号</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
