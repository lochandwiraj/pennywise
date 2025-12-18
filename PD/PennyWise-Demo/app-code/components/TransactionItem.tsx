'use client';

import { motion } from 'framer-motion';
import { Transaction, categoryColors } from '@/lib/data';
import { Calendar } from 'lucide-react';

interface TransactionItemProps {
  transaction: Transaction;
  index: number;
}

export function TransactionItem({ transaction, index }: TransactionItemProps) {
  const isIncome = transaction.amount > 0;
  const color = categoryColors[transaction.category];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="glass-card p-4 mb-3 glass-card-hover"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 flex-1">
          <div className="text-3xl">{transaction.icon}</div>
          <div className="flex-1">
            <p className="font-semibold text-slate-100">{transaction.merchant}</p>
            <div className="flex items-center gap-2 mt-1">
              <Calendar className="w-3 h-3 text-slate-500" />
              <span className="text-xs text-slate-500">{transaction.date}</span>
              <span
                className="text-xs px-2 py-1 rounded-full"
                style={{
                  backgroundColor: `${color}20`,
                  color: color
                }}
              >
                {transaction.category}
              </span>
            </div>
          </div>
        </div>
        <div className={`text-xl font-bold font-mono ${isIncome ? 'text-green-400' : 'text-slate-100'}`}>
          {isIncome ? '+' : ''}₹{Math.abs(transaction.amount).toLocaleString('en-IN')}
        </div>
      </div>
    </motion.div>
  );
}
