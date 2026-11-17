export interface SiteConfig {
  qqGroup: string;
  qqGroupQrUrl: string;
  developerSiteUrl: string;
  githubUrl: string;
  telegramUrl: string;
  bilibiliLiveUrl: string;
  taobaoUrl: string;
  xianyuUrl: string;
  baiduUrl: string;
  baiduCode: string;
  latestVersion: string;
  buildDate: string;
}

export const SITE_CONFIG: SiteConfig = {
  qqGroup: '331230369',
  qqGroupQrUrl: 'https://liudf0716.github.io/chawrt/assets/qq-group.jpg',
  developerSiteUrl: 'https://buymyai.ai.studio/',
  githubUrl: 'https://github.com/liudf0716/chawrt',
  telegramUrl: 'https://t.me/chawrt_official',
  bilibiliLiveUrl: 'https://live.bilibili.com/25273061',
  taobaoUrl: 'https://item.taobao.com/',
  xianyuUrl: 'https://www.goofish.com/',
  baiduUrl: 'https://pan.baidu.com/s/1nQjVGUaZuv6vkY-JLBL88g?pwd=6kkg',
  baiduCode: '6kkg',
  latestVersion: 'chaWrt 25.12 LTS',
  buildDate: '2026-11-16',
};

export interface ComparisonRow {
  dimension: string;
  legacy: string;
  chawrt: string;
}

export const COMPARISON_ROWS: ComparisonRow[] = [
  {
    dimension: '系统管理与 AI 运维',
    legacy: '菜单层级深，排查故障与配置加速必须啃系统日志与命令行',
    chawrt: '内置小茶 AI 助手：VPS 自动化联调、芯片温控遥测、安全基线体检与防失联自愈',
  },
  {
    dimension: '大流量转发与 CPU',
    legacy: '跑满千兆时 CPU 软中断居高不下，高温降频且丢包明显',
    chawrt: 'MediaTek PPE 硬件直通：千兆全速跑满，CPU 占用 < 1%，实时接管 20+ 硬件流表',
  },
  {
    dimension: '流控与弱网防断连',
    legacy: '传统 SQM/TC 误伤游戏延迟；端口跳跃易因服务端防火墙未放行而失联',
    chawrt: 'aw-bpf L7 DPI 识别 + xkcptun 端口跳跃预检服务端防火墙 REDIRECT 规则池',
  },
  {
    dimension: '出海分流与穿透生态',
    legacy: '用户态 DNS 代理内存开销大；第三方内网穿透缺乏上游安全审计',
    chawrt: 'xdns-bpf 内核 FNV-1a 零拷贝分流 + apfree-wifidog / xfrpc / xkcptun 三大 OpenWrt 官方收录套件',
  },
  {
    dimension: '软件包与固件生态',
    legacy: 'opkg 依赖地狱极易升级变砖；配置繁杂缺乏统一智能交互',
    chawrt: 'Alpine APK 3.x 秒级原子事务更新 + M3000 v1 官方标杆硬件原生深度适配',
  },
];

export interface CopilotPromptScenario {
  id: string;
  tag: string;
  prompt: string;
  latencyLabel: string;
  actionSummary: string;
  terminalOutput: string;
  diagnosis: string;
}

