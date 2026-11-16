import React, { useState } from 'react';
import {
  Cpu,
  Terminal,
  Sparkles,
  Video,
  Play,
  ShieldCheck,
  Globe,
  Wifi,
  Zap,
  Compass,
  CheckCircle2,
  Bot,
  MessageSquareCode,
} from 'lucide-react';
import { FOUR_CORE_SERVICES } from '../data/chawrtData';
import ebpfArchImg from '../assets/images/chawrt_ebpf_architecture_1794710240032.jpg';

export const TechFeaturesBento: React.FC = () => {
  const [archImageError, setArchImageError] = useState(false);

  const renderServiceIcon = (id: 'portal' | 'xfrpc' | 'xkcptun' | 'xdns') => {
    switch (id) {
      case 'portal':
        return <Wifi className="w-5 h-5 text-emerald-400" />;
      case 'xfrpc':
        return <Globe className="w-5 h-5 text-purple-400" />;
      case 'xkcptun':
        return <Zap className="w-5 h-5 text-yellow-400" />;
      case 'xdns':
        return <Compass className="w-5 h-5 text-[#00f2fe]" />;
    }
  };

  return (
    <section id="features" className="py-16 px-4 sm:px-6 border-b border-slate-800/80">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* ========================================================================= */}
        {/* SECTION 1: XIAOCHA AI COPILOT - THE CORE BRAIN & UNIFIED HUB OF CHAWRT   */}
        {/* ========================================================================= */}
        <div id="copilot-core" className="space-y-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-[#00f2fe] mb-3">
              <Bot className="w-3.5 h-3.5" />
              <span>AI-Native 架构核心 · 系统的超级大脑与交互中枢</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
              以「小茶 AI 助手」为唯一智能中枢，彻底接管系统全生命周期运维
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              <strong className="text-white">chaWrt 彻底颠覆了传统路由器上百个层级深奥菜单与高危命令行的老旧范式。</strong>{' '}
              未来系统所有自研服务配置、出海加速部署、内核流控微调与安全基线体检，<span className="text-[#00f2fe] font-semibold">全部通过小茶助手自然语言一句话自动闭环实现</span>。让网络配置从“专业工程师的苦差事”走向“自然语言吩咐即搞定”。
            </p>
          </div>

          {/* XiaoCha Copilot 4 Core Killer Superpowers Bento */}
          <div className="bg-[#111b2e]/90 border border-cyan-500/30 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-2xl relative overflow-hidden">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-800 mb-6">
              <div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-white flex items-center gap-2.5">
                  <Sparkles className="w-5 h-5 text-[#00f2fe]" />
                  <span>小茶 AI 助手 (ClawWRT Copilot) 4 大实装杀手级核心能力</span>
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  DeepSeek Agent 架构 · 原生调用底层 ubus/rpcd 工具链 · 具备 60 秒安全失联回滚快照保护
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/25 px-3 py-1.5 rounded-lg shrink-0">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>83 项端到端全自动实机测试 100% 验证通过</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-[#0b1220]/90 border border-slate-800 hover:border-cyan-500/40 rounded-xl p-4 space-y-2 transition-colors">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#00f2fe]">
                  <MessageSquareCode className="w-4 h-4" />
                  <span>1. 跨两端 VPS 部署向导</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  只需提供远端 VPS IP，小茶自动完成 Ed25519 鉴权公钥注入、加速服务安装与防火墙重定向规则自建。
                </p>
                <div className="pt-2 text-[10px] font-mono text-slate-400 border-t border-slate-800/80">
                  一键两端联调 · 5分钟零基础
                </div>
              </div>

              <div className="bg-[#0b1220]/90 border border-slate-800 hover:border-purple-500/40 rounded-xl p-4 space-y-2 transition-colors">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-purple-400">
                  <Zap className="w-4 h-4" />
                  <span>2. 端口跳跃防失联预检</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  开启 UDP 端口跳跃前，小茶自动预检服务器防火墙 REDIRECT 规则池是否全部放行，彻底杜绝切错断连。
                </p>
                <div className="pt-2 text-[10px] font-mono text-slate-400 border-t border-slate-800/80">
                  服务端规则池预检 · 0断连风险
                </div>
              </div>

              <div className="bg-[#0b1220]/90 border border-slate-800 hover:border-emerald-500/40 rounded-xl p-4 space-y-2 transition-colors">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-emerald-400">
                  <Cpu className="w-4 h-4" />
                  <span>3. 芯片温度遥测与健康预警</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  原生调用 <code className="text-[#00f2fe]">get_temperature</code> 毫秒级读取 MT7981 CPU 与双频射频传感器并做过热健康预警。
                </p>
                <div className="pt-2 text-[10px] font-mono text-slate-400 border-t border-slate-800/80">
                  CPU 67°C / 2.4G 50°C / 5G 50°C
                </div>
              </div>

              <div className="bg-[#0b1220]/90 border border-slate-800 hover:border-sky-500/40 rounded-xl p-4 space-y-2 transition-colors">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-sky-400">
                  <ShieldCheck className="w-4 h-4" />
                  <span>4. 安全基线扫描与 60s 自愈</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  全盘审计 WAN 口暴露与 SSRF 风险，高危配置修改具备安全沙箱与 60 秒自动回滚守护进程。
                </p>
                <div className="pt-2 text-[10px] font-mono text-slate-400 border-t border-slate-800/80">
                  安全体检 98分 · 60s 防失联回滚
                </div>
              </div>
            </div>
          </div>

          {/* XiaoCha Copilot Dedicated 3-Minute Real Operational Demo Video Player */}
          <div id="copilot-video" className="bg-[#111b2e]/95 border border-cyan-500/35 rounded-2xl overflow-hidden shadow-2xl">
            <div className="p-5 sm:p-6 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-gradient-to-r from-slate-900 to-[#111b2e]">
              <div>
                <p className="text-xs font-mono text-[#00f2fe] mb-1 flex items-center gap-1.5">
                  <Video className="w-3.5 h-3.5" />
                  <span>实机真实操作录屏 · LuCI 控制台原生交互 · 真实无剪辑</span>
                </p>
                <h3 className="font-display text-lg sm:text-xl font-bold text-white">
                  小茶 AI 助手 (ClawWRT Copilot) 真实操作与智能运维全流程录屏
                </h3>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-300 bg-slate-900/90 px-3 py-1.5 rounded-lg border border-slate-800 shrink-0">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>3 分钟高清实操演示 · 720P HD</span>
              </div>
            </div>

            <div className="relative aspect-video max-h-[580px] bg-[#040814] flex items-center justify-center">
              <video
                src="/videos/xiaoca_copilot_demo.mp4"
                controls
                playsInline
                className="w-full h-full object-contain"
              />
            </div>

            <div className="p-4 sm:p-5 bg-[#0d1525] border-t border-slate-800 text-xs text-slate-400 flex flex-wrap items-center justify-between gap-3 font-mono">
              <span>
                ▶ 正在演示：中文指令自然排障、实时温度遥测、加速服务启停托管、防火墙规则验证与安全基线自动加固
              </span>
              <span className="text-[#00f2fe] font-semibold">纯原生 LuCI 界面 · 真实生产固件录制</span>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 2: THE 4 PILLARS - FOUR CORE NETWORK SERVICES OF CHAWRT           */}
        {/* ========================================================================= */}
        <div id="services" className="space-y-8 pt-6 border-t border-slate-800/80">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-xs font-mono text-purple-400 mb-3">
              <Zap className="w-3.5 h-3.5" />
              <span>chaWrt 四大核心自研王牌服务 · 架构深度解析</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
              门户认证、内网穿透、网络加速与智能分流：硬核自研协议栈
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              四大核心网络服务全部采用轻量纯 C 语言与 Linux TC-eBPF 重构，性能拉满并全量接入小茶 AI 助手统一管控，构筑起商业商用、出海弱网与私有穿透的绝对技术护城河。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FOUR_CORE_SERVICES.map((srv) => (
              <div
                key={srv.id}
                className="bg-[#111b2e]/90 border border-slate-800 hover:border-slate-700 rounded-2xl p-6 sm:p-7 flex flex-col justify-between gap-6 transition-all hover:shadow-xl"
              >
                <div className="space-y-4">
                  {/* Service Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 pb-3 border-b border-slate-800/80">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                        {renderServiceIcon(srv.id)}
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-bold text-white">{srv.title}</h3>
                        <p className="text-xs font-mono text-[#00f2fe]">{srv.serviceName}</p>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-900 text-slate-300 border border-slate-800">
                      {srv.tag}
                    </span>
                  </div>

                  {/* Key Benchmark Metric */}
                  <div className="bg-[#0b1220] border border-slate-800/80 rounded-xl p-3.5 flex items-center justify-between gap-2">
                    <div>
                      <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">实测性能指标</p>
                      <p className="text-sm sm:text-base font-mono font-bold text-emerald-400 mt-0.5">
                        {srv.metric}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">底层架构实现</p>
                      <p className="text-xs font-mono text-slate-300 mt-0.5">{srv.techStack}</p>
                    </div>
                  </div>

                  {/* Technical Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {srv.description}
                  </p>

                  {/* Copilot Natural Language Command Integration */}
                  <div className="bg-slate-900/90 border border-cyan-500/20 rounded-xl p-3.5 space-y-1.5">
                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#00f2fe]">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>小茶助手一键自然语言调用范例：</span>
                    </div>
                    <p className="text-xs font-mono text-slate-200 bg-[#0b1220] px-3 py-2 rounded-lg border border-slate-800 break-words">
                      {srv.copilotCommand}
                    </p>
                  </div>
                </div>

                {/* Highlights List */}
                <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-2">
                  {srv.highlights.map((h) => (
                    <span
                      key={h}
                      className="text-[11px] font-mono px-2.5 py-1 rounded bg-slate-900/80 text-slate-400 border border-slate-800 flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3 h-3 text-[#00f2fe]" />
                      <span>{h}</span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 3: UNDERLYING HARDWARE PPE & MODERN APK 3.X FOUNDATION            */}
        {/* ========================================================================= */}
        <div className="pt-6 border-t border-slate-800/80 space-y-6">
          <div className="max-w-3xl">
            <p className="text-xs font-mono text-slate-400 mb-1">坚实底座 · 硬件直通与软件源生态</p>
            <h3 className="font-display text-xl font-bold text-white">
              MediaTek Filogic PPE 硬件直通与 Alpine APK 3.x 独立源架构
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* PPE Wire-speed Offload Card */}
            <div className="lg:col-span-6 bg-[#111b2e]/85 border border-slate-800 rounded-xl p-6 sm:p-7 flex flex-col justify-between gap-5">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <h4 className="font-display text-base sm:text-lg font-bold text-white">
                    MediaTek PPE 硬件流表线速卸载
                  </h4>
                  <span className="text-xs font-mono text-emerald-400">CPU &lt; 1% 满载</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  深度激活 MT7981B 硬件封包处理引擎（PPE），千兆 NAT 转发全速跑满，硬件流表自动接管（实时 PPE Entries 20+ 条活跃），CPU 占用率压低至 1% 以下，大流量持续下载不降频、不卡顿。
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800 font-mono tabular-nums">
                <div>
                  <p className="text-[11px] text-slate-400">千兆 NAT 满载吞吐</p>
                  <p className="text-xl font-bold text-emerald-400 mt-0.5">937.77 Mbps</p>
                </div>
                <div>
                  <p className="text-[11px] text-slate-400">硬件卸载 CPU 软中断</p>
                  <p className="text-xl font-bold text-[#00f2fe] mt-0.5">&lt; 1.0%</p>
                </div>
              </div>
            </div>

            {/* Alpine APK 3.x Modern Package Manager Card */}
            <div className="lg:col-span-6 bg-[#111b2e]/85 border border-slate-800 rounded-xl p-6 sm:p-7 flex flex-col justify-between gap-5">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <h4 className="font-display text-base sm:text-lg font-bold text-white">
                    Alpine APK 3.x 现代包管理生态
                  </h4>
                  <span className="text-xs font-mono text-purple-400">彻底告别 opkg 依赖地狱</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  彻底废除老旧脆弱的 opkg，原生采用 Alpine APK 3.0.5 软件源与独立 Feed 架构。实现秒级依赖图解析与原子事务安装升级，从根本上杜绝升级变砖；同时自研核心组件 apfree-wifidog、xfrpc、xkcptun 均已并入 OpenWrt 官方软件包库。
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800 font-mono tabular-nums">
                <div>
                  <p className="text-[11px] text-slate-400">原子依赖安装耗时</p>
                  <p className="text-xl font-bold text-purple-400 mt-0.5">1.8 秒完成</p>
                </div>
                <div>
                  <p className="text-[11px] text-slate-400">官方生态背书</p>
                  <p className="text-sm font-semibold text-emerald-400 mt-1">三大套件入选 OpenWrt 官方库</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
