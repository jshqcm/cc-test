import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ClipboardDocumentIcon, UserGroupIcon, ServerIcon } from '@heroicons/react/24/outline';

const Hero: React.FC = () => {
  const [serverStatus] = useState({
    online: true,
    players: 42,
    maxPlayers: 100,
    ping: 15,
  });

  const copyServerIP = () => {
    navigator.clipboard.writeText('play.jshqcm.com');
    alert('服务器IP已复制到剪贴板！');
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-100 via-primary-900 to-dark-200">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/30 to-minecraft-diamond/10 opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-dark-100/90 to-transparent"></div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-minecraft-diamond/30 rounded-full"
            animate={{
              y: [-20, -120],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: '100%',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-32 pb-16">
        <div className="text-center space-y-8">
          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-4">
              <span className="minecraft-text">JSHQCM</span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold text-white/80 mb-6">
              顶级Minecraft联机服务器
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
              体验最纯粹的Minecraft乐趣，与来自世界各地的玩家一起建造、冒险、创造属于你们的传奇
            </p>
          </motion.div>

          {/* Server Status Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto my-12"
          >
            <div className="glass-card p-6 text-center">
              <ServerIcon className="h-8 w-8 mx-auto mb-3 text-minecraft-diamond" />
              <div className="text-2xl font-bold text-white mb-1">
                {serverStatus.online ? '在线' : '离线'}
              </div>
              <div className="text-sm text-white/60">服务器状态</div>
              <div className="text-xs text-minecraft-diamond mt-2">
                延迟: {serverStatus.ping}ms
              </div>
            </div>

            <div className="glass-card p-6 text-center">
              <UserGroupIcon className="h-8 w-8 mx-auto mb-3 text-minecraft-gold" />
              <div className="text-2xl font-bold text-white mb-1">
                {serverStatus.players}/{serverStatus.maxPlayers}
              </div>
              <div className="text-sm text-white/60">在线玩家</div>
              <div className="w-full bg-white/20 rounded-full h-2 mt-2">
                <div
                  className="bg-gradient-to-r from-minecraft-gold to-minecraft-diamond h-2 rounded-full transition-all duration-500"
                  style={{
                    width: `${(serverStatus.players / serverStatus.maxPlayers) * 100}%`,
                  }}
                ></div>
              </div>
            </div>

            <div className="glass-card p-6 text-center">
              <ClipboardDocumentIcon className="h-8 w-8 mx-auto mb-3 text-minecraft-grass" />
              <div className="text-lg font-bold text-white mb-1">1.20.1</div>
              <div className="text-sm text-white/60">服务器版本</div>
              <div className="text-xs text-minecraft-grass mt-2">
                Java版 + 基岩版
              </div>
            </div>
          </motion.div>

          {/* Server IP and Join Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="glass-card p-8 max-w-2xl mx-auto">
              <div className="text-sm text-white/60 mb-2">服务器地址</div>
              <div className="flex items-center justify-between bg-dark-200 rounded-lg p-4">
                <span className="text-xl font-mono text-minecraft-diamond">
                  play.jshqcm.com
                </span>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={copyServerIP}
                  className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <ClipboardDocumentIcon className="h-5 w-5" />
                </motion.button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(93, 202, 227, 0.6)' }}
                whileTap={{ scale: 0.95 }}
                className="minecraft-button text-lg px-8 py-4"
              >
                立即加入游戏
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/20 transition-all duration-300"
              >
                查看服务器详情
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;