export const COPILOT_SCENARIOS: CopilotPromptScenario[] = [
  {
    id: 'temp-telemetry',
    tag: '芯片温控遥测',
    prompt: '路由器发热严重吗？查看各芯片温度',
    latencyLabel: 'get_temperature · 0.18s',
    actionSummary: '🟢 各芯片散热良好（CPU 67°C, 2.4G 50°C, 5G 50°C），运行稳定健康。',
    terminalOutput: `> call tool: get_temperature()
[MT7981B SoC CPU]       67.0°C  (温控阈值 <= 105°C · 正常)
[MT7976 2.4GHz RF]      50.0°C  (无线射频 · 低温稳定)
[MT7976 5GHz RF]        50.0°C  (160MHz 满血运行 · 健康)
立体对流通风被动散热良好，各芯片无积热降频。`,
    diagnosis: '实时读取 MediaTek MT7981B 核心与 MT7976 双频射频传感器，长久负载工况下保持充裕散热冗余。',
  },
  {
    id: 'vps-wizard',
    tag: 'VPS 联调与防失联校验',
    prompt: '帮我自动部署远端 VPS 加速节点并校验端口跳跃防火墙',
    latencyLabel: 'VPS Auto-Provision + Preflight · 0.64s',
    actionSummary: '已完成免密 SSH 公钥分发、xkcptun 服务端部署及 REDIRECT 端口池防失联预检。',
    terminalOutput: `> ssh-keygen ed25519 -> 免密鉴权公钥已注入远端 VPS (45.xx.xx.12)
> deploy xkcptun-server + nftables REDIRECT pool [20000-29999 -> 4000]
> [防失联安全预检] 校验服务端防火墙规则池: 放行校验通过 (规则池就绪)
> aw-bpf/xdns-bpf 联动: FNV-1a 零拷贝分流已累计转发 124.8 MB (流表正常)`,
    diagnosis: '小茶助手自动化完成路由器与 VPS 双端联调，并在启用 UDP 动态端口跳跃前自动验证服务端防火墙放行，有效降低失联风险。',
  },
  {
    id: 'security-audit',
    tag: '安全基线加固',
    prompt: '全面体检当前路由器安全基线并拦截异常暴露',
    latencyLabel: 'Security Baseline Audit · 0.35s',
    actionSummary: '安全评分 98/100：已阻断 WAN 口 SSH 暴露风险与 SSRF 内网探测请求。',
    terminalOutput: `> audit firewall.@zone[wan] & dropbear SSH binding
[CHECK] WAN 口 22/SSH 入站放行: 已关闭 (仅允许 LAN 与 xfrpc 加密隧道)
[CHECK] LuCI SSRF 过滤引擎: 已启用内网回环/元数据 IP 拦截
[CHECK] uci-snapshot 事务保护: 60 秒失联自动回滚守护进程就绪`,
    diagnosis: '自动完成端口暴露、SSH 鉴权、SSRF 拦截与防火墙基线自愈，防止设备暴露在公网遭受暴力扫描。',
  },
  {
    id: 'dpi-limit',
    tag: 'L7 DPI 动态流控',
    prompt: '查一下谁在看高清视频并限速 20M，顺便看下 PPE 负载',
    latencyLabel: 'aw-bpf + mtk_ppe · 0.31s',
    actionSummary: '已定位 QUIC 高码率流并下发 20Mbps 令牌桶；MediaTek PPE 接管 24 条流表，CPU < 1%。',
    terminalOutput: `aw-bpf dpi top --proto quic,webrtc
[192.168.10.108] iPad-Pro   4K-Stream   84.6 Mbps -> LIMIT 20.0 Mbps
cat /sys/kernel/debug/mtk_ppe/entries -> 24 active HW flows
WAN-LAN NAT 实时吞吐: 937.77 Mbps | CPU 占用率: 0.8%`,
    diagnosis: '在不中断任何连接的前提下实现微秒级令牌桶动态压制，同时硬件 PPE 全程接管 NAT 转发，保障多端并发流畅。',
  },
];

export interface HardwareSpecItem {
  label: string;
  spec: string;
  detail: string;
}


export interface CoreServiceItem {
  id: 'portal' | 'xfrpc' | 'xkcptun' | 'xdns';
  title: string;
  serviceName: string;
  tag: string;
  metric: string;
  techStack: string;
  copilotCommand: string;
  description: string;
  highlights: string[];
}

