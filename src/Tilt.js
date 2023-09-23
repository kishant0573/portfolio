import React, { useEffect, useState, useRef } from 'react';

function Tilt(props) {
  const tiltElementRef = useRef(null);
  const [isTilted, setIsTilted] = useState(false);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    let ticking = false;
    let timeout;
    let glareElementWrapper;
    let glareElement;
    let reset = false;

    const tiltElement = tiltElementRef.current;

    const requestTick = () => {
      if (ticking) return;
      requestAnimationFrame(updateTransforms);
      ticking = true;
    };

    const bindEvents = () => {
      tiltElement.addEventListener('mousemove', mouseMove);
      tiltElement.addEventListener('mouseenter', mouseEnter);
      if (props.reset) tiltElement.addEventListener('mouseleave', mouseLeave);
      if (props.glare) window.addEventListener('resize', updateGlareSize);
    };

    const setTransition = () => {
      if (timeout !== undefined) clearTimeout(timeout);
      tiltElement.style.transition = `${props.speed}ms ${props.easing}`;
      if (props.glare) glareElement.style.transition = `opacity ${props.speed}ms ${props.easing}`;
      timeout = setTimeout(() => {
        tiltElement.style.transition = '';
        if (props.glare) glareElement.style.transition = '';
      }, props.speed);
    };

    const mouseEnter = () => {
      setIsTilted(true);
      tiltElement.style.willChange = 'transform';
      setTransition();
    };

    const getMousePositions = (event) => {
      if (!event) {
        event = {
          pageX: tiltElement.getBoundingClientRect().left + tiltElement.offsetWidth / 2,
          pageY: tiltElement.getBoundingClientRect().top + tiltElement.offsetHeight / 2,
        };
      }
      return { x: event.pageX, y: event.pageY };
    };

    const mouseMove = (event) => {
      const { left, top, width, height } = tiltElement.getBoundingClientRect();
      const mouseX = event.pageX - left;
      const mouseY = event.pageY - top;
      setMouseX(mouseX);
      setMouseY(mouseY);
      requestTick();
    };

    const mouseLeave = () => {
      setTransition();
      reset = true;
      requestTick();
    };

    const getValues = () => {
      const width = tiltElement.offsetWidth;
      const height = tiltElement.offsetHeight;
      const left = tiltElement.getBoundingClientRect().left;
      const top = tiltElement.getBoundingClientRect().top;
      const percentageX = (mouseX - left) / width;
      const percentageY = (mouseY - top) / height;
      const tiltX = (props.maxTilt / 2 - percentageX * props.maxTilt).toFixed(2);
      const tiltY = (percentageY * props.maxTilt - props.maxTilt / 2).toFixed(2);
      const angle =
        (Math.atan2(mouseX - (left + width / 2), -(mouseY - (top + height / 2))) * 180) / Math.PI;
      return {
        tiltX,
        tiltY,
        percentageX: percentageX * 100,
        percentageY: percentageY * 100,
        angle,
      };
    };

    const updateTransforms = () => {
      const transforms = getValues();
      if (reset) {
        reset = false;
        tiltElement.style.transform = `perspective(${props.perspective}px) rotateX(0deg) rotateY(0deg)`;
        if (props.glare) {
          glareElement.style.transform = 'rotate(180deg) translate(-50%, -50%)';
          glareElement.style.opacity = '0';
        }
        return;
      } else {
        tiltElement.style.transform = `perspective(${props.perspective}px) rotateX(${
          props.disableAxis === 'x' ? 0 : transforms.tiltY
        }deg) rotateY(${props.disableAxis === 'y' ? 0 : transforms.tiltX}deg) scale3d(${props.scale},${props.scale},${props.scale})`;
        if (props.glare) {
          glareElement.style.transform = `rotate(${transforms.angle}deg) translate(-50%, -50%)`;
          glareElement.style.opacity = `${(transforms.percentageY * props.maxGlare) / 100}`;
        }
      }
      props.onChange && props.onChange(transforms);
      ticking = false;
    };

    const prepareGlare = () => {
      const glarePrerender = props.glarePrerender;
      if (!glarePrerender) {
        const glareWrapper = document.createElement('div');
        glareWrapper.className = 'js-tilt-glare';
        glareWrapper.innerHTML = '<div class="js-tilt-glare-inner"></div>';
        tiltElement.appendChild(glareWrapper);
      }
      glareElementWrapper = tiltElement.querySelector('.js-tilt-glare');
      glareElement = tiltElement.querySelector('.js-tilt-glare-inner');

      const stretch = {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
      };

      glareElementWrapper.style.cssText = Object.entries(stretch)
        .map(([prop, value]) => `${prop}: ${value}`)
        .join('; ');
      glareElementWrapper.style.overflow = 'hidden';
      glareElementWrapper.style.pointerEvents = 'none';

      glareElement.style.position = 'absolute';
      glareElement.style.top = '50%';
      glareElement.style.left = '50%';
      glareElement.style.backgroundImage = 'linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)';
      glareElement.style.width = `${tiltElement.offsetWidth * 2}px`;
      glareElement.style.height = `${tiltElement.offsetWidth * 2}px`;
      glareElement.style.transform = 'rotate(180deg) translate(-50%, -50%)';
      glareElement.style.transformOrigin = '0% 0%';
      glareElement.style.opacity = '0';
    };

    const updateGlareSize = () => {
      glareElement.style.width = `${tiltElement.offsetWidth * 2}px`;
      glareElement.style.height = `${tiltElement.offsetWidth * 2}px`;
    };

    const destroyTilt = () => {
      // tiltElement.removeEventListener('mousemove', mouseMove);
      // tiltElement.removeEventListener('mouseenter', mouseEnter);
      // tiltElement.removeEventListener('mouseleave', mouseLeave);
      // window.removeEventListener('resize', updateGlareSize);
      // tiltElement.removeChild(glareElementWrapper);
      // tiltElement.style.willChange = '';
      // tiltElement.style.transform = '';
    };

    // Initialize Tilt on component mount
    bindEvents();
    if (props.glare) prepareGlare();

    return () => {
      // Cleanup and remove event listeners when component unmounts
      destroyTilt();
    };
  }, [props]);

  return (
    <div ref={tiltElementRef} className="tilt-element">
      {props.children}
    </div>
  );
}

export default Tilt;