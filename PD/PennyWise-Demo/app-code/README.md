# PennyWise 💰

A modern, intelligent financial management application built with Next.js, TypeScript, and Tailwind CSS. PennyWise helps you track expenses, set financial goals, and gain insights into your spending habits with a beautiful, responsive interface.

## ✨ Features

- **Dashboard Overview**: Get a comprehensive view of your financial health
- **Transaction Management**: Track and categorize your income and expenses
- **Financial Goals**: Set and monitor progress towards your financial objectives
- **Smart Insights**: AI-powered analysis of your spending patterns
- **SMS Import**: Import transactions directly from SMS notifications
- **Health Score**: Visual representation of your financial wellness
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## 🚀 Tech Stack

- **Framework**: Next.js 13.5.1 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom components
- **UI Components**: Radix UI primitives
- **Charts**: Recharts for data visualization
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Form Handling**: React Hook Form with Zod validation
- **Database**: Supabase (configured)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/lochandwiraj/pennywise.git
   cd pennywise
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Add your environment variables (Supabase keys, etc.)

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking

## 📱 Pages & Features

### Dashboard (`/`)
- Financial health overview
- Recent transactions
- Quick stats and summaries
- Health score gauge

### Transactions (`/transactions`)
- Complete transaction history
- Add, edit, and categorize transactions
- Filter and search functionality
- Import from SMS

### Goals (`/goals`)
- Set financial goals
- Track progress
- Visual progress indicators
- Goal management

### Insights (`/insights`)
- Spending analysis
- Category breakdowns
- Trends and patterns
- AI-powered recommendations

### Settings (`/settings`)
- User preferences
- Account management
- Data export/import
- Notification settings

## 🎨 UI Components

The app uses a comprehensive set of custom UI components built on top of Radix UI:

- Cards, Buttons, Inputs, Dialogs
- Charts and Data Visualization
- Navigation and Layout components
- Form components with validation
- Toast notifications
- Progress indicators

## 🔧 Configuration

### Tailwind CSS
Custom configuration with:
- Custom color palette
- Animation utilities
- Responsive breakpoints
- Component-specific styles

### TypeScript
Strict TypeScript configuration with:
- Path mapping for clean imports
- Strict type checking
- Custom type definitions

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure environment variables
4. Deploy automatically

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- AWS Amplify
- DigitalOcean App Platform

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Lochan Dwiraj**
- GitHub: [@lochandwiraj](https://github.com/lochandwiraj)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [Radix UI](https://www.radix-ui.com/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide](https://lucide.dev/)

---

⭐ If you found this project helpful, please give it a star on GitHub!