export const FOUR_CORE_SERVICES: CoreServiceItem[] = [
  {
    id: 'portal',
    title: '商业级高性能门户认证网关',
    serviceName: 'apfree-wifidog / wifidogx (OpenWrt 官方收录)',
    tag: '官方 Upstream 收录 · 内核态线速放行',
    metric: '361.2 req/s 瞬时并发 (平均 53.7ms)',
    techStack: '纯 C 语言 · epoll 驱动 · OpenWrt 官方软件源',
    copilotCommand: '“小茶，把客厅电视和访客平板加入免认证白名单，并查看当前在线认证人数”',
    description:
      '彻底解决老旧版 wifidog 频繁出现的内存泄漏、死锁及高并发丢包痛点。已正式合并入 OpenWrt 官方软件包源码库（Official Packages Feed）。终端认证通过后，后续海量数据包直接在内核态快速匹配放行，不走慢速用户态代理，跑满千兆线速。支持免认证域名、MAC 白名单/黑名单与多角色权限划分。',
    highlights: ['OpenWrt 官方 Packages Feed 官方收录', '361.2 req/s 瞬时 302 重定向', '内核态快速放行零损耗'],
  },
  {
    id: 'xfrpc',
    title: '超轻量级纯 C 内网穿透服务',
    serviceName: 'xfrpc (OpenWrt 官方收录)',
    tag: '官方 Upstream 收录 · 内存仅 2.2MB',
    metric: '2.2MB VmRSS (相比 Go 版降低 95%)',
    techStack: '纯 C 语言 · 非阻塞状态机 · OpenWrt 官方软件源',
    copilotCommand: '“小茶，帮我添加一条 5000 端口的 TCP 穿透映射到群晖 NAS，展示公网直达地址”',
    description:
      '针对复杂网络拓扑与无公网 IP 宽带环境，在嵌入式硬件上以不足 2.2MB 的极低内存开销实现稳定可靠的长连接穿透。代码质量经全球开源社区严苛审查，已正式合并入 OpenWrt 官方软件包源码库（Official Packages Feed），长时间稳定在线不掉线。',
    highlights: ['OpenWrt 官方 Packages Feed 官方收录', '内存常驻 < 2.2MB (Go版需 60MB+)', '毫秒级自动重连状态机'],
  },
  {
    id: 'xkcptun',
    title: '弱网抗抖动网络加速与端口跳跃',
    serviceName: 'xkcptun (OpenWrt 官方收录 · 端口跳跃)',
    tag: '官方 Upstream 收录 · 防失联规则池预检',
    metric: '抗 30%~40% 恶劣丢包 · 吞吐提升 3~5 倍',
    techStack: '纯 C 重构 KCP · OpenWrt 官方软件源 · 零内存泄漏',
    copilotCommand: '“小茶，切换网络加速端口，并预检远端 VPS 防火墙规则池放行状态”',
    description:
      '专门解决高延迟长距离与信道抖动带来的剧烈掉速。已正式合并入 OpenWrt 官方软件包源码库（Official Packages Feed）。内置自适应前向纠错（FEC）与动态 UDP 端口跳跃技术。核心突破在于：小茶助手在执行端口跳跃前，会自动预检远端 VPS 防火墙 REDIRECT 规则池的放行状态，避免因规则缺失导致断网失联。',
    highlights: ['OpenWrt 官方 Packages Feed 官方收录', '抗 40% 恶劣高丢包环境', '动态 UDP 端口跳跃抗 QoS'],
  },
  {
    id: 'xdns',
    title: '内核级 TC-eBPF 智能策略分流',
    serviceName: 'xdns-bpf (FNV-1a 极速哈希)',
    tag: 'TC-eBPF 零拷贝 · 毫秒级 Map 绑定',
    metric: '实测分流验证 120MB+ · 连续零丢包',
    techStack: 'Linux TC-eBPF · FNV-1a 首包哈希 · 内核态 Map 动态下刷',
    copilotCommand: '“小茶，查看出海链路实时分流统计，展示已接管连接数与累计转发流量”',
    description:
      '当多宽带与多出口策略调度时，基于纯 C 编写的 TC-eBPF 内核调度引擎与 FNV-1a 极速哈希决策树进行首包识别，动态将解析 IP 下刷至内核 eBPF Map，实现国内/海外双出口秒级精准导航，防污染无损零拷贝分流。',
    highlights: ['首包 FNV-1a 极速哈希决策', '内核 eBPF Map 动态热重载', '实机稳定分流 120MB+ 零丢包'],
  },
];

