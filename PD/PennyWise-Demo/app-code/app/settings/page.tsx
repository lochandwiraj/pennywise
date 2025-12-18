'use client';

import { motion } from 'framer-motion';
import { User, Bell, Lock, Palette, Globe, HelpCircle } from 'lucide-react';

export default function SettingsPage() {
  const settingsSections = [
    {
      icon: User,
      title: 'Profile Settings',
      description: 'Manage your account information and preferences',
      color: 'from-purple-500/20 to-blue-500/20'
    },
    {
      icon: Bell,
      title: 'Notifications',
      description: 'Configure alerts and notification preferences',
      color: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      icon: Lock,
      title: 'Security & Privacy',
      description: 'Manage your password and security settings',
      color: 'from-green-500/20 to-emerald-500/20'
    },
    {
      icon: Palette,
      title: 'Appearance',
      description: 'Customize the look and feel of your dashboard',
      color: 'from-pink-500/20 to-rose-500/20'
    },
    {
      icon: Globe,
      title: 'Language & Region',
      description: 'Set your preferred language and currency',
      color: 'from-orange-500/20 to-amber-500/20'
    },
    {
      icon: HelpCircle,
      title: 'Help & Support',
      description: 'Get help and contact our support team',
      color: 'from-indigo-500/20 to-purple-500/20'
    }
  ];

  return (
    <div className="min-h-screen p-4 lg:p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold text-gradient mb-2">Settings</h1>
        <p className="text-slate-400">Manage your account and preferences</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {settingsSections.map((section, index) => {
          const Icon = section.icon;
          return (
            <motion.button
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={`glass-card glass-card-hover p-6 text-left bg-gradient-to-br ${section.color}`}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-xl">
                  <Icon className="w-6 h-6 text-slate-100" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-100 mb-1">
                    {section.title}
                  </h3>
                  <p className="text-sm text-slate-400">
                    {section.description}
                  </p>
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="mt-8 glass-card p-6"
      >
        <h2 className="text-xl font-bold mb-4 text-slate-100">About PennyWise Pro</h2>
        <div className="space-y-3 text-slate-400">
          <p>Version: 1.0.0</p>
          <p>Made with love for better financial management</p>
          <p className="text-sm">© 2024 PennyWise Pro. All rights reserved.</p>
        </div>
      </motion.div>
    </div>
  );
}
