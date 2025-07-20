import React, { useEffect, useState, useCallback } from 'react';

interface FloatingLine {
  id: number;
  width: number;
  delay: number;
  classes: string[];
}

const FloatingLines: React.FC = () => {
  const [lines, setLines] = useState<FloatingLine[]>([]);

  const generateLines = useCallback(() => {
    try {
      const newLines: FloatingLine[] = [];
      const lineCount = window.innerWidth > 768 ? 15 : window.innerWidth > 480 ? 10 : 8;

      for (let i = 0; i < lineCount; i++) {
        const width = Math.random() * 300 + 100; // 100-400px width
        const delay = Math.random() * 20; // 0-20s delay
        const classes = ['floating-line'];

        // Random thickness
        const thickness = Math.random();
        if (thickness > 0.7) {
          classes.push('thick');
        } else if (thickness < 0.3) {
          classes.push('thin');
        }

        // Random curve type
        if (Math.random() > 0.5) {
          classes.push('curved');
        }

        // Random layer for parallax effect
        const layer = Math.floor(Math.random() * 3) + 1;
        classes.push(`layer-${layer}`);

        // Random glow effect
        if (Math.random() > 0.7) {
          classes.push('glow');
        }

        newLines.push({
          id: i,
          width,
          delay,
          classes
        });
      }

      setLines(newLines);
    } catch (error) {
      console.error('Error generating floating lines:', error);
      // Fallback to minimal lines if there's an error
      setLines([
        { id: 1, width: 200, delay: 0, classes: ['floating-line', 'layer-2'] },
        { id: 2, width: 150, delay: 5, classes: ['floating-line', 'thin', 'layer-1'] },
        { id: 3, width: 300, delay: 10, classes: ['floating-line', 'thick', 'curved', 'layer-3'] }
      ]);
    }
  }, []);

  useEffect(() => {
    // Generate floating lines with different properties
    generateLines();

    // Debounced resize handler
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        generateLines();
      }, 250); // Debounce resize events
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
    };
  }, [generateLines]);

  return (
    <div className="floating-lines-bg">
      {lines.map((line) => (
        <div
          key={line.id}
          className={line.classes.join(' ')}
          style={{
            width: `${line.width}px`,
            animationDelay: `${line.delay}s`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
        />
      ))}
    </div>
  );
};

export default FloatingLines; 