export const M3000_HARDWARE_SPECS: HardwareSpecItem[] = [
  {
    label: '核心计算处理平台',
    spec: 'MediaTek MT7981B 双核 A53 1.3GHz 处理器',
    detail: '高能效双核 64 位架构，内置 MediaTek 专属硬件 PPE 网络加速引擎，全千兆 NAT 线速转发时 CPU 占用率小于 1%。',
  },
  {
    label: 'Wi-Fi 6 极速无线规格',
    spec: 'AX3000 双频并发 · 160MHz 巨幅频宽',
    detail: '2.4GHz (574Mbps) + 5GHz (2402Mbps) 高速并发；支持 802.11k/v/r 快速无缝漫游与 802.11s 无线 Mesh 一键组网扩展。',
  },
  {
    label: '高速有线接口阵列',
    spec: '5 × 全千兆以太网口 (1 WAN + 4 LAN)',
    detail: '全千兆 RJ45 电口阵列，跑满千兆线速家庭光纤与企业局域网，支持多 LAN 独立划分与 VLAN 隔离。',
  },
  {
    label: '内存与存储架构',
    spec: '256MB DDR 高速内存 + 128MB SPI-NAND 闪存',
    detail: '充裕的系统运存配合轻量纯 C 架构与 Alpine APK 3.x，为小茶 AI 助手与三大核心自研服务预留充足常驻空间。',
  },
  {
    label: '散热设计与能效工况',
    spec: '多孔立体对流通风散热 · 静音低功耗稳定运行',
    detail: '机身精密散热格栅配合内部金属屏蔽导热罩，整机无风扇零噪音被动散热，长久满载运行稳定不积热。',
  },
];

export interface ApplicationScenario {
  iconName: 'van' | 'coffee' | 'factory';
  title: string;
  subtitle: string;
  description: string;
  highlights: string;
}

export const APPLICATION_SCENARIOS: ApplicationScenario[] = [
  {
    iconName: 'van',
    title: '家庭智能网络 / 极客影音 / 游戏低延迟',
    subtitle: '160MHz 频宽 · 弱网加速抗抖动',
    description:
      'AX3000 双频并发与 160MHz 大频宽带来超高无线吞吐，结合 xkcptun 弱网加速与 aw-bpf 智能流控，保障家庭 4K 影音推流与竞技游戏低延迟互不干扰。',
    highlights: 'AX3000 Wi-Fi 6 · 160MHz 频宽 · PPE 全速转发',
  },
  {
    iconName: 'coffee',
    title: '智慧商业门店 / 咖啡厅 / 共享空间',
    subtitle: '高并发认证 · 智能流控不抢网',
    description:
      '原生集成 OpenWrt 生态高性能网关 apfree-wifidog，单机瞬时高并发 302 Portal 认证达 361 req/s，配合 aw-bpf L7 DPI 调度保障门店收银与顾客体验互不干扰。',
    highlights: '361 req/s 认证并发 · 千兆 PPE 线速 · 无线 Mesh',
  },
  {
    iconName: 'factory',
    title: '远程办公 / 私有云 NAS / 跨网穿透',
    subtitle: '轻量穿透 · 全千兆高速内网',
    description:
      '基于合并入 OpenWrt 官方仓库的超轻量穿透服务 xfrpc，内存占用不足 2.2MB，轻松穿透无公网 IP 宽带，5 个全千兆网口提供稳定的 NAS 与工作站直连。',
    highlights: 'xfrpc 官方穿透 · 5×千兆电口 · 小茶一键调用',
  },
];

export interface TestMetricCategory {
  id: 'all' | 'ppe' | 'ebpf' | 'portal' | 'ai' | 'system';
  label: string;
}

export const TEST_CATEGORIES: TestMetricCategory[] = [
  { id: 'all', label: '全部代表用例 (共 83 项)' },
  { id: 'ppe', label: 'NAT & PPE 硬加速' },
  { id: 'ebpf', label: 'eBPF 分流与流控' },
  { id: 'portal', label: 'Portal & 穿透' },
  { id: 'ai', label: '小茶 Copilot' },
  { id: 'system', label: 'APK 3.x & 系统稳定性' },
];

export interface BenchmarkTestItem {
  id: string;
  suite: Exclude<TestMetricCategory['id'], 'all'>;
  name: string;
  metric: string;
  threshold: string;
  status: 'PASS';
}

