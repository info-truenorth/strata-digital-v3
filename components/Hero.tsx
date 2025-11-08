'use client';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/hero-nz-bush.jpg')",
          }}
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-32 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-semibold text-white mb-8 leading-tight">
          Digital presence built for rural NZ reality
        </h1>

        <div className="max-w-3xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-8">
            digital presence that actually works in rural nz
          </h2>
          <p className="text-base md:text-lg text-white/90 leading-relaxed">
            80% of your customers are searching on mobile. We build fast, mobile-first websites that actually work on rural connections.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
