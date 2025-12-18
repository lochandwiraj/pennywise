'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, Plus, Download } from 'lucide-react';
import { TransactionItem } from '@/components/TransactionItem';
import { SMSImportModal } from '@/components/SMSImportModal';
import { transactions } from '@/lib/data';

export default function TransactionsPage() {
  const [dateFilter, setDateFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredTransactions = transactions.filter((transaction) => {
    if (categoryFilter !== 'all' && transaction.category !== categoryFilter) {
      return false;
    }
    return true;
  });

  const categories = ['all', ...Array.from(new Set(transactions.map(t => t.category)))];

  return (
    <div className="min-h-screen p-4 lg:p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold text-gradient mb-2">Transactions</h1>
        <p className="text-slate-400">Track all your financial activities</p>
      </motion.div>

      {/* Filters and Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="glass-card p-4 mb-6"
      >
        <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
          <div className="flex flex-col sm:flex-row gap-3 flex-1">
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
              <select
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
                className="pl-10 pr-4 py-2 bg-slate-900/50 border border-white/10 rounded-xl text-slate-100 focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none cursor-pointer min-w-[160px]"
              >
                <option value="all">All Time</option>
                <option value="7">Last 7 days</option>
                <option value="30">Last 30 days</option>
                <option value="90">Last 3 months</option>
              </select>
            </div>

            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="pl-10 pr-4 py-2 bg-slate-900/50 border border-white/10 rounded-xl text-slate-100 focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none cursor-pointer min-w-[160px]"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-[1.02]"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Import SMS</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-[1.02]">
              <Plus className="w-4 h-4" />
              <span className="hidden sm:inline">Add Transaction</span>
            </button>
          </div>
        </div>
      </motion.div>

      {/* Transaction List */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="mb-4 flex items-center justify-between">
          <p className="text-slate-400 text-sm">
            Showing {filteredTransactions.length} transaction{filteredTransactions.length !== 1 ? 's' : ''}
          </p>
          <p className="text-slate-400 text-sm">
            Total: {filteredTransactions.reduce((sum, t) => sum + t.amount, 0) > 0 ? '+' : ''}
            ₹{Math.abs(filteredTransactions.reduce((sum, t) => sum + t.amount, 0)).toLocaleString('en-IN')}
          </p>
        </div>

        <div className="space-y-3">
          {filteredTransactions.map((transaction, index) => (
            <TransactionItem
              key={`${transaction.date}-${transaction.merchant}-${index}`}
              transaction={transaction}
              index={index}
            />
          ))}
        </div>
      </motion.div>

      <SMSImportModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