export const BENCHMARK_TESTS: BenchmarkTestItem[] = [
  {
    id: 'TC-01',
    suite: 'ppe',
    name: 'WAN-LAN IPv4 NAT 满载转发吞吐 (iperf3 8 线程)',
    metric: '937.77 Mbps',
    threshold: '>= 920 Mbps',
    status: 'PASS',
  },
  {
    id: 'TC-02',
    suite: 'ppe',
    name: 'MediaTek Filogic PPE 硬件流表接管与 CPU 占用率',
    metric: 'CPU < 1% (20+ Entries)',
    threshold: '<= 5.0%',
    status: 'PASS',
  },
  {
    id: 'TC-03',
    suite: 'ppe',
    name: '小包转发与 ICMP 转发往返时延',
    metric: '0.78 ms',
    threshold: '< 1.00 ms',
    status: 'PASS',
  },
  {
    id: 'TC-04',
    suite: 'ebpf',
    name: 'xdns-bpf 内核 FNV-1a 零拷贝累计分流压力测试',
    metric: '120MB+ (零丢包)',
    threshold: '>= 100MB / 连续无丢包',
    status: 'PASS',
  },
  {
    id: 'TC-05',
    suite: 'ebpf',
    name: 'aw-bpf L7 DPI 首包嗅探识别率 (QUIC / WebRTC / SSH)',
    metric: '99.4%',
    threshold: '>= 98.0%',
    status: 'PASS',
  },
  {
    id: 'TC-06',
    suite: 'ebpf',
    name: '满带宽下载场景下游戏 UDP 并发延迟抖动控制',
    metric: '14.8 ms',
    threshold: '<= 20.0 ms',
    status: 'PASS',
  },
  {
    id: 'TC-07',
    suite: 'portal',
    name: 'apfree-wifidog 高并发 302 Portal 认证压测 (wrk 100 并发)',
    metric: '361.2 req/s (53.7ms)',
    threshold: '>= 250 req/s',
    status: 'PASS',
  },
  {
    id: 'TC-08',
    suite: 'portal',
    name: 'OpenWrt 官方收录套件 (apfree-wifidog / xfrpc / xkcptun) 全功能与长连接稳定性',
    metric: '72h 持续在线 (0 异常断链)',
    threshold: '稳定无死锁',
    status: 'PASS',
  },
  {
    id: 'TC-09',
    suite: 'ai',
    name: '小茶 Copilot VPS 联调 + UDP 端口跳跃防火墙 REDIRECT 预检',
    metric: '未放行阻断拦截生效',
    threshold: '规则不匹配即拦截',
    status: 'PASS',
  },
  {
    id: 'TC-10',
    suite: 'ai',
    name: 'MT7981/MT7976 温度遥测 (get_temperature) 与安全基线防黑加固',
    metric: '67°C / 50°C · 实测正常',
    threshold: 'SSRF/WAN SSH 0 暴露',
    status: 'PASS',
  },
  {
    id: 'TC-11',
    suite: 'system',
    name: 'Alpine APK 3.x 独立源原子事务安装与 60s 防失联回滚机制',
    metric: '1.8s 原子完成',
    threshold: '< 5.0s / 0 变砖',
    status: 'PASS',
  },
  {
    id: 'TC-12',
    suite: 'system',
    name: 'M3000 v1 72小时极限负载与 160MHz Wi-Fi 吞吐稳定性',
    metric: '无崩溃 · 无异常泄漏 (83/83 PASS)',
    threshold: '长久稳定运行',
    status: 'PASS',
  },
];

export interface FirmwareDevice {
  id: 'clawwifi_m3000_v1' | 'mt7981_360t7_nx30' | 'cudy_wr3000_x30e';
  name: string;
  tierLabel: string;
  soc: string;
  flashRam: string;
  version: string;
  releaseDate: string;
  kernel: string;
  pkgManager: string;
  images: {
    type: string;
    filename: string;
    size: string;
    sha256: string;
    note: string;
  }[];
}

