import React, { useRef } from 'react';
import { Layer, Circle, Rect } from 'react-konva';

const Dealer = () => {
  const leftEye: React.Ref<any> = useRef(null);
  const rightEye: React.Ref<any> = useRef(null);
  const face: React.Ref<any> = useRef(null);
  const blinkEyes = (theEye: React.RefObject<any>) => {
    let currentX = theEye.current.attrs.x;
    let currentY = theEye.current.attrs.y;

    theEye.current.to({
      y: currentY + 7,
      scaleY: 0.1,
      duration: 0.2,
    });
    const blinkEyeTO = setTimeout(() => {
      theEye.current.to({
        y: currentY,
        scaleY: 1,
        duration: 0.1,
      });
      clearTimeout(blinkEyeTO);
    }, 200);
    const moveEyeRight = setTimeout(() => {
      theEye.current.to({
        x: currentX + 6,
        y: currentY + 3,
        duration: 0.2,
      });
      face.current.to({
        x: 597,
        duration: 0.2,
      })
      clearTimeout(moveEyeRight);
    }, 1000);
    const moveEyeLeft = setTimeout(() => {
      theEye.current.to({
        x: currentX - 6,
        y: currentY + 3,
        duration: 0.3,
      });
      face.current.to({
        x: 593,
        duration: 0.3,
      })
      clearTimeout(moveEyeLeft);
    }, 2000);
    const moveEyeBack = setTimeout(() => {
      theEye.current.to({
        x: currentX,
        y: currentY,
        duration: 0.2,
      });
      face.current.to({
        x: 595,
        duration: 0.2,
      })
      clearTimeout(moveEyeBack);
    }, 3000);
  };

  React.useEffect(() => {
    const blinkEyesInterval = setInterval(() => {
      blinkEyes(leftEye);
      blinkEyes(rightEye);
    }, 8000);

    return () => clearInterval(blinkEyesInterval);
  }, []);

  return (
    <Layer>
      <Circle x={600} y={75} radius={75} fill="#637dc3" />
      <Circle x={600} y={80} radius={60} fill="#0d2344" />
      <Circle x={600} y={77} radius={55} fill="#21365c" />
      <Circle x={595} y={75} radius={45} fill="#28406a" ref={face} />
      <Rect
        x={565}
        y={70}
        width={25}
        height={15}
        fill="white"
        cornerRadius={20}
        ref={leftEye}
      />
      <Rect
        x={615}
        y={70}
        width={25}
        height={15}
        fill="white"
        cornerRadius={20}
        ref={rightEye}
      />
    </Layer>
  );
};

export default Dealer;
