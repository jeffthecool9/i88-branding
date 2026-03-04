{/* CTA Section */}
<section className="relative py-24 sm:py-32 px-4 overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-b from-[#0B1120] to-[#0f172a]" />

  {/* Animated Glow Background */}
  <motion.div
    animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
    transition={{ duration: 8, repeat: Infinity }}
    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[120px] pointer-events-none"
  />

  <div className="max-w-4xl mx-auto relative z-10">
    <motion.div
      initial={{ opacity: 0, scale: 0.98, y: 15 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] border border-cyan-500/30 rounded-none p-10 sm:p-16 text-center shadow-[0_0_50px_rgba(0,191,255,0.1)] relative overflow-hidden group"
    >
      <div className="max-w-3xl mx-auto text-center">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-[1.1]"
        >
          Unlock Your Welcome Reward
        </motion.h2>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="mt-4 text-base sm:text-lg text-gray-300"
        >
          Choose your activation tier. Rewards activate instantly after deposit.
          <span className="text-white font-semibold"> (24-hour window for new members)</span>
        </motion.p>

        {/* Promo Cards */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
          className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 text-left"
        >
          {/* RM50 Tier */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 350, damping: 22 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 shadow-[0_0_30px_rgba(255,255,255,0.06)] hover:bg-white/10 transition-colors"
            onMouseEnter={() => playSFX("click")}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-white/10 text-gray-200 border border-white/10">
                  STARTER
                </div>

                <h3 className="mt-4 text-xl font-extrabold text-white">Deposit RM50</h3>

                <p className="mt-1 text-sm text-gray-300">
                  Activate <span className="text-cyan-400 font-bold">88 FREE SPINS</span>
                </p>
              </div>

              <div className="text-right">
                <div className="text-3xl font-black text-white leading-none">88</div>
                <div className="text-xs text-gray-400 tracking-wider mt-1">SPINS</div>
              </div>
            </div>

            <div className="mt-5 pt-5 border-t border-white/10 flex items-center justify-between">
              <div className="text-xs text-gray-400">
                Window: <span className="text-gray-200 font-semibold">24 hours</span>
              </div>
              <div className="text-xs text-gray-300">Low risk start</div>
            </div>
          </motion.div>

          {/* RM100 Tier */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 350, damping: 22 }}
            className="group relative overflow-hidden rounded-2xl border border-cyan-400/30 bg-gradient-to-br from-cyan-500/10 to-white/5 backdrop-blur-sm p-6 shadow-[0_0_45px_rgba(0,191,255,0.18)] hover:from-cyan-500/15 transition-colors"
            onMouseEnter={() => playSFX("click")}
          >
            <div className="absolute top-5 right-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black tracking-wide bg-cyan-500/15 text-cyan-200 border border-cyan-400/30">
                MOST CHOSEN
              </div>
            </div>

            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-cyan-500/10 text-cyan-200 border border-cyan-400/20">
                  BEST VALUE
                </div>

                <h3 className="mt-4 text-xl font-extrabold text-white">Deposit RM100</h3>

                <p className="mt-1 text-sm text-gray-200">
                  Activate <span className="text-cyan-400 font-black">168 FREE SPINS</span>
                </p>

                <p className="mt-2 text-xs text-gray-300">
                  <span className="text-white font-semibold">+80 spins</span> vs RM50
                </p>
              </div>

              <div className="text-right">
                <div className="text-3xl font-black text-white leading-none">168</div>
                <div className="text-xs text-cyan-200/80 tracking-wider mt-1">SPINS</div>
              </div>
            </div>

            <div className="mt-5 pt-5 border-t border-cyan-400/15 flex items-center justify-between">
              <div className="text-xs text-gray-300">
                Window: <span className="text-white font-semibold">24 hours</span>
              </div>
              <div className="text-xs text-cyan-200 font-semibold">Better value</div>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.45 }}
          className="mt-10"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -8 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => playSFX("success")}
            className="bg-cyan-500 hover:bg-cyan-400 text-black font-black text-lg md:text-xl px-12 py-5 rounded-full uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(0,191,255,0.3)]"
          >
            Claim Now
          </motion.button>

          <p className="mt-8 text-xs text-gray-500 font-sans uppercase tracking-[0.2em]">
            * Limited to New Member only
          </p>
        </motion.div>
      </div>
    </motion.div>
  </div>
</section>
