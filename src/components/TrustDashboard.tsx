import React, { useState } from 'react';
import { ShieldCheck } from 'lucide-react';
import { BENCHMARK_TESTS, TEST_CATEGORIES, TestMetricCategory } from '../data/chawrtData';

export const TrustDashboard: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<TestMetricCategory['id']>('all');

  const filteredTests =
    activeCategory === 'all'
      ? BENCHMARK_TESTS
      : BENCHMARK_TESTS.filter((t) => t.suite === activeCategory);

  return (
    <section id="benchmarks" className="py-16 px-4 sm:px-6 border-b border-slate-800/80">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div className="max-w-3xl">
            <p className="text-xs font-mono text-[#00f2fe] mb-2">
              实机性能测试与开源背书 · Trust Dashboard
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
              83 项工业级端到端全自动化实机回归测试（通过率 100%）
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              测试全链路覆盖内核 TC-eBPF 流控、L7 DPI 首包嗅探、MediaTek PPE 硬件直通、Portal 认证、AI Agent 沙箱与防失联回滚机制，每一次 Release 均基于真实硬件集群验收。
            </p>
          </div>
          <div className="text-xs font-mono text-slate-400 shrink-0 tabular-nums">
            <span>实机回归批次：Build #20261116</span>
            <span className="mx-2 text-slate-600">·</span>
            <span className="text-emerald-400 font-semibold">83 / 83 PASS (100%)</span>
          </div>
        </div>

        {/* Upstream OpenWrt Official Endorsement Strip */}
        <div className="mb-8 p-4 sm:p-5 rounded-xl bg-[#111b2e]/90 border border-purple-500/35 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-start sm:items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-purple-400 shrink-0 mt-0.5 sm:mt-0" />
            <div>
              <p className="text-xs sm:text-sm font-semibold text-white">
                Upstream 官方开源社区背书：组件 xfrpc 已正式合并入 OpenWrt 官方软件包源码库（Official Packages Feed）
              </p>
              <p className="text-xs text-slate-400 mt-0.5">
                经过上游严格代码审查与安全审计；全系统包管理同步迁移至 Alpine APK 3.x，彻底告别 opkg 依赖地狱与变砖风险。
              </p>
            </div>
          </div>
          <span className="text-xs font-mono text-purple-300 shrink-0">
            OpenWrt Official Feed
          </span>
        </div>

        {/* 4 Core Real-Hardware Telemetry Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-slate-800 rounded-xl bg-[#111b2e]/75 divide-y sm:divide-y-0 sm:divide-x divide-slate-800 mb-8 font-mono tabular-nums">
          <div className="p-5 sm:p-6">
            <p className="text-xs text-slate-400 font-sans mb-1.5">MediaTek PPE 硬加速转发</p>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-white">937.77 Mbps</span>
            </div>
            <p className="text-[11px] text-[#00f2fe] font-sans mt-2">
              CPU 占用率 &lt; 1% · 实时接管 20+ 硬件流表
            </p>
          </div>

          <div className="p-5 sm:p-6">
            <p className="text-xs text-slate-400 font-sans mb-1.5">内核 eBPF 分流 (xdns-bpf)</p>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-[#00f2fe]">120MB+</span>
            </div>
            <p className="text-[11px] text-slate-400 font-sans mt-2">
              累计安全分流超 1.2 亿字节 · FNV-1a 零丢包
            </p>
          </div>

          <div className="p-5 sm:p-6">
            <p className="text-xs text-slate-400 font-sans mb-1.5">Portal 认证并发 (apfree-wifidog)</p>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-white">361.2 req/s</span>
            </div>
            <p className="text-[11px] text-emerald-400 font-sans mt-2">
              高并发 302 重定向 · 平均响应 53.7ms
            </p>
          </div>

          <div className="p-5 sm:p-6">
            <p className="text-xs text-slate-400 font-sans mb-1.5">实机端到端全自动回归</p>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-emerald-400">83 / 83</span>
              <span className="text-xs font-semibold text-emerald-400">100%</span>
            </div>
            <p className="text-[11px] text-slate-400 font-sans mt-2">
              eBPF / L7 DPI / PPE / AI 防失联回滚全通过
            </p>
          </div>
        </div>

        {/* Visual Benchmark Bar Comparison */}
        <div className="border border-slate-800 rounded-xl bg-[#111b2e]/55 p-6 mb-8">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
            <h3 className="text-sm font-semibold text-white">
              关键性能基线：chaWrt 25.12 (PPE 硬加速 + eBPF) vs 纯软件默认转发
            </h3>
            <span className="text-xs font-mono text-slate-400">
              ClawWiFi M3000 v1 实机千兆环回压测
            </span>
          </div>

          <div className="space-y-4 text-xs font-mono tabular-nums">
            <div>
              <div className="flex justify-between text-slate-300 mb-1.5">
                <span className="font-sans">
                  chaWrt 25.12 硬件 PPE NAT 全速转发 (937.77 Mbps · CPU &lt; 1%)
                </span>
                <span className="text-emerald-400">93.8% 线速 · 20+ Entries 自动接管</span>
              </div>
              <div className="h-2.5 w-full bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                <div className="h-full bg-emerald-500 rounded-full" style={{ width: '93.8%' }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-slate-400 mb-1.5">
                <span className="font-sans">
                  未启用硬件 PPE 纯软件转发基线 (542.10 Mbps · CPU 软中断 100% 满载)
                </span>
                <span>54.2% 利用率</span>
              </div>
              <div className="h-2.5 w-full bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                <div className="h-full bg-slate-600 rounded-full" style={{ width: '54.2%' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Interactive CI/CD Test Suite Filter & Table */}
        <div className="border border-slate-800 rounded-xl bg-[#111b2e]/65 overflow-hidden">
          <div className="p-4 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3 bg-[#0b1220]">
            <span className="text-xs font-semibold text-white">
              83 项工业级自动化回归测试代表用例明细（CI/CD）
            </span>
            <div className="flex flex-wrap gap-1 p-1 bg-slate-900 rounded-lg border border-slate-800">
              {TEST_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors cursor-pointer whitespace-nowrap ${
                    activeCategory === cat.id
                      ? 'bg-[#00f2fe] text-slate-950 font-semibold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[720px] text-xs">
              <thead>
                <tr className="border-b border-slate-800/80 text-slate-400">
                  <th className="py-3 px-4 font-medium w-20">用例编号</th>
                  <th className="py-3 px-4 font-medium">实机自动化回归测试项</th>
                  <th className="py-3 px-4 font-medium w-44">实测遥测数值</th>
                  <th className="py-3 px-4 font-medium w-36">验收基线</th>
                  <th className="py-3 px-4 font-medium w-20 text-right">结果</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/70 font-mono tabular-nums">
                {filteredTests.map((t) => (
                  <tr key={t.id} className="hover:bg-slate-900/40 transition-colors">
                    <td className="py-3 px-4 text-slate-400">{t.id}</td>
                    <td className="py-3 px-4 font-sans text-slate-200 font-medium">{t.name}</td>
                    <td className="py-3 px-4 text-[#00f2fe] font-semibold">{t.metric}</td>
                    <td className="py-3 px-4 text-slate-400">{t.threshold}</td>
                    <td className="py-3 px-4 text-right text-emerald-400 font-semibold">
                      {t.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
