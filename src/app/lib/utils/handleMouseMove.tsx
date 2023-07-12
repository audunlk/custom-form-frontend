import React from 'react';

export const handleMouseMove = (event: React.MouseEvent) => {
  const tooltipWidth = 258;
  const tooltipHeight = 80;
  const mouseX = event.clientX;
  const mouseY = event.clientY;
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  let tooltipX = mouseX + 20;
  let tooltipY = mouseY + 20;
  if (tooltipX + tooltipWidth > viewportWidth) {
    tooltipX = mouseX - tooltipWidth - 20;
  }
  if (tooltipY + tooltipHeight > viewportHeight) {
    tooltipY = mouseY - tooltipHeight - 20;
  }
  return { x: tooltipX, y: tooltipY };
};