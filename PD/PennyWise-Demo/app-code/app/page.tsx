'use client';

import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, PiggyBank, Receipt } from 'lucide-react';
import { SummaryCard } from '@/components/SummaryCard';
import { HealthScoreGauge } from '@/components/HealthScoreGauge';
import { summaryData, spendingByCategory, spendingTrend } from '@/lib/data';
import { PieChart, Pie, Cell, ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

export default function Dashboard() {
  return (
    <div className="min-h-screen p-4 lg:p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold text-gradient mb-2">Dashboard</h1>
        <p className="text-slate-400">Welcome back! Here's your financial overview</p>
      </motion.div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8">
        <SummaryCard
          title="Income"
          value={summaryData.income}
          icon={TrendingUp}
          trend="+12% from last month"
          index={0}
          color="text-green-400"
        />
        <SummaryCard
          title="Expenses"
          value={summaryData.expenses}
          icon={TrendingDown}
          trend="+5% from last month"
          index={1}
          color="text-red-400"
        />
        <SummaryCard
          title="Savings"
          value={summaryData.savings}
          icon={PiggyBank}
          trend="36% savings rate"
          index={2}
          color="text-purple-400"
        />
        <SummaryCard
          title="Transactions"
          value={summaryData.transactions}
          icon={Receipt}
          trend="This month"
          index={3}
          color="text-blue-400"
        />
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Spending by Category */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="glass-card p-6 glass-card-hover"
        >
          <h2 className="text-xl font-bold mb-6 text-slate-100">Spending by Category</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={spendingByCategory}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {spendingByCategory.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(15, 23, 42, 0.9)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '12px',
                  color: '#F8FAFC'
                }}
                formatter={(value: any) => `₹${value.toLocaleString('en-IN')}`}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="grid grid-cols-2 gap-3 mt-6">
            {spendingByCategory.map((category) => (
              <div key={category.name} className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: category.color }}
                />
                <span className="text-sm text-slate-400">{category.name}</span>
                <span className="text-sm font-mono text-slate-300 ml-auto">
                  ₹{(category.value / 1000).toFixed(1)}k
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Financial Health Score */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="glass-card p-6 glass-card-hover"
        >
          <h2 className="text-xl font-bold mb-6 text-slate-100">Financial Health Score</h2>
          <div className="flex items-center justify-center h-[300px]">
            <HealthScoreGauge score={summaryData.healthScore} />
          </div>
        </motion.div>
      </div>

      {/* Spending Trend */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="glass-card p-6 glass-card-hover"
      >
        <h2 className="text-xl font-bold mb-6 text-slate-100">Spending Trend - Last 6 Months</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={spendingTrend}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
            <XAxis
              dataKey="month"
              stroke="#94A3B8"
              style={{ fontSize: '14px' }}
            />
            <YAxis
              stroke="#94A3B8"
              style={{ fontSize: '14px' }}
              tickFormatter={(value) => `₹${(value / 1000)}k`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(15, 23, 42, 0.9)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '12px',
                color: '#F8FAFC'
              }}
              formatter={(value: any) => [`₹${value.toLocaleString('en-IN')}`, 'Spending']}
            />
            <Line
              type="monotone"
              dataKey="amount"
              stroke="url(#colorGradient)"
              strokeWidth={3}
              dot={{ fill: '#8B5CF6', r: 6 }}
              activeDot={{ r: 8 }}
            />
            <defs>
              <linearGradient id="colorGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#3B82F6" />
              </linearGradient>
            </defs>
          </LineChart>
        </ResponsiveContainer>
      </motion.div>
    </div>
  );
}
