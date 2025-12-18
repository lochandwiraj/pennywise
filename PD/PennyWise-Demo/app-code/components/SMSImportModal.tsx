'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Loader2, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

interface SMSImportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SMSImportModal({ isOpen, onClose }: SMSImportModalProps) {
  const [smsText, setSmsText] = useState('');
  const [isParsing, setIsParsing] = useState(false);
  const [parsedData, setParsedData] = useState<any>(null);

  const handleParse = () => {
    setIsParsing(true);
    setParsedData(null);

    setTimeout(() => {
      const parsed = {
        amount: 450,
        type: 'Debit',
        merchant: 'Starbucks Indiranagar',
        category: 'Food & Dining',
        date: 'Nov 15, 2024'
      };
      setParsedData(parsed);
      setIsParsing(false);
    }, 2000);
  };

  const handleAddTransaction = () => {
    onClose();
    setTimeout(() => {
      setSmsText('');
      setParsedData(null);
    }, 300);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setSmsText('');
      setParsedData(null);
      setIsParsing(false);
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={handleClose}
          />
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="glass-card p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gradient">Import Bank SMS</h2>
                <button
                  onClick={handleClose}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-sm text-slate-400 mb-2 block">
                    Paste your bank transaction SMS messages:
                  </label>
                  <textarea
                    value={smsText}
                    onChange={(e) => setSmsText(e.target.value)}
                    placeholder="Dear Customer, Rs.450.00 debited from A/c XX1234 on 15-Nov-24 at STARBUCKS INDIRANAGAR. Avbl Bal: Rs.23,450.00"
                    className="w-full h-32 bg-slate-900/50 border border-white/10 rounded-xl p-4 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                  />
                </div>

                <button
                  onClick={handleParse}
                  disabled={!smsText || isParsing}
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 disabled:from-slate-700 disabled:to-slate-700 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  {isParsing ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Parsing Transaction...
                    </>
                  ) : (
                    'Parse Transactions'
                  )}
                </button>

                <AnimatePresence>
                  {parsedData && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="glass-card p-6 bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-green-500/30"
                    >
                      <div className="flex items-center gap-2 mb-4">
                        <CheckCircle2 className="w-5 h-5 text-green-400" />
                        <span className="text-green-400 font-semibold">
                          Successfully extracted 1 transaction
                        </span>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center justify-between py-2 border-b border-white/10">
                          <span className="text-slate-400">Amount:</span>
                          <span className="text-xl font-bold font-mono text-slate-100">
                            ₹{parsedData.amount}
                          </span>
                        </div>
                        <div className="flex items-center justify-between py-2 border-b border-white/10">
                          <span className="text-slate-400">Type:</span>
                          <span className="text-slate-100 font-medium">{parsedData.type}</span>
                        </div>
                        <div className="flex items-center justify-between py-2 border-b border-white/10">
                          <span className="text-slate-400">Merchant:</span>
                          <span className="text-slate-100 font-medium">{parsedData.merchant}</span>
                        </div>
                        <div className="flex items-center justify-between py-2 border-b border-white/10">
                          <span className="text-slate-400">Category:</span>
                          <span className="px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-sm">
                            {parsedData.category}
                          </span>
                        </div>
                        <div className="flex items-center justify-between py-2">
                          <span className="text-slate-400">Date:</span>
                          <span className="text-slate-100 font-medium">{parsedData.date}</span>
                        </div>
                      </div>

                      <button
                        onClick={handleAddTransaction}
                        className="w-full mt-6 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02]"
                      >
                        Add to Transactions
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
