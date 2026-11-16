import React from 'react';
import { CheckCircle2, AlertTriangle } from 'lucide-react';
import { COMPARISON_ROWS } from '../data/chawrtData';

export const WhyChaWrtSection: React.FC = () => {
  return (
    <section id="comparison" className="py-16 px-4 sm:px-6 border-b border-slate-800/80">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div className="max-w-2xl">
            <p className="text-xs font-mono text-[#00f2fe] mb-2">架构代差对比 · Why chaWrt</p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
              直击传统 OpenWrt 痛点：从“折腾命令行”走向“AI + 内核态加速”
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              传统第三方改版固件依然沿用十余年前的软件包体系与软转发逻辑。chaWrt 25.12 从内核流控、包管理器到交互中枢进行了彻底重构。
            </p>
          </div>
          <div className="text-xs font-mono text-slate-400 shrink-0">
            <span>代际架构演进</span>
            <span className="mx-2 text-slate-600">·</span>
            <span className="text-[#00f2fe] font-semibold">5 大核心维度全面重构</span>
          </div>
        </div>

        {/* Clean High-Contrast Comparison Table */}
        <div className="border border-slate-800 rounded-xl bg-[#111b2e]/75 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[720px]">
              <thead>
                <tr className="border-b border-slate-800 bg-[#0b1220]">
                  <th className="py-4 px-5 text-xs font-mono font-semibold text-slate-400 w-44">
                    对比维度
                  </th>
                  <th className="py-4 px-5 text-xs font-mono font-semibold text-slate-400 w-[38%]">
                    传统 OpenWrt / 第三方改版
                  </th>
                  <th className="py-4 px-5 text-xs font-mono font-semibold text-[#00f2fe]">
                    chaWrt 25.12 LTS + ClawWiFi M3000 v1
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 text-xs sm:text-sm">
                {COMPARISON_ROWS.map((row, idx) => (
                  <tr
                    key={row.dimension}
                    className="hover:bg-slate-900/50 transition-colors"
                  >
                    <td className="py-4 px-5 font-semibold text-white whitespace-nowrap align-top">
                      <span className="font-mono text-[11px] text-slate-500 mr-2 tabular-nums">
                        0{idx + 1}
                      </span>
                      <span>{row.dimension}</span>
                    </td>
                    <td className="py-4 px-5 text-slate-400 leading-relaxed align-top">
                      <div className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-amber-500/70 shrink-0 mt-0.5" />
                        <span>{row.legacy}</span>
                      </div>
                    </td>
                    <td className="py-4 px-5 text-emerald-300 font-medium leading-relaxed align-top bg-cyan-500/[0.02]">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#00f2fe] shrink-0 mt-0.5" />
                        <span>{row.chawrt}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-5 py-3.5 bg-[#0b1220] border-t border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-slate-400">
            <span>实机对比基线：MediaTek Filogic 820 (MT7981B) 硬件平台 · 千兆双向吞吐与弱网并发环境</span>
            <span className="text-emerald-400">83 项端到端实机自动化回归 100% 通过</span>
          </div>
        </div>
      </div>
    </section>
  );
};