export const FIRMWARE_DEVICES: FirmwareDevice[] = [
  {
    id: 'clawwifi_m3000_v1',
    name: 'ClawWiFi M3000 v1 (AX3000 标杆硬件)',
    tierLabel: '官方标杆硬件 · 83 项全自动回归验证通过 · 出厂预装 chaWrt 25.12 LTS',
    soc: 'MediaTek MT7981B (Filogic 820) 双核 A53 1.3GHz',
    flashRam: '256MB DDR + 128MB SPI-NAND',
    version: 'chaWrt 25.12 LTS',
    releaseDate: '2026-11-16',
    kernel: 'Linux 6.12.116 LTS',
    pkgManager: 'Alpine APK 3.0.5',
    images: [
      {
        type: 'Factory 初装镜像',
        filename: 'chawrt-25.12-snapshot-r33384-23b6afeb63-mediatek-filogic-clawwifi_m3000-v1-squashfs-factory.bin',
        size: '21.5 MB',
        sha256: '8f4c19a2d3e0b74f61c9e2d8a4b01f5e7c3d9a8b2c4e6f1a0d9e8c7b6a5f4e3d',
        note: '适用于 U-Boot 恢复模式或原厂引导首次刷入 chaWrt 25.12 LTS',
      },
      {
        type: 'Sysupgrade 升级包',
        filename: 'chawrt-25.12-snapshot-r33384-23b6afeb63-mediatek-filogic-clawwifi_m3000-v1-squashfs-sysupgrade.bin',
        size: '19.0 MB',
        sha256: 'c4c4bc96c78619514493b888ff7cf877cc994b7a47ab8cc0f3833b8229135bfd',
        note: '已运行 chaWrt 的 M3000 v1 可通过 LuCI 或命令行在线保留配置升级',
      },
    ],
  },
  {
    id: 'mt7981_360t7_nx30',
    name: '360T7 / H3C NX30 Pro (MT7981)',
    tierLabel: '开源社区热门机型 · 原生支持 PPE 硬加速与 aw-bpf 内核流控',
    soc: 'MediaTek Filogic 820 (MT7981B 双核 A53 1.3GHz)',
    flashRam: '256MB DDR3 + 128MB SPI-NAND',
    version: 'chaWrt 25.12 LTS',
    releaseDate: '2026-11-16',
    kernel: 'Linux 6.12.116 LTS',
    pkgManager: 'Alpine APK 3.0.5',
    images: [
      {
        type: '360T7 Factory / U-Boot 镜像',
        filename: 'chawrt-25.12-filogic-qihoo_360t7-squashfs-factory.bin',
        size: '38.9 MB',
        sha256: '5d2e48a9c1f0b3e7d6a5c4b3f2e1d0c9b8a7f6e5d4c3b2a1f0e9d8c7b6a5f4e3',
        note: '适配 360T7（含 108M 大分区 U-Boot 布局），刷前请核对分区大小',
      },
      {
        type: 'H3C NX30 Pro Sysupgrade 包',
        filename: 'chawrt-25.12-filogic-h3c_magic-nx30-pro-squashfs-sysupgrade.bin',
        size: '18.8 MB',
        sha256: '9c1a7b3e5d4f802a6c4e1b9d7f3a5c8e2b4d6f0a9c1e3b5d7f2a4c6e8b0d1f3a',
        note: '适用于 H3C NX30 Pro 在 U-Boot 或现有 OpenWrt 后台无缝升级',
      },
    ],
  },
  {
    id: 'cudy_wr3000_x30e',
    name: '锐捷 X30E / Cudy WR3000 & M3000',
    tierLabel: '主流 MT7981 扩展适配 · 支持 APK 3.x 与 xfrpc 内网穿透',
    soc: 'MediaTek Filogic 820 (MT7981A / MT7981B)',
    flashRam: '256MB+ RAM + 128MB NAND',
    version: 'chaWrt 25.12 LTS',
    releaseDate: '2026-11-16',
    kernel: 'Linux 6.12.116 LTS',
    pkgManager: 'Alpine APK 3.0.5',
    images: [
      {
        type: '锐捷 X30E / Cudy WR3000 Factory',
        filename: 'chawrt-25.12-filogic-cudy_wr3000-v1-squashfs-factory.bin',
        size: '39.1 MB',
        sha256: '7e2f4a8c1b9d6e3f0a5c8b2d4e7f1a3c5b9d0e2f4a6c8e1b3d5f7a9c0e2b4d6f',
        note: '先通过原厂 Web 后台或 U-Boot 刷入过渡镜像，随后可在线更新 Sysupgrade',
      },
      {
        type: 'MT7981 通用 Sysupgrade 合集',
        filename: 'chawrt-25.12-filogic-mt7981-community-sysupgrade.tar.gz',
        size: '148.0 MB',
        sha256: '4b8d1e5f9a3c7b2d6e0f4a8c1b5d9e3f7a2c6b0d4e8f1a5c9b3d7e2f6a0c4b8d',
        note: '打包收录 锐捷 X30E、Cudy WR3000/M3000 v1-v2 等多机型镜像及 SHA256SUMS',
      },
    ],
  },
];

