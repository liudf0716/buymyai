import React, { useState } from 'react';
import {
  Cpu,
  Terminal,
  Sparkles,
  Video,
  ShieldCheck,
  Globe,
  Wifi,
  Zap,
  Compass,
  CheckCircle2,
  MessageSquareCode,
  Copy,
  Check,
} from 'lucide-react';
import { COPILOT_SCENARIOS, FOUR_CORE_SERVICES } from '../data/chawrtData';
import ebpfArchImg from '../assets/images/chawrt_ebpf_architecture_1794710240032.jpg';

interface TechFeaturesBentoProps {
  onCopy?: (text: string, label: string) => void;
}

export const TechFeaturesBento: React.FC<TechFeaturesBentoProps> = ({ onCopy }) => {
  const [archImageError, setArchImageError] = useState(false);
  const [copilotVideoMissing, setCopilotVideoMissing] = useState(false);
  const [activeReplayIdx, setActiveReplayIdx] = useState(0);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyCommand = (text: string, label: string, id: string) => {
    const cleanText = text.replace(/^[“"]|[”"]$/g, '');
    if (onCopy) {
      onCopy(cleanText, label);
    } else if (navigator.clipboard) {
      navigator.clipboard.writeText(cleanText);
    }
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1800);
  };

  const renderServiceIcon = (id: 'portal' | 'xfrpc' | 'xkcptun' | 'xdns') => {
    switch (id) {
      case 'portal':
        return <Wifi className="w-5 h-5 text-emerald-400 shrink-0" />;
      case 'xfrpc':
        return <Globe className="w-5 h-5 text-purple-400 shrink-0" />;
      case 'xkcptun':
        return <Zap className="w-5 h-5 text-amber-400 shrink-0" />;
      case 'xdns':
        return <Compass className="w-5 h-5 text-[#00f2fe] shrink-0" />;
    }
  };

  const activeReplay = COPILOT_SCENARIOS[activeReplayIdx];

  return (
    <section id="features" className="py-16 px-4 sm:px-6 border-b border-slate-800/80">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* ========================================================================= */}
        {/* SECTION 1: XIAOCHA AI COPILOT - THE CORE BRAIN & UNIFIED HUB OF CHAWRT   */}
        {/* ========================================================================= */}
        <div id="copilot-core" className="space-y-8">
          <div className="max-w-3xl">
            <p className="text-xs font-mono text-[#00f2fe] mb-2">
              AI-Native 架构核心 · 系统的超级大脑与交互中枢
            </p>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
              以「小茶 AI 助手」为唯一智能中枢，彻底接管系统全生命周期运维
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              <strong className="text-white">
                chaWrt 彻底颠覆了传统路由器上百个层级深奥菜单与高危命令行的老旧范式。
              </strong>{' '}
              系统所有自研服务配置、出海加速部署、内核流控微调与安全基线体检，
              <span className="text-[#00f2fe] font-semibold">
                全部通过小茶助手自然语言一句话自动闭环实现
              </span>
              ，让网络配置从“专业工程师的苦差事”走向“自然语言吩咐即搞定”。
            </p>
          </div>

          {/* XiaoCha Copilot 4 Core Killer Superpowers Bento */}
          <div className="bg-[#111b2e]/90 border border-cyan-500/30 rounded-xl p-6 sm:p-8 backdrop-blur-md">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-800 mb-6">
              <div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-white flex items-center gap-2.5">
                  <Sparkles className="w-5 h-5 text-[#00f2fe] shrink-0" />
                  <span>小茶 AI 助手 (ClawWRT Copilot) 4 大实装杀手级核心能力</span>
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  DeepSeek Agent 架构 · 原生调用底层 ubus/rpcd 工具链 · 具备 60 秒安全失联回滚快照保护
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 shrink-0 tabular-nums">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>83 项端到端全自动实机测试 100% 验证通过</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-[#0b1220] border border-slate-800 hover:border-cyan-500/40 rounded-xl p-5 flex flex-col justify-between gap-4 transition-colors">
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between text-xs font-mono font-semibold text-[#00f2fe]">
                    <span className="flex items-center gap-2">
                      <MessageSquareCode className="w-4 h-4 shrink-0" />
                      <span>01. 跨两端 VPS 部署向导</span>
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    只需提供远端 VPS IP，小茶自动完成 Ed25519 免密 SSH 公钥注入、加速服务端安装与防火墙重定向规则自建。
                  </p>
                </div>
                <div className="pt-3 text-[11px] font-mono text-slate-400 border-t border-slate-800/80">
                  一键两端联调 · 5 分钟零基础上线
                </div>
              </div>

              <div className="bg-[#0b1220] border border-slate-800 hover:border-purple-500/40 rounded-xl p-5 flex flex-col justify-between gap-4 transition-colors">
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between text-xs font-mono font-semibold text-purple-400">
                    <span className="flex items-center gap-2">
                      <Zap className="w-4 h-4 shrink-0" />
                      <span>02. 端口跳跃防失联预检</span>
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    开启 UDP 动态端口跳跃前，小茶自动预检服务器防火墙 REDIRECT 规则池是否全部放行，彻底杜绝切错端口断网。
                  </p>
                </div>
                <div className="pt-3 text-[11px] font-mono text-slate-400 border-t border-slate-800/80">
                  服务端规则池预检 · 0 断连风险
                </div>
              </div>

              <div className="bg-[#0b1220] border border-slate-800 hover:border-emerald-500/40 rounded-xl p-5 flex flex-col justify-between gap-4 transition-colors">
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between text-xs font-mono font-semibold text-emerald-400">
                    <span className="flex items-center gap-2">
                      <Cpu className="w-4 h-4 shrink-0" />
                      <span>03. 芯片温度遥测与预警</span>
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    原生调用 <code className="text-[#00f2fe]">get_temperature</code> 毫秒级读取 MT7981 CPU 与 MT7976 双频射频传感器并输出健康诊断。
                  </p>
                </div>
                <div className="pt-3 text-[11px] font-mono text-emerald-400 border-t border-slate-800/80 tabular-nums">
                  实测 CPU 67°C · 2.4G 50°C · 5G 50°C
                </div>
              </div>

              <div className="bg-[#0b1220] border border-slate-800 hover:border-sky-500/40 rounded-xl p-5 flex flex-col justify-between gap-4 transition-colors">
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between text-xs font-mono font-semibold text-sky-400">
                    <span className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 shrink-0" />
                      <span>04. 安全基线与 60s 自愈</span>
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    全盘审计 WAN 口 SSH 暴露与 SSRF 内网探测风险，所有高危网络更改受安全沙箱与 60 秒失联自动回滚保护。
                  </p>
                </div>
                <div className="pt-3 text-[11px] font-mono text-slate-400 border-t border-slate-800/80 tabular-nums">
                  安全体检 98 分 · 60s 防失联回滚
                </div>
              </div>
            </div>
          </div>

          {/* XiaoCha Copilot Dedicated 3-Minute Real Operational Demo Video / Interactive Console */}
          <div
            id="copilot-video"
            className="bg-[#111b2e]/95 border border-cyan-500/35 rounded-xl overflow-hidden"
          >
            <div className="p-5 sm:p-6 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#0b1220]">
              <div>
                <p className="text-xs font-mono text-[#00f2fe] mb-1 flex items-center gap-1.5">
                  <Video className="w-3.5 h-3.5" />
                  <span>实机真实操作演示 · LuCI 控制台原生交互 · 自然语言运维闭环</span>
                </p>
                <h3 className="font-display text-lg sm:text-xl font-bold text-white">
                  小茶 AI 助手 (ClawWRT Copilot) 真实操作与智能运维全流程演示
                </h3>
              </div>
              <div className="text-xs font-mono text-slate-300 shrink-0 tabular-nums">
                <span className="text-emerald-400 font-semibold">原生 LuCI 控制台</span>
                <span className="mx-2 text-slate-600">·</span>
                <span>4 大核心场景实录</span>
              </div>
            </div>

            {!copilotVideoMissing ? (
              <div className="relative aspect-video max-h-[540px] bg-[#040814] flex items-center justify-center">
                <video
                  src="/videos/xiaoca_copilot_demo.mp4"
                  controls
                  playsInline
                  onError={() => setCopilotVideoMissing(true)}
                  className="w-full h-full object-contain"
                />
              </div>
            ) : (
              /* Graceful High-Craft Interactive LuCI Copilot Terminal + Real Video Split when xiaoca_copilot_demo.mp4 is not in /public/videos */
              <div className="grid grid-cols-1 lg:grid-cols-12 bg-[#070d19]">
                <div className="lg:col-span-5 p-5 sm:p-6 border-b lg:border-b-0 lg:border-r border-slate-800 flex flex-col justify-between gap-4">
                  <div className="space-y-3">
                    <p className="text-xs font-mono text-slate-400">
                      点击切换小茶助手实机运维场景（支持一键复制中文指令）：
                    </p>
                    <div className="space-y-2">
                      {COPILOT_SCENARIOS.map((sc, idx) => {
                        const isSelected = idx === activeReplayIdx;
                        return (
                          <button
                            key={sc.id}
                            type="button"
                            onClick={() => setActiveReplayIdx(idx)}
                            className={`w-full text-left p-3.5 rounded-lg border transition-colors cursor-pointer ${
                              isSelected
                                ? 'bg-[#111b2e] border-cyan-400/60 text-white'
                                : 'bg-[#0b1220]/70 border-slate-800 text-slate-300 hover:border-slate-700'
                            }`}
                          >
                            <div className="flex items-center justify-between text-[11px] font-mono mb-1">
                              <span className={isSelected ? 'text-[#00f2fe]' : 'text-slate-400'}>
                                0{idx + 1} · {sc.tag}
                              </span>
                              <span className="text-slate-500 tabular-nums">{sc.latencyLabel}</span>
                            </div>
                            <p className="text-xs font-medium text-slate-100">“{sc.prompt}”</p>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-lg bg-[#0b1220] border border-slate-800 text-xs text-slate-300 leading-relaxed">
                    <span className="font-mono text-[#00f2fe] font-semibold">诊断说明：</span>
                    {activeReplay.diagnosis}
                  </div>
                </div>

                <div className="lg:col-span-7 p-5 sm:p-6 flex flex-col justify-between gap-4 bg-[#050912] font-mono">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-800 text-xs">
                      <span className="text-slate-300 flex items-center gap-2">
                        <Terminal className="w-4 h-4 text-[#00f2fe]" />
                        <span>root@chaWrt-M3000:~# luci-app-clawwrt-copilot</span>
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          handleCopyCommand(
                            activeReplay.prompt,
                            '已复制小茶助手演示指令',
                            `replay-${activeReplay.id}`
                          )
                        }
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 border border-slate-700 text-[11px] text-slate-200 transition-colors cursor-pointer"
                      >
                        {copiedId === `replay-${activeReplay.id}` ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-400" />
                            <span className="text-emerald-400">已复制指令</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3 text-[#00f2fe]" />
                            <span>复制该条中文指令</span>
                          </>
                        )}
                      </button>
                    </div>

                    <div className="p-3.5 rounded-lg bg-[#0b1220] border border-slate-800/90 space-y-2">
                      <p className="text-[11px] text-slate-400">用户输入 (User Prompt):</p>
                      <p className="text-xs sm:text-sm font-sans font-semibold text-white">
                        “{activeReplay.prompt}”
                      </p>
                    </div>

                    <div className="p-4 rounded-lg bg-[#0b1220] border border-cyan-500/25 space-y-3">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-[#00f2fe]">小茶 AI 助手执行回执 (ubus / rpcd)</span>
                        <span className="text-emerald-400 tabular-nums">
                          {activeReplay.latencyLabel} · PASS
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm font-sans font-medium text-emerald-300">
                        {activeReplay.actionSummary}
                      </p>
                      <pre className="text-xs text-cyan-300/90 overflow-x-auto whitespace-pre-wrap leading-relaxed pt-2 border-t border-slate-800/80">
                        {activeReplay.terminalOutput}
                      </pre>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-400 tabular-nums">
                    <span>安全机制：uci-snapshot 60s 自动失联回滚守护已启用</span>
                    <span className="text-emerald-400">状态：实机验证 100% 通过</span>
                  </div>
                </div>
              </div>
            )}

            <div className="p-4 sm:p-5 bg-[#0d1525] border-t border-slate-800 text-xs text-slate-400 flex flex-wrap items-center justify-between gap-3 font-mono">
              <span>
                涵盖：中文自然排障 · 实时温度遥测 · VPS 免密公钥部署 · 端口跳跃 REDIRECT 规则池预检 · 安全基线自愈
              </span>
              <span className="text-[#00f2fe] font-semibold">纯原生 LuCI 界面 · 真实生产固件实装</span>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 2: THE 4 PILLARS - FOUR CORE NETWORK SERVICES OF CHAWRT           */}
        {/* ========================================================================= */}
        <div id="services" className="space-y-8 pt-6 border-t border-slate-800/80">
          <div className="max-w-3xl">
            <p className="text-xs font-mono text-purple-400 mb-2">
              chaWrt 四大核心自研王牌服务 · 纯 C 与 TC-eBPF 架构深度解析
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
              门户认证、内网穿透、网络加速与智能分流：硬核自研协议栈
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              四大核心网络服务全部采用轻量纯 C 语言与 Linux TC-eBPF 重构，其中三大组件（apfree-wifidog、xfrpc、xkcptun）经全球开源社区严格代码审查已正式合并入 OpenWrt 官方软件包源码库（Official Packages Feed），并全量接入小茶 AI 助手统一管控。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FOUR_CORE_SERVICES.map((srv, idx) => {
              const cmdCopyId = `srv-cmd-${srv.id}`;
              return (
                <div
                  key={srv.id}
                  className="bg-[#111b2e]/90 border border-slate-800 hover:border-cyan-500/35 rounded-xl p-6 sm:p-7 flex flex-col justify-between gap-6 transition-colors"
                >
                  <div className="space-y-5">
                    {/* Service Header */}
                    <div className="flex items-start justify-between gap-3 pb-4 border-b border-slate-800">
                      <div className="flex items-start gap-3">
                        <div className="p-2.5 rounded-lg bg-[#0b1220] border border-slate-800 mt-0.5">
                          {renderServiceIcon(srv.id)}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-0.5">
                            <span>0{idx + 1}</span>
                            <span>·</span>
                            <span className="text-[#00f2fe]">{srv.tag}</span>
                          </div>
                          <h3 className="font-display text-lg font-bold text-white">{srv.title}</h3>
                          <p className="text-xs font-mono text-slate-300 mt-0.5">{srv.serviceName}</p>
                        </div>
                      </div>
                    </div>

                    {/* Key Benchmark Metric Row (Clean hairline row instead of nested card) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-4 border-b border-slate-800/80 font-mono tabular-nums">
                      <div>
                        <p className="text-[11px] font-sans text-slate-400">实机压测性能指标</p>
                        <p className="text-sm font-bold text-emerald-400 mt-0.5">{srv.metric}</p>
                      </div>
                      <div>
                        <p className="text-[11px] font-sans text-slate-400">底层技术栈</p>
                        <p className="text-xs text-slate-200 mt-1">{srv.techStack}</p>
                      </div>
                    </div>

                    {/* Technical Description */}
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {srv.description}
                    </p>

                    {/* Copilot Natural Language Command Integration with Copy Button */}
                    <div className="bg-[#0b1220] border border-slate-800 rounded-lg p-3.5 space-y-2">
                      <div className="flex items-center justify-between gap-2 text-[11px] font-mono">
                        <span className="text-[#00f2fe] flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>小茶助手自然语言调用指令</span>
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            handleCopyCommand(
                              srv.copilotCommand,
                              `已复制 ${srv.title} 小茶助手指令`,
                              cmdCopyId
                            )
                          }
                          className="inline-flex items-center gap-1 text-slate-400 hover:text-[#00f2fe] transition-colors cursor-pointer"
                        >
                          {copiedId === cmdCopyId ? (
                            <>
                              <Check className="w-3 h-3 text-emerald-400" />
                              <span className="text-emerald-400">已复制</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3" />
                              <span>复制指令</span>
                            </>
                          )}
                        </button>
                      </div>
                      <p className="text-xs font-mono text-slate-100 leading-relaxed break-words">
                        {srv.copilotCommand}
                      </p>
                    </div>
                  </div>

                  {/* Unboxed Clean Highlights Footer */}
                  <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs font-mono text-slate-300">
                    {srv.highlights.map((h) => (
                      <span key={h} className="inline-flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00f2fe] shrink-0" />
                        <span>{h}</span>
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 3: UNDERLYING HARDWARE PPE, APK 3.X & KERNEL EBPF ARCHITECTURE     */}
        {/* ========================================================================= */}
        <div className="pt-6 border-t border-slate-800/80 space-y-6">
          <div className="max-w-3xl">
            <p className="text-xs font-mono text-[#00f2fe] mb-1">
              坚实底座 · 硬件 PPE 直通与 Alpine APK 3.x 现代软件源生态
            </p>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
              MediaTek Filogic PPE 硬件流表卸载与 Linux 6.12 eBPF 数据面
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* PPE Wire-speed Offload Card */}
            <div className="lg:col-span-4 bg-[#111b2e]/85 border border-slate-800 rounded-xl p-6 flex flex-col justify-between gap-5">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <h4 className="font-display text-base font-bold text-white">
                    MediaTek PPE 硬件线速卸载
                  </h4>
                  <span className="text-xs font-mono text-emerald-400 tabular-nums">CPU &lt; 1%</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  深度激活 MT7981B 硬件封包处理引擎（PPE），千兆 NAT 转发跑满 937.77 Mbps，硬件流表自动接管（实时 PPE Entries 20+ 条活跃），大流量持续并发不降频。
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800 font-mono tabular-nums">
                <div>
                  <p className="text-[11px] font-sans text-slate-400">千兆 NAT 满载吞吐</p>
                  <p className="text-lg font-bold text-emerald-400 mt-0.5">937.77 Mbps</p>
                </div>
                <div>
                  <p className="text-[11px] font-sans text-slate-400">硬件卸载软中断</p>
                  <p className="text-lg font-bold text-[#00f2fe] mt-0.5">&lt; 1.0%</p>
                </div>
              </div>
            </div>

            {/* Alpine APK 3.x Modern Package Manager Card */}
            <div className="lg:col-span-4 bg-[#111b2e]/85 border border-slate-800 rounded-xl p-6 flex flex-col justify-between gap-5">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <h4 className="font-display text-base font-bold text-white">
                    Alpine APK 3.0.5 现代包管理
                  </h4>
                  <span className="text-xs font-mono text-purple-400">废除 opkg</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  彻底废除老旧脆弱的 opkg，原生采用 Alpine APK 3.x 软件源与独立 Feed 架构。实现秒级依赖图解析与原子事务安装升级，从根本上杜绝依赖冲突与升级变砖。
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800 font-mono tabular-nums">
                <div>
                  <p className="text-[11px] font-sans text-slate-400">原子依赖安装耗时</p>
                  <p className="text-lg font-bold text-purple-400 mt-0.5">1.8 秒完成</p>
                </div>
                <div>
                  <p className="text-[11px] font-sans text-slate-400">官方生态收录</p>
                  <p className="text-xs font-semibold text-emerald-400 mt-1.5">3 大核心套件 Upstream</p>
                </div>
              </div>
            </div>

            {/* eBPF + PPE Data Path Visual Card */}
            <div className="lg:col-span-4 bg-[#111b2e]/85 border border-slate-800 rounded-xl overflow-hidden flex flex-col justify-between">
              <div className="aspect-[16/9] bg-[#0b1220] border-b border-slate-800 overflow-hidden relative">
                {!archImageError ? (
                  <img
                    src={ebpfArchImg}
                    alt="chaWrt Linux 6.12 TC-eBPF 与 MediaTek PPE 硬件加速内核数据面架构图"
                    onError={() => setArchImageError(true)}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center p-4 text-xs font-mono text-slate-400">
                    Linux 6.12 TC-eBPF + MediaTek PPE 零拷贝数据面
                  </div>
                )}
                <div className="absolute bottom-2 left-2.5 px-2 py-0.5 rounded bg-slate-950/85 text-[10px] font-mono text-[#00f2fe] border border-slate-800">
                  TC-eBPF + PPE 协同路径
                </div>
              </div>
              <div className="p-5">
                <h4 className="font-display text-sm font-bold text-white mb-1">
                  首包 eBPF 哈希分流 + 后续包 PPE 硬件直通
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  首包经 xdns-bpf / aw-bpf 极速识别与策略标记，后续流量直接交由硬件 PPE 流表线速转发。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
