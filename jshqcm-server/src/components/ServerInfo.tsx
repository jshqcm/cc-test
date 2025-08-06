import React from 'react';
import { motion } from 'framer-motion';
import {
  ServerIcon,
  ClockIcon,
  GlobeAltIcon,
  CpuChipIcon,
  BuildingLibraryIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';

interface ServerInfoProps {}

const ServerInfo: React.FC<ServerInfoProps> = () => {
  const serverDetails = [
    {
      icon: ServerIcon,
      title: '服务器IP',
      value: 'play.jshqcm.com',
      description: '支持Java版和基岩版',
      color: 'text-minecraft-diamond',
    },
    {
      icon: GlobeAltIcon,
      title: '服务器版本',
      value: '1.20.1',
      description: '最新稳定版本',
      color: 'text-minecraft-gold',
    },
    {
      icon: ClockIcon,
      title: '在线时间',
      value: '24/7',
      description: '全天候不间断运行',
      color: 'text-minecraft-grass',
    },
    {
      icon: CpuChipIcon,
      title: '服务器性能',
      value: '高性能',
      description: 'Intel i9 + 64GB RAM',
      color: 'text-blue-400',
    },
    {
      icon: ShieldCheckIcon,
      title: '反作弊保护',
      value: '启用',
      description: '多重防护系统',
      color: 'text-red-400',
    },
    {
      icon: BuildingLibraryIcon,
      title: '世界类型',
      value: '生存 + 创造',
      description: '多种游戏模式',
      color: 'text-purple-400',
    },
  ];

  const serverFeatures = [
    '🏠 自由建造 - 无限制的创作空间',
    '⚔️ PVP竞技 - 激烈的玩家对战',
    '🏆 排行榜系统 - 展示你的实力',
    '💰 经济系统 - 虚拟货币交易',
    '🎁 每日奖励 - 登录即可获得',
    '🔧 丰富插件 - 增强游戏体验',
    '👥 公会系统 - 与朋友组队',
    '🌍 多世界支持 - 探索不同维度',
  ];

  return (
    <section id="server" className="py-20 bg-dark-200">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6">
            <span className="minecraft-text">服务器信息</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            JSHQCM联机服务器为玩家提供稳定、安全、有趣的Minecraft游戏环境
          </p>
        </motion.div>

        {/* Server Details Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {serverDetails.map((detail, index) => (
            <motion.div
              key={detail.title}
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass-card p-6 text-center group"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-4 group-hover:bg-white/20 transition-colors ${detail.color}`}>
                <detail.icon className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {detail.title}
              </h3>
              <div className={`text-2xl font-bold mb-2 ${detail.color}`}>
                {detail.value}
              </div>
              <p className="text-sm text-white/60">{detail.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Server Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="glass-card p-8 lg:p-12"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            🎮 服务器特色功能
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {serverFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 border border-white/10"
              >
                <p className="text-white/90 text-sm font-medium">{feature}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Connection Guide */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 glass-card p-8"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            🔗 连接指南
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-minecraft-diamond mb-4">
                Java版连接方法
              </h4>
              <ol className="space-y-2 text-white/80">
                <li className="flex items-start space-x-2">
                  <span className="text-minecraft-gold font-bold">1.</span>
                  <span>打开Minecraft Java版启动器</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-minecraft-gold font-bold">2.</span>
                  <span>点击"多人游戏"</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-minecraft-gold font-bold">3.</span>
                  <span>添加服务器，输入IP: play.jshqcm.com</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-minecraft-gold font-bold">4.</span>
                  <span>点击"加入服务器"开始游戏</span>
                </li>
              </ol>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-minecraft-diamond mb-4">
                基岩版连接方法
              </h4>
              <ol className="space-y-2 text-white/80">
                <li className="flex items-start space-x-2">
                  <span className="text-minecraft-gold font-bold">1.</span>
                  <span>打开Minecraft基岩版</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-minecraft-gold font-bold">2.</span>
                  <span>点击"游戏" → "添加服务器"</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-minecraft-gold font-bold">3.</span>
                  <span>输入服务器名称和IP: play.jshqcm.com</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-minecraft-gold font-bold">4.</span>
                  <span>保存并加入服务器</span>
                </li>
              </ol>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServerInfo;