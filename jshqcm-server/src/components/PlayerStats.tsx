import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  UserIcon,
  TrophyIcon,
  ClockIcon,
  HeartIcon,
  StarIcon,
} from '@heroicons/react/24/outline';

interface Player {
  id: string;
  name: string;
  level: number;
  playtime: string;
  status: 'online' | 'offline';
  avatar?: string;
  rank?: string;
}

interface PlayerStatsProps {}

const PlayerStats: React.FC<PlayerStatsProps> = () => {
  const [activeTab, setActiveTab] = useState<'online' | 'top'>('online');
  const [onlinePlayers] = useState<Player[]>([
    {
      id: '1',
      name: 'MinecraftMaster',
      level: 85,
      playtime: '247小时',
      status: 'online',
      rank: 'VIP',
    },
    {
      id: '2',
      name: 'BuilderPro',
      level: 72,
      playtime: '189小时',
      status: 'online',
      rank: '管理员',
    },
    {
      id: '3',
      name: 'RedstoneWizard',
      level: 68,
      playtime: '156小时',
      status: 'online',
    },
    {
      id: '4',
      name: 'CraftingKing',
      level: 45,
      playtime: '98小时',
      status: 'online',
    },
    {
      id: '5',
      name: 'AdventureSeeker',
      level: 39,
      playtime: '76小时',
      status: 'online',
    },
    {
      id: '6',
      name: 'BlockBreaker',
      level: 33,
      playtime: '54小时',
      status: 'online',
    },
  ]);

  const [topPlayers] = useState<Player[]>([
    {
      id: '1',
      name: 'LegendaryBuilder',
      level: 150,
      playtime: '1247小时',
      status: 'offline',
      rank: '传奇',
    },
    {
      id: '2',
      name: 'MinecraftMaster',
      level: 85,
      playtime: '247小时',
      status: 'online',
      rank: 'VIP',
    },
    {
      id: '3',
      name: 'BuilderPro',
      level: 72,
      playtime: '189小时',
      status: 'online',
      rank: '管理员',
    },
    {
      id: '4',
      name: 'RedstoneWizard',
      level: 68,
      playtime: '156小时',
      status: 'online',
    },
    {
      id: '5',
      name: 'EnderDragonSlayer',
      level: 64,
      playtime: '134小时',
      status: 'offline',
    },
  ]);

  const serverStats = [
    {
      icon: UserIcon,
      label: '总注册用户',
      value: '2,847',
      change: '+127',
      color: 'text-minecraft-diamond',
    },
    {
      icon: HeartIcon,
      label: '活跃玩家',
      value: '1,234',
      change: '+45',
      color: 'text-minecraft-gold',
    },
    {
      icon: TrophyIcon,
      label: '完成成就',
      value: '12,658',
      change: '+298',
      color: 'text-minecraft-grass',
    },
    {
      icon: ClockIcon,
      label: '总游戏时长',
      value: '45,892小时',
      change: '+1,247小时',
      color: 'text-purple-400',
    },
  ];

  const getRankColor = (rank?: string) => {
    switch (rank) {
      case '传奇':
        return 'text-yellow-400 bg-yellow-400/20';
      case '管理员':
        return 'text-red-400 bg-red-400/20';
      case 'VIP':
        return 'text-green-400 bg-green-400/20';
      default:
        return 'text-blue-400 bg-blue-400/20';
    }
  };

  const PlayerCard = ({ player, index }: { player: Player; index: number }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02, x: 10 }}
      className="glass-card p-4 flex items-center space-x-4 group"
    >
      <div className="relative">
        <div className="w-12 h-12 bg-gradient-to-br from-minecraft-diamond to-minecraft-gold rounded-full flex items-center justify-center text-white font-bold">
          {player.name[0].toUpperCase()}
        </div>
        <div
          className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-dark-100 ${
            player.status === 'online' ? 'bg-green-500' : 'bg-gray-500'
          }`}
        />
      </div>
      
      <div className="flex-1 min-w-0">
        <div className="flex items-center space-x-2 mb-1">
          <h3 className="text-white font-semibold truncate">{player.name}</h3>
          {player.rank && (
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRankColor(player.rank)}`}>
              {player.rank}
            </span>
          )}
        </div>
        <div className="flex items-center space-x-4 text-sm text-white/60">
          <span className="flex items-center space-x-1">
            <StarIcon className="h-4 w-4" />
            <span>Lv.{player.level}</span>
          </span>
          <span className="flex items-center space-x-1">
            <ClockIcon className="h-4 w-4" />
            <span>{player.playtime}</span>
          </span>
        </div>
      </div>

      {activeTab === 'top' && (
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-minecraft-gold/20 text-minecraft-gold font-bold">
          #{index + 1}
        </div>
      )}
    </motion.div>
  );

  return (
    <section id="players" className="py-20 bg-dark-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6">
            <span className="minecraft-text">玩家统计</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            查看服务器玩家活动情况和排行榜
          </p>
        </motion.div>

        {/* Server Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {serverStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass-card p-6 text-center group"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 mb-4 group-hover:bg-white/20 transition-colors ${stat.color}`}>
                <stat.icon className="h-6 w-6" />
              </div>
              <div className={`text-2xl font-bold mb-2 ${stat.color}`}>
                {stat.value}
              </div>
              <p className="text-sm text-white/60 mb-1">{stat.label}</p>
              <p className="text-xs text-minecraft-grass">{stat.change}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Player Lists */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="glass-card p-8"
        >
          {/* Tab Buttons */}
          <div className="flex justify-center mb-8">
            <div className="flex bg-white/10 rounded-lg p-1">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveTab('online')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === 'online'
                    ? 'bg-minecraft-diamond text-white shadow-lg'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                在线玩家 ({onlinePlayers.length})
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveTab('top')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === 'top'
                    ? 'bg-minecraft-gold text-white shadow-lg'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                排行榜
              </motion.button>
            </div>
          </div>

          {/* Player List */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-4 max-h-96 overflow-y-auto"
            >
              {(activeTab === 'online' ? onlinePlayers : topPlayers).map((player, index) => (
                <PlayerCard key={player.id} player={player} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Real-time Update Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex items-center justify-center mt-6 text-sm text-white/60"
          >
            <div className="flex items-center space-x-2">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-2 h-2 bg-green-500 rounded-full"
              />
              <span>实时更新中</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PlayerStats;