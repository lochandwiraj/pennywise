export interface Transaction {
  date: string;
  merchant: string;
  category: string;
  amount: number;
  icon: string;
}

export interface Goal {
  name: string;
  icon: string;
  current: number;
  target: number;
  deadline: string;
  status: 'on-track' | 'behind' | 'completed';
  color: string;
}

export interface Insight {
  type: 'alert' | 'tip' | 'investment' | 'achievement' | 'optimization';
  icon: string;
  title: string;
  description: string;
  actionText?: string;
}

export const transactions: Transaction[] = [
  { date: "2024-11-24", merchant: "Zomato", category: "Food", amount: -450, icon: "🍕" },
  { date: "2024-11-23", merchant: "Uber", category: "Transport", amount: -230, icon: "🚕" },
  { date: "2024-11-23", merchant: "Starbucks", category: "Food", amount: -380, icon: "☕" },
  { date: "2024-11-22", merchant: "Amazon", category: "Shopping", amount: -1200, icon: "📦" },
  { date: "2024-11-22", merchant: "Salary Credit", category: "Income", amount: 75000, icon: "💰" },
  { date: "2024-11-21", merchant: "Swiggy", category: "Food", amount: -520, icon: "🍔" },
  { date: "2024-11-20", merchant: "Ola", category: "Transport", amount: -180, icon: "🚗" },
  { date: "2024-11-20", merchant: "Big Bazaar", category: "Shopping", amount: -2100, icon: "🛒" },
  { date: "2024-11-19", merchant: "Electricity Bill", category: "Bills", amount: -1850, icon: "⚡" },
  { date: "2024-11-18", merchant: "PVR Cinemas", category: "Entertainment", amount: -800, icon: "🎬" },
  { date: "2024-11-17", merchant: "Cafe Coffee Day", category: "Food", amount: -290, icon: "☕" },
  { date: "2024-11-16", merchant: "Rapido", category: "Transport", amount: -95, icon: "🏍️" },
  { date: "2024-11-15", merchant: "Flipkart", category: "Shopping", amount: -3400, icon: "📦" },
  { date: "2024-11-14", merchant: "Dominos", category: "Food", amount: -650, icon: "🍕" },
  { date: "2024-11-13", merchant: "Netflix", category: "Entertainment", amount: -199, icon: "🎥" },
  { date: "2024-11-12", merchant: "DMart", category: "Shopping", amount: -1800, icon: "🛍️" },
  { date: "2024-11-11", merchant: "Water Bill", category: "Bills", amount: -450, icon: "💧" },
  { date: "2024-11-10", merchant: "BookMyShow", category: "Entertainment", amount: -600, icon: "🎭" },
  { date: "2024-11-09", merchant: "Petrol Pump", category: "Transport", amount: -2500, icon: "⛽" },
  { date: "2024-11-08", merchant: "Restaurant", category: "Food", amount: -1200, icon: "🍽️" }
];

export const categoryColors: { [key: string]: string } = {
  'Food': '#F97316',
  'Transport': '#3B82F6',
  'Shopping': '#8B5CF6',
  'Bills': '#EF4444',
  'Entertainment': '#EC4899',
  'Income': '#10B981'
};

export const spendingByCategory = [
  { name: 'Food', value: 12340, color: '#F97316' },
  { name: 'Transport', value: 8450, color: '#3B82F6' },
  { name: 'Shopping', value: 9200, color: '#8B5CF6' },
  { name: 'Bills', value: 15000, color: '#EF4444' },
  { name: 'Entertainment', value: 3240, color: '#EC4899' }
];

export const spendingTrend = [
  { month: 'Jan', amount: 42000 },
  { month: 'Feb', amount: 45000 },
  { month: 'Mar', amount: 43000 },
  { month: 'Apr', amount: 48000 },
  { month: 'May', amount: 46000 },
  { month: 'Jun', amount: 48230 }
];

export const summaryData = {
  income: 75000,
  expenses: 48230,
  savings: 26770,
  transactions: 147,
  healthScore: 78
};

export const goals: Goal[] = [
  {
    name: "Emergency Fund",
    icon: "🚨",
    current: 67000,
    target: 100000,
    deadline: "45 days",
    status: "on-track",
    color: "green"
  },
  {
    name: "Vacation Fund",
    icon: "✈️",
    current: 32000,
    target: 50000,
    deadline: "90 days",
    status: "behind",
    color: "yellow"
  },
  {
    name: "Monthly SIP Investment",
    icon: "📈",
    current: 5000,
    target: 5000,
    deadline: "This month",
    status: "completed",
    color: "green"
  }
];

export const insightsSet1: Insight[] = [
  {
    type: 'alert',
    icon: '⚠️',
    title: 'Spending Alert',
    description: "Coffee shop spending: ₹3,240 this month. That's 40% above your average!",
    actionText: '💡 Tip: Brew at home, save ₹2,160/month'
  },
  {
    type: 'tip',
    icon: '💡',
    title: 'Subscription Opportunity',
    description: "You haven't used Netflix in 45 days. Cancel = ₹2,388 saved annually"
  },
  {
    type: 'investment',
    icon: '📈',
    title: 'Investment Recommendation',
    description: 'Invest ₹5,000/month in SIP @ 12% returns. Potential value in 10 years: ₹8.2 lakhs'
  },
  {
    type: 'achievement',
    icon: '🎉',
    title: 'Achievement Unlocked!',
    description: 'You saved 15% more than last month. Keep up the great work! 🏆'
  },
  {
    type: 'optimization',
    icon: '💰',
    title: 'Smart Money Move',
    description: 'Use HDFC cashback card for groceries. Earn 5% back = ₹480/month savings'
  }
];

export const insightsSet2: Insight[] = [
  {
    type: 'alert',
    icon: '🎯',
    title: 'Budget Alert',
    description: 'Food spending at 82% of monthly budget. Consider meal planning to stay on track.'
  },
  {
    type: 'optimization',
    icon: '💳',
    title: 'Card Optimization',
    description: 'Switch to rewards card for online shopping. Earn 2x points on all purchases!'
  },
  {
    type: 'achievement',
    icon: '📊',
    title: 'Trend Alert',
    description: 'Transport costs down 20% this month - great job! You saved ₹1,690 by carpooling.'
  },
  {
    type: 'tip',
    icon: '🏦',
    title: 'Savings Goal',
    description: "On track to save ₹30,000 by year end. You're doing amazing!"
  },
  {
    type: 'alert',
    icon: '⚡',
    title: 'Bill Optimization',
    description: 'Electricity usage up 15% - check for power leaks. Small changes = big savings!'
  }
];
