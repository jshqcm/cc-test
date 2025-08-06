import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: '首页', href: '#home' },
    { name: '服务器信息', href: '#server' },
    { name: '在线玩家', href: '#players' },
    { name: '服务器规则', href: '#rules' },
    { name: '新闻公告', href: '#news' },
    { name: '联系我们', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full z-50 glass-card border-b border-white/20"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-minecraft-diamond to-minecraft-gold rounded-lg flex items-center justify-center">
              <span className="text-xl font-bold text-white">J</span>
            </div>
            <h1 className="text-2xl font-bold minecraft-text">
              JSHQCM联机服务器
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.05, color: '#5dcae3' }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-white hover:text-minecraft-diamond transition-colors duration-300 font-medium"
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          {/* Join Server Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden lg:block minecraft-button"
          >
            加入服务器
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isMenuOpen ? 'auto' : 0,
            opacity: isMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="lg:hidden overflow-hidden"
        >
          <nav className="pt-4 pb-2 space-y-2">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ x: 10 }}
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 px-4 text-white hover:text-minecraft-diamond hover:bg-white/10 rounded-lg transition-all duration-300"
              >
                {item.name}
              </motion.a>
            ))}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full mt-4 minecraft-button"
            >
              加入服务器
            </motion.button>
          </nav>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;