import { cn } from "@/lib/utils";
import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const ScratchToReveal = ({
  children,
  width,
  height,
  minScratchPercentage = 90,
  onComplete,
  className,
  gradientColors = ["#c084fc", "#ec4899"],
}) => {
  const canvasRef = useRef(null);
  const [isScratching, setIsScratching] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const controls = useAnimation();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (canvas && ctx) {
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, gradientColors[0]);
      gradient.addColorStop(0.5, gradientColors[1]);
      gradient.addColorStop(1, gradientColors[2]);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      const baseFontSize = canvas.width < 300 ? 20 : 35;
    ctx.font = `bold ${baseFontSize}px Arial`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    ctx.fillStyle = "rgba(255, 255, 255, 0.2)";

    const centerX = canvas.width / 2; 
    const centerY = canvas.height / 2;

    ctx.fillText("Scratch to", centerX, centerY - baseFontSize);
    ctx.fillText("Reveal", centerX, centerY);                  
    ctx.fillText("The Star", centerX, centerY + baseFontSize);  
    }
  }, [gradientColors]);
  
  

  useEffect(() => {
    const handleDocumentMouseMove = (event) => {
      if (!isScratching) return;
      scratch(event.clientX, event.clientY);
    };

    const handleDocumentTouchMove = (event) => {
      if (!isScratching) return;
      const touch = event.touches[0];
      scratch(touch.clientX, touch.clientY);
    };

    const handleDocumentMouseUp = () => {
      setIsScratching(false);
      checkCompletion();
    };

    const handleDocumentTouchEnd = () => {
      setIsScratching(false);
      checkCompletion();
    };

    document.addEventListener("mousedown", handleDocumentMouseMove);
    document.addEventListener("mousemove", handleDocumentMouseMove);
    document.addEventListener("touchstart", handleDocumentTouchMove);
    document.addEventListener("touchmove", handleDocumentTouchMove);
    document.addEventListener("mouseup", handleDocumentMouseUp);
    document.addEventListener("touchend", handleDocumentTouchEnd);
    document.addEventListener("touchcancel", handleDocumentTouchEnd);

    return () => {
      document.removeEventListener("mousedown", handleDocumentMouseMove);
      document.removeEventListener("mousemove", handleDocumentMouseMove);
      document.removeEventListener("touchstart", handleDocumentTouchMove);
      document.removeEventListener("touchmove", handleDocumentTouchMove);
      document.removeEventListener("mouseup", handleDocumentMouseUp);
      document.removeEventListener("touchend", handleDocumentTouchEnd);
      document.removeEventListener("touchcancel", handleDocumentTouchEnd);
    };
  }, [isScratching]);

  const handleMouseDown = () => setIsScratching(true);

  const handleTouchStart = () => setIsScratching(true);

  const scratch = (clientX, clientY) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (canvas && ctx) {
      const rect = canvas.getBoundingClientRect();
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height; 
      const x = (clientX - rect.left) * scaleX;
      const y = (clientY - rect.top) * scaleY;
  
      ctx.globalCompositeOperation = "destination-out";
      ctx.beginPath();
      ctx.arc(x, y, 30, 0, Math.PI * 2);
      ctx.fill();
    }
  };
  

  const checkCompletion = () => {
    if (isComplete) return;

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (canvas && ctx) {
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const pixels = imageData.data;
      const totalPixels = pixels.length / 4;
      let clearedPixels = 0;

      for (let i = 3; i < pixels.length; i += 4) {
        if (pixels[i] === 0) clearedPixels++;
      }

      const percentage = (clearedPixels / totalPixels) * 100;
      if (percentage >= minScratchPercentage) {
        setIsComplete(true);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        startAnimation();
      }
    }
  };
  
  const startAnimation = async () => {
    await controls.start({
      scale: [1, 1.5, 1],
      rotate: [0, 10, -10, 10, -10, 0],
      transition: { duration: 0.5 },
    });

    if (onComplete) {
      onComplete();
    }
  };
  return (
    <motion.div
      className={cn("relative select-none", className)}
      style={{
        width,
        height,
        cursor:
          "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj4KICA8Y2lyY2xlIGN4PSIxNiIgY3k9IjE2IiByPSIxNSIgc3R5bGU9ImZpbGw6I2ZmZjtzdHJva2U6IzAwMDtzdHJva2Utd2lkdGg6MXB4OyIgLz4KPC9zdmc+'), auto",
      }}
      animate={controls}
    >
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        className="absolute left-0 top-0 z-[1] w-full h-full mx-auto"
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      ></canvas>
      {children}
    </motion.div>
  );
};

export default ScratchToReveal;