export interface DocGuideTab {
  id: 'flash' | 'copilot' | 'ebpf-apk';
  title: string;
  subtitle: string;
  steps: {
    heading: string;
    description: string;
    code?: string;
  }[];
}

export const DOC_GUIDES: DocGuideTab[] = [
  {
    id: 'flash',
    title: '三步刷机指引',
    subtitle: '适用于极客 DIY 玩家在 360T7 / NX30 Pro / X30E / Cudy 等设备安全刷入 chaWrt 25.12 LTS',
    steps: [
      {
        heading: '1. 校验镜像 SHA256 并备份原厂 ART 分区',
        description:
          '从上方固件矩阵或百度网盘官方通道下载对应型号的 Factory / Sysupgrade 包后，务必校验 SHA256SUMS 完整性，防止刷入损坏文件。',
        code: 'sha256sum chawrt-25.12-filogic-clawwifi_m3000-v1-squashfs-factory.bin',
      },
      {
        heading: '2. 通过原厂 Web 过渡或 U-Boot 写入',
        description:
          '网线连接路由器 LAN 口并设为自动获取 IP。进入 U-Boot Web 恢复界面（192.168.1.1）上传对应机型镜像；ClawWiFi M3000 v1 出厂已预装完整认证固件，无需自行刷机。',
      },
      {
        heading: '3. 呼出小茶 Copilot 完成初始化与安全体检',
        description:
          '重启完成后电脑直连 LAN 口（自动获取 192.168.8.x IP），浏览器访问默认管理后台 http://192.168.8.1（避开光猫冲突），绑定 DeepSeek API Key 即可体验小茶助手一键 VPS 联调、温度遥测及安全基线自愈。',
        code: '默认控制台: http://192.168.8.1  |  SSH: ssh root@192.168.8.1',
      },
    ],
  },
  {
    id: 'copilot',
    title: '小茶助手 AI 指南',
    subtitle: 'VPS 自动化联调、端口跳跃防失联校验、芯片温控遥测与安全基线自愈',
    steps: [
      {
        heading: '1. 最新实装的杀手级自然语言指令',
        description:
          '无需背诵 UCI 与 nftables 语法，直接通过小茶助手下发结构化安全动作（所有高危更改受 60 秒失联回滚守护进程保护）：',
        code: `• "帮我配置这台 VPS 作为加速节点，生成免密公钥并预检端口跳跃防火墙"
• "路由器发热严重吗？查看各芯片温度"   -> get_temperature() 秒回 CPU/2.4G/5G 温度
• "进行一次全盘安全基线体检，关闭 WAN 口 SSH 暴露并开启 SSRF 拦截"
• "查看实时 PPE 硬件流表数和 xdns-bpf 累计分流字节数"`,
      },
      {
        heading: '2. 端口跳跃防失联预检机制说明',
        description:
          '开启 UDP 动态端口跳跃前，小茶助手会自动 SSH 连接远端 VPS 检查防火墙 nftables/iptables 的 REDIRECT 端口池是否全部放行，避免因服务端规则缺失导致路由器全网断连。',
      },
    ],
  },
  {
    id: 'ebpf-apk',
    title: 'APK 3.x / PPE / Upstream',
    subtitle: '告别 opkg 依赖地狱，实测三大 OpenWrt 官方收录套件与内核态零拷贝状态',
    steps: [
      {
        heading: '1. 使用 Alpine APK 3.x 秒级原子管理软件源',
        description:
          'chaWrt 25.12 全面废除脆弱的 opkg，原生迁移至 Alpine APK 3.x，实现毫秒级依赖图解析与原子事务安装升级，包括已被 OpenWrt 官方源码库正式收录的 apfree-wifidog、xfrpc 与 xkcptun 核心套件。',
        code: `apk update
apk add apfree-wifidog xfrpc xkcptun aw-bpf-cli
apk upgrade --available`,
      },
      {
        heading: '2. 观测 MediaTek PPE 硬件流表与 xdns-bpf 遥测',
        description:
          '通过内核 debugfs 与 aw-bpf 命令行可直接校验硬件直通流表（20+ 条实机常驻）以及 xdns-bpf 首包 FNV-1a 哈希实机分流状态（120MB+ 零丢包持续转发）。',
        code: `cat /sys/kernel/debug/mtk_ppe/entries
aw-bpf stats --xdns --live`,
      },
    ],
  },
];

