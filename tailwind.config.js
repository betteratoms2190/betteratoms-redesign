module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: { extend: {
    colors: { night:'#1B1045', dusk:'#3B1E7A', cream:'#FFF7EC', ink:'#24124F', paddo:'#2FA84F', lime:'#5BD66B', sunset:'#FF8A3D', coral:'#E2502E', bubble:'#FF7EB6', sky:'#4CC9F0', butter:'#FFD447' },
    fontFamily: { display:['var(--font-display)','system-ui','sans-serif'], body:['var(--font-body)','system-ui','sans-serif'] },
    boxShadow: { clay:'0 18px 40px -12px rgba(36,18,79,.45), inset 0 -8px 16px rgba(0,0,0,.18), inset 0 8px 14px rgba(255,255,255,.55)', soft:'0 24px 60px -20px rgba(27,16,69,.35)' },
    borderRadius: { blob:'2.25rem' },
  } },
};
