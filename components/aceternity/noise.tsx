export const Noise = () => {
    return (
      <div
        className="z-0 absolute inset-0 w-full h-full scale-[1.2] opacity-25 dark:opacity-20 transform [mask-image:radial-gradient(#fff,transparent,75%)]"
        style={{
          backgroundImage: "url(/noise.webp)",
          backgroundSize: "30%",
        }}
      ></div>
    );
  };