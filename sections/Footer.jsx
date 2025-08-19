const Footer = () => {
  return (
    <footer className="w-full bg-sky-900 text-white overflow-hidden">
      <div className="flex items-center justify-center gap-3 py-3 md:py-4 px-4">
        <p className="text-lg md:text-xl font-light">Powered by</p>

        <div className="flex flex-col items-center">
          <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest">
            Kevinkun
          </span>
          <div className="flex items-center gap-1.5">
            <div className="border border-t border-white/50 w-4" />
            <span className="text-[8px] md:text-[9px] font-light uppercase tracking-[0.25em]">
              homes
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
