const BackgroundLines = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-black">

      {/* Vertical Lines */}
      <div className="absolute inset-0 flex justify-around">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="w-px h-full bg-linear-to-b 
                       from-transparent via-white/10 to-transparent
                       animate-pulse"
            style={{
              animationDelay: `${i * 0.4}s`,
              animationDuration: "3s",
            }}
          />
        ))}
      </div>

      {/* Horizontal Lines */}
      <div className="absolute inset-0 flex flex-col justify-around">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="h-px w-full bg-linear-to-r 
                       from-transparent via-white/5 to-transparent
                       animate-pulse"
            style={{
              animationDelay: `${i * 0.6}s`,
              animationDuration: "4s",
            }}
          />
        ))}
      </div>

    </div>
  );
};

export default BackgroundLines;
