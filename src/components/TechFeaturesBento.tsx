import React, { useState } from 'react';
import { Cpu } from 'lucide-react';
import ebpfArchImg from '../assets/images/chawrt_ebpf_architecture_1794710240032.jpg';

export const TechFeaturesBento: React.FC = () => {
  const [archImageError, setArchImageError] = useState(false);

  return (
    <section id="features" className="py-16 px-4 sm:px-6 border-b border-slate-800/80">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-10">
          <p className="text-xs font-mono text-[#00f2fe] mb-2">核心技术特性深潜 · Deep Dive</p>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
            小茶 AI Copilot 杀手级实装、PPE 硬加速与 OpenWrt 官方生态背书
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            围绕 Linux 6.12 LTS 内核与 MediaTek Filogic 平台打造，融合跨两端 VPS 自动化联调、芯片温控遥测、安全基线防黑加固与 Alpine APK 3.x 现代软件生态。
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* 01. 小茶 AI 助手升级版 (col-span-2) */}
          <div className="lg:col-span-2 bg-[#111b2e]/85 backdrop-blur-sm border border-cyan-500/25 rounded-xl p-6 sm:p-7 flex flex-col justify-between gap-5">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                <h3 className="font-display text-lg sm:text-xl font-bold text-white">
                  01. 小茶 AI 助手 (ClawWRT Copilot) · 4 大独家杀手级能力
                </h3>
                <span className="text-xs font-mono text-[#00f2fe] shrink-0">
                  DeepSeek Agent + 沙箱防失联
                </span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                不只是对话问答，而是直接打通系统底层工具链（<code className="font-mono text-[#00f2fe]">get_temperature</code>、SSH 鉴权部署、防火墙预检与 UCI 事务回滚）的路由器原生智能运维 Agent。
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-800/80 text-xs">
              <div className="bg-[#0b1220] border border-slate-800/80 rounded-lg p-3.5">
                <p className="font-mono text-[#00f2fe] mb-1">1. 跨两端 VPS 自动化联调向导</p>
                <p className="text-slate-300 leading-relaxed">
                  自动生成免密 SSH 鉴权公钥，全自动在远端 VPS 部署网络加速服务与防火墙重定向规则。
                </p>
              </div>
              <div className="bg-[#0b1220] border border-slate-800/80 rounded-lg p-3.5">
                <p className="font-mono text-purple-400 mb-1">2. UDP 端口跳跃防失联预检</p>
                <p className="text-slate-300 leading-relaxed">
                  启用动态端口跳跃前自动预检服务端防火墙 REDIRECT 规则池，杜绝端口未放行导致断连。
                </p>
              </div>
              <div className="bg-[#0b1220] border border-slate-800/80 rounded-lg p-3.5">
                <p className="font-mono text-emerald-400 mb-1">3. 芯片温度实时遥测与预警</p>
                <p className="text-slate-300 leading-relaxed">
                  原生读取 MT7981 CPU 与 MT7976 2.4G/5G 射频温度（如 CPU 67°C, 2.4G/5G 50°C 健康稳态）。
                </p>
              </div>
              <div className="bg-[#0b1220] border border-slate-800/80 rounded-lg p-3.5">
                <p className="font-mono text-sky-400 mb-1">4. 全方位安全基线体检与防黑加固</p>
                <p className="text-slate-300 leading-relaxed">
                  支持一键安全评分、WAN 口 SSH 防放行检测、SSRF 防御拦截与 60s 安全配置自动回滚自愈。
                </p>
              </div>
            </div>
          </div>

          {/* 02. MediaTek Filogic PPE 硬加速 (col-span-1) */}
          <div className="lg:col-span-1 bg-[#111b2e]/85 backdrop-blur-sm border border-slate-800 rounded-xl p-6 sm:p-7 flex flex-col justify-between gap-5">
            <div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-3">
                02. MediaTek Filogic PPE 硬件直通
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                深度激活 MT7981B 硬件封包处理引擎（PPE），千兆 NAT 转发全速跑满，硬件流表自动接管（实时 PPE Entries 20+ 条活跃），CPU 占用率压低至 1% 以下。
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800/80 grid grid-cols-2 gap-4 font-mono tabular-nums">
              <div>
                <p className="text-[11px] text-slate-400">千兆 NAT 满载吞吐</p>
                <p className="text-xl font-bold text-emerald-400 mt-0.5">937.77 Mbps</p>
              </div>
              <div>
                <p className="text-[11px] text-slate-400">硬件卸载 CPU 占用</p>
                <p className="text-xl font-bold text-[#00f2fe] mt-0.5">&lt; 1.0%</p>
              </div>
            </div>
          </div>

          {/* 03. aw-bpf & xdns-bpf 内核级分流与 L7 DPI (col-span-2) */}
          <div className="lg:col-span-2 bg-[#111b2e]/85 backdrop-blur-sm border border-slate-800 rounded-xl p-6 sm:p-7 grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            <div className="md:col-span-7 flex flex-col justify-between gap-4">
              <div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-3">
                  03. aw-bpf 智能流控 &amp; xdns-bpf 内核零拷贝分流
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  纯 C 编写的 TC-eBPF 内核调度引擎结合首包 L7 DPI 嗅探，精准识别 WebRTC、QUIC、SSH 等 20+ 种协议；<code className="font-mono text-[#00f2fe]">xdns-bpf</code> 采用首包 FNV-1a 哈希极速决策，实机已累计安全分流超 1.2 亿字节（120MB+）且保持零丢包。
                </p>
              </div>

              <div className="space-y-2.5 text-xs font-mono tabular-nums pt-3 border-t border-slate-800/80">
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">xdns-bpf 实测内核分流流量</span>
                  <span className="text-[#00f2fe] font-semibold">120MB+ · FNV-1a 0 丢包</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">并发满载下游戏 UDP 延迟</span>
                  <span className="text-emerald-400 font-semibold">14.8 ms 稳态控制</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">xkcptun 弱网抗抖动与端口跳跃</span>
                  <span className="text-purple-400 font-semibold">自动校验 REDIRECT 规则池</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-5 rounded-lg overflow-hidden border border-slate-800 bg-[#0b1220] min-h-[190px]">
              {!archImageError ? (
                <img
                  src={ebpfArchImg}
                  alt="Linux 6.12 eBPF 与 Filogic PPE 零拷贝内核数据包加速路径"
                  referrerPolicy="no-referrer"
                  onError={() => setArchImageError(true)}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center">
                  <Cpu className="w-8 h-8 text-[#00f2fe] mb-2" />
                  <p className="text-xs font-semibold text-white">TC-eBPF 零拷贝内核路径</p>
                  <p className="text-[11px] text-slate-400 mt-1">FNV-1a 哈希分流 · 120MB+ 零丢包</p>
                </div>
              )}
            </div>
          </div>

          {/* 04. OpenWrt 官方收录背书：xfrpc (col-span-1) */}
          <div className="lg:col-span-1 bg-[#111b2e]/85 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 sm:p-7 flex flex-col justify-between gap-5">
            <div>
              <p className="text-[11px] font-mono text-purple-400 mb-1.5">Upstream 官方社区背书</p>
              <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-3">
                04. 组件 xfrpc 正式合并入 OpenWrt 官方库
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                自研超轻量级内网穿透组件 <strong className="text-white">xfrpc</strong> 经上游严苛代码审查，已正式合并入 OpenWrt 官方软件包源码库（Official Packages Feed），助力 PLC 工业串口与私有服务安全回传。
              </p>
            </div>
            <div className="pt-4 border-t border-slate-800/80 text-xs font-mono text-purple-300">
              <span>OpenWrt Official Packages Feed · Upstream Merged</span>
            </div>
          </div>

          {/* 05. Alpine APK 3.x 现代包管理生态 (col-span-1) */}
          <div className="lg:col-span-1 bg-[#111b2e]/85 backdrop-blur-sm border border-slate-800 rounded-xl p-6 sm:p-7 flex flex-col justify-between gap-5">
            <div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-3">
                05. Alpine APK 3.x 现代包生态
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                彻底废除旧版 opkg，全面采用 Alpine APK 3.x 软件源与独立 Feed 架构。实现秒级依赖图解析与原子事务安装升级，从根本上杜绝依赖冲突与升级变砖。
              </p>
            </div>
            <div className="pt-4 border-t border-slate-800/80 text-xs font-mono text-emerald-400">
              <span>apk add · 告别 opkg 依赖地狱</span>
            </div>
          </div>

          {/* 06. apfree-wifidog 高并发商业认证与无缝漫游 (col-span-2) */}
          <div className="lg:col-span-2 bg-[#111b2e]/85 backdrop-blur-sm border border-slate-800 rounded-xl p-6 sm:p-7 flex flex-col justify-between gap-5">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                <h3 className="font-display text-lg sm:text-xl font-bold text-white">
                  06. 商业级高并发认证与全屋/移动 Mesh (apfree-wifidog + 802.11k/v/r)
                </h3>
                <span className="text-xs font-mono text-emerald-400 shrink-0 tabular-nums">
                  361.2 req/s 瞬时并发
                </span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                原生集成高性能商业 Portal 网关 apfree-wifidog，单机瞬时高并发 302 重定向性能实测达 361.2 req/s（平均耗时 53.7ms），轻松承载咖啡厅与商业门店客流；叠加 802.11k/v/r 快速漫游与 802.11s 无线 Mesh，多节点一键扩展不断流。
              </p>
            </div>
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-x-5 gap-y-2 text-xs font-mono text-slate-400">
              <span>apfree-wifidog 商业认证</span>
              <span>·</span>
              <span>802.11k/v/r 快速切换</span>
              <span>·</span>
              <span>802.11s 无线 Mesh 扩展</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
