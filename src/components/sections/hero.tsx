const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-dr-bg overflow-hidden">
      {/* Main Content Container */}
      <div className="w-full px-20">
        <div className="relative max-w-[1400px] mx-auto">
          {/* Name - 左上角 */}
          <div className="absolute top-[-120px] left-0">
            <h2 className="text-hero-name text-dr-black uppercase">
              Duncan Robert
            </h2>
          </div>
          
          {/* Main Layout - 使用Grid实现精确布局 */}
          <div className="relative grid grid-cols-[1fr_auto_1fr] items-center gap-8">
            {/* DIGITAL - 左侧 */}
            <div className="text-right">
              <h1 className="text-hero text-dr-black uppercase">
                Digital
              </h1>
            </div>
            
            {/* Hero Image - 中间 */}
            <div className="relative">
              <div className="relative w-[380px] h-[480px]">
                {/* Image Container */}
                <div className="w-full h-full rounded-[40px] overflow-hidden bg-gray-200">
                  <img 
                    src="https://via.placeholder.com/380x480" 
                    alt="Duncan Robert"
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
                
                {/* Hi Button - 左下角外侧 */}
                <button className="absolute -bottom-10 -left-14 w-[120px] h-[120px] bg-dr-blue text-white rounded-full flex items-center justify-center text-2xl font-normal hover:bg-dr-blue-hover transition-all duration-300 shadow-xl hover:scale-105 transform hover:shadow-2xl">
                  Hi
                </button>
              </div>
            </div>
            
            {/* DESIGNER - 右侧 */}
            <div className="text-left">
              <h1 className="text-hero text-dr-black uppercase">
                Designer
              </h1>
              
              {/* Subtitle - 下方 */}
              <p className="text-subtitle text-dr-gray mt-4 ml-2 max-w-[220px]">
                I'm a US-based digital designer and Framer developer
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side Blue Dot */}
      <div className="absolute right-20 top-[45%]">
        <div className="w-3 h-3 bg-dr-blue rounded-full"></div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2">
        <div className="w-7 h-11 border-2 border-gray-300 rounded-full flex justify-center pt-2 opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
          <div className="w-1.5 h-2.5 bg-gray-400 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;