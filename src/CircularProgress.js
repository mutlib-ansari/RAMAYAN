const CircularProgress = ({ progress }) => {
    if (typeof progress !== 'number') {
      console.error('Invalid progress value:', progress);
      return null; // Or return a default state
    }
  
    const radius = 50; // Radius of the circle
    const strokeWidth = 10; // Stroke width of the circle
    const normalizedRadius = radius - strokeWidth * 0.5; // Adjusted radius
    const circumference = normalizedRadius * 2 * Math.PI; // Circumference of the circle
    const strokeDashoffset = circumference - (progress / 100) * circumference; // Calculating offset for progress
  
    return (
      <div className="flex justify-center items-center h-screen">
        <svg height={radius * 2} width={radius * 2}>
          <circle
            stroke="#e6e6e6"
            fill="transparent"
            strokeWidth={strokeWidth}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
          <circle
            stroke="#3b82f6" // Tailwind's blue-500
            fill="transparent"
            strokeWidth={strokeWidth}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
            strokeDasharray={circumference + ' ' + circumference} // Setting up dasharray
            strokeDashoffset={strokeDashoffset} // Setting offset based on progress
            className="transition-all duration-700 ease-in-out" // Animation effect
          />
        </svg>
        <div className="absolute text-center">
          <span className="text-2xl font-bold">{progress}%</span>
        </div>
      </div>
    );
  };
  
  export default CircularProgress;