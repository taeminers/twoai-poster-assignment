import { useEffect, useRef, useState } from 'react';
import { Text, Transformer } from 'react-konva';

interface CanvasTextProps {
  x: number;
  y: number;
  text: string;
  fontSize?: number;
  fill?: string;
  draggable?: boolean;
  width?: number;
  isEditMode?: boolean;
  onTextChange?: (newText: string) => void;
}

export const CanvasText = ({
  x,
  y,
  text,
  fontSize = 20,
  fill = 'black',
  draggable = true,
  width = 200,
  onTextChange,
  isEditMode = false,
}: CanvasTextProps) => {
  const [textValue, setTextValue] = useState(text);
  const textRef = useRef<any>(null);
  const trRef = useRef<any>(null);

  useEffect(() => {
    if (textRef.current && trRef.current) {
      trRef.current.nodes([textRef.current]);
      trRef.current.getLayer().batchDraw();
    }
  }, []);

  const handleDblClick = () => {
    if (!textRef.current || !isEditMode) return;

    const textNode = textRef.current;
    const stage = textNode.getStage();
    const layer = textNode.getLayer();

    textNode.hide();
    trRef.current?.hide();
    layer.draw();

    const textPosition = textNode.absolutePosition();
    const stageBox = stage.container().getBoundingClientRect();

    const areaPosition = {
      x: stageBox.left + textPosition.x,
      y: stageBox.top + textPosition.y,
    };

    const textarea = document.createElement('textarea');
    document.body.appendChild(textarea);

    textarea.value = textNode.text();
    textarea.style.position = 'absolute';
    textarea.style.top = areaPosition.y + 'px';
    textarea.style.left = areaPosition.x + 'px';
    textarea.style.width = textNode.width() - textNode.padding() * 2 + 'px';
    textarea.style.height =
      textNode.height() - textNode.padding() * 2 + 5 + 'px';
    textarea.style.fontSize = textNode.fontSize() + 'px';
    textarea.style.border = 'none';
    textarea.style.padding = '0px';
    textarea.style.margin = '0px';
    textarea.style.overflow = 'hidden';
    textarea.style.background = 'none';
    textarea.style.outline = 'none';
    textarea.style.resize = 'none';
    textarea.style.lineHeight = textNode.lineHeight();
    textarea.style.fontFamily = textNode.fontFamily();
    textarea.style.transformOrigin = 'left top';
    textarea.style.textAlign = textNode.align();
    textarea.style.color = textNode.fill();

    const rotation = textNode.rotation();
    let transform = '';
    if (rotation) {
      transform += 'rotateZ(' + rotation + 'deg)';
    }
    transform += 'translateY(-' + 2 + 'px)';
    textarea.style.transform = transform;

    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 3 + 'px';

    textarea.focus();

    function removeTextarea() {
      textarea.parentNode?.removeChild(textarea);
      window.removeEventListener('click', handleOutsideClick);
      textNode.show();
      trRef.current?.show();
      trRef.current?.forceUpdate();
      layer.draw();
    }

    function setTextareaWidth(newWidth: number) {
      if (!newWidth) {
        newWidth = textNode.placeholder?.length * textNode.fontSize() || 200;
      }
      textarea.style.width = newWidth + 'px';
    }

    textarea.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' && !e.shiftKey) {
        const newText = textarea.value;
        setTextValue(newText);
        onTextChange?.(newText);
        removeTextarea();
      }
      if (e.key === 'Escape') {
        removeTextarea();
      }
    });

    textarea.addEventListener('keydown', function () {
      const scale = textNode.getAbsoluteScale().x;
      setTextareaWidth(textNode.width() * scale);
      textarea.style.height = 'auto';
      textarea.style.height =
        textarea.scrollHeight + textNode.fontSize() + 'px';
    });

    function handleOutsideClick(e: MouseEvent) {
      if (e.target !== textarea) {
        const newText = textarea.value;
        setTextValue(newText);
        onTextChange?.(newText);
        removeTextarea();
      }
    }

    setTimeout(() => {
      window.addEventListener('click', handleOutsideClick);
    });
  };

  return (
    <>
      <Text
        ref={textRef}
        x={x}
        y={y}
        text={textValue}
        fontSize={fontSize}
        fill={fill}
        draggable={draggable && isEditMode}
        width={width}
        onDblClick={handleDblClick}
        onTransform={() => {
          if (textRef.current) {
            const node = textRef.current;
            node.setAttrs({
              width: node.width() * node.scaleX(),
              scaleX: 1,
            });
          }
        }}
      />
      {isEditMode && (
        <Transformer
          ref={trRef}
          enabledAnchors={['middle-left', 'middle-right']}
          boundBoxFunc={(oldBox, newBox) => {
            newBox.width = Math.max(30, newBox.width);
            return newBox;
          }}
        />
      )}
    </>
  );
};
