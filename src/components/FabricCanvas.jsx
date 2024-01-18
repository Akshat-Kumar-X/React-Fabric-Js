import React, { useEffect, useRef, useState } from 'react';
import { fabric } from 'fabric';

const FabricCanvas = () => {
  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState(null);
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  useEffect(() => {
    const newCanvas = new fabric.Canvas(canvasRef.current, {
      width: 800,
      height: 600,
    });

    // Adding initial state to history
    const initialCanvasState = JSON.stringify(newCanvas.toJSON());
    setHistory([initialCanvasState]);
    setHistoryIndex(0);

    // Attaching event listeners
    const addButton = document.getElementById('addButton');
    addButton.addEventListener('click', addTextBox);

    // Updating state with the new canvas and clean up when component unmounts
    setCanvas(newCanvas);
    return () => {
      newCanvas.dispose();
      addButton.removeEventListener('click', addTextBox);
    };
  }, []);

  const addTextBox = () => {
    if (!canvas) return;
    const text = new fabric.Textbox('Enter text here', {
      left: 100,
      top: 100,
      fontSize: 20,
      fontFamily: 'Arial',
      textAlign: 'center',
      fill: 'black',
    });
    canvas.add(text);
    canvas.setActiveObject(text);
    canvas.renderAll();

    // Adding new canvas state to history
    const newCanvasState = JSON.stringify(canvas.toJSON());
    const newHistory = [...history.slice(0, historyIndex + 1), newCanvasState];
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  };

  const handleUndo = () => {
    if (historyIndex > 0 && canvas) {
      canvas.loadFromJSON(JSON.parse(history[historyIndex - 1]), () => {
        canvas.renderAll();
        setHistoryIndex(historyIndex - 1);
      });
    }
  };

  const handleRedo = () => {
    if (historyIndex < history.length - 1 && canvas) {
      canvas.loadFromJSON(JSON.parse(history[historyIndex + 1]), () => {
        canvas.renderAll();
        setHistoryIndex(historyIndex + 1);
      });
    }
  };

  return (
    <div>
      
      <div className='flex flex-row gap-4 justify-center '>
        <div  className='p-1 flex flex-col  rounded-xl bg-zinc-800 shadow-lg px-3 py-3 gap-3'>
            <button id="addButton" onClick={addTextBox} className='bg-zinc-500 px-4 py-2 rounded text-white'>Add Text Box</button>
            <button onClick={handleUndo}  className='bg-zinc-500  py-2 rounded text-white'>Undo</button>
            <button onClick={handleRedo}  className='bg-zinc-500  py-2 rounded text-white'>Redo</button>
        </div>
        <div className='p-1 flex flex-col justify-center items-center max-w-[810px] rounded-xl bg-white shadow-lg'>
            <canvas ref={canvasRef}></canvas>
        </div>
      </div>
      
    </div>
  );
};

export default FabricCanvas;
