import React from 'react';
import { COMPARISON_ROWS } from '../data/chawrtData';

export const WhyChaWrtSection: React.FC = () => {
  return (
    <section id="comparison" className="py-16 px-4 sm:px-6 border-b border-slate-800/80">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-10">
          <p className="text-xs font-mono text-sky-400 mb-2">架构代差对比 · Why chaWrt</p>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
            直击传统 OpenWrt 痛点：从“折腾命令行”走向“AI + 内核态加速”
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            传统第三方改版固件依然沿用十余年前的软件包体系与软转发逻辑。chaWrt 25.12 从内核流控、包管理器到交互界面进行了彻底重构。
          </p>
        </div>

        {/* Clean High-Contrast Comparison Table */}
        <div className="border border-slate-800 rounded-xl bg-[#111b2e]/60 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[680px]">
              <thead>
                <tr className="border-b border-slate-800 bg-[#0b1220]">
                  <th className="py-4 px-5 text-xs font-semibold text-slate-400 w-36">
                    对比维度
                  </th>
                  <th className="py-4 px-5 text-xs font-semibold text-slate-400 w-[40%]">
                    传统 OpenWrt / 第三方改版
                  </th>
                  <th className="py-4 px-5 text-xs font-semibold text-sky-400">
                    chaWrt 25.12 + M3000 v1
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 text-xs sm:text-sm">
                {COMPARISON_ROWS.map((row) => (
                  <tr
                    key={row.dimension}
                    className="hover:bg-slate-900/40 transition-colors"
                  >
                    <td className="py-4 px-5 font-semibold text-white whitespace-nowrap">
                      {row.dimension}
                    </td>
                    <td className="py-4 px-5 text-slate-400 leading-relaxed">
                      {row.legacy}
                    </td>
                    <td className="py-4 px-5 text-emerald-300 font-medium leading-relaxed">
                      {row.chawrt}
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
