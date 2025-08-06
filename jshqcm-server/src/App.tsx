import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServerInfo from './components/ServerInfo';
import PlayerStats from './components/PlayerStats';

function App() {
  return (
    <div className="min-h-screen bg-dark-100">
      <Header />
      <Hero />
      
      <ServerInfo />

      <PlayerStats />

      <section id="rules" className="py-20 bg-dark-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">服务器规则</h2>
          <div className="glass-card p-8 max-w-4xl mx-auto">
            <p className="text-white/80 text-lg">
              服务器规则和行为准则将在这里显示...
            </p>
          </div>
        </div>
      </section>

      <section id="news" className="py-20 bg-dark-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">新闻公告</h2>
          <div className="glass-card p-8 max-w-4xl mx-auto">
            <p className="text-white/80 text-lg">
              最新新闻和公告将在这里显示...
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-dark-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">联系我们</h2>
          <div className="glass-card p-8 max-w-4xl mx-auto">
            <p className="text-white/80 text-lg">
              联系方式和QQ群信息将在这里显示...
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