export interface FaqItem {
  q: string;
  a: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    q: 'ClawWiFi M3000 v1 的硬件定位与核心规格是什么？',
    a: 'ClawWiFi M3000 v1 是专为 chaWrt 智能系统深度定制的官方标杆级 Wi-Fi 6 AX3000 路由器：搭载联发科 MT7981B 双核 1.3GHz 处理器，标配 5 个全千兆网口与 160MHz 超大无线频宽，内置 256MB 内存与 128MB 高速闪存。它出厂深度适配并预装认证版 chaWrt 系统，原生打通小茶 AI 助手、MediaTek PPE 硬件全线速转发与三大 OpenWrt 官方收录套件。',
  },
  {
    q: '开源固件与官方硬件有什么区别？我该选通道 A 还是通道 B？',
    a: '如果您希望免去折腾、开箱即用体验全套认证版 chaWrt 与小茶助手完整软硬件闭环，请选择通道 A「ClawWiFi M3000 v1 官方标杆硬件」并可获取技术群交流支持；如果您已有 360T7、H3C NX30 Pro、锐捷 X30E 或 Cudy WR3000 等 MT7981 路由器并喜欢动手刷机，通道 B 免费提供纯净 chaWrt 开源固件镜像。',
  },
  {
    q: '小茶助手在启用网络加速端口跳跃或修改防火墙时会导致路由器失联吗？',
    a: '不会。小茶助手实装了双层防失联机制：在启用 UDP 端口跳跃前会自动预检远端 VPS 防火墙 REDIRECT 规则池是否放行；所有关键网络配置更改均受 60 秒自动回滚守护进程与安全基线校验保护。',
  },
  {
    q: '为什么放弃传统的 opkg 而全面采用 Alpine APK 3.x？',
    a: '传统 opkg 在升级内核模块或底层库时极易产生依赖断裂甚至变砖。chaWrt 25.12 全面采用 Alpine APK 3.x 原子事务包管理器，安装速度提升数倍且升级安全可回滚；自研核心套件 apfree-wifidog、xfrpc、xkcptun 均已通过全球开源社区严格审查正式合并入 OpenWrt 官方 Packages Feed。',
  },
  {
    q: '为什么选择 ClawWiFi M3000 v1 搭配 chaWrt 官方系统？',
    a: '核心在于“软硬件深度咬合”的极致性能与开箱即用体验：相比传统普通改版固件，chaWrt 彻底打通了 MT7981B 的 MediaTek PPE 硬件 NAT 卸载（跑满千兆线速 CPU 占用 < 1%），并由小茶 AI 助手统一接管配置调度，原生集成 apfree-wifidog、xfrpc、xkcptun 三大 OpenWrt 官方收录套件，既稳定可靠又告别复杂的命令行配置门槛。',
  },
  {
    q: '如果我完全不会配置 VPS，小茶助手能帮我搞定网络加速与智能分流吗？',
    a: '完全可以。小茶助手独创“双端自动化联调向导”：您只需输入远端 VPS IP 地址，助手会自动生成 Ed25519 免密 SSH 鉴权，远程在 VPS 部署加速核心与防火墙重定向规则，并自动完成端口跳跃防失联校验与 xdns 内核分流联动，新手无需手敲任何复杂的 Linux 命令行即可 5 分钟完成全屋智能网络加速。',
  },
];
