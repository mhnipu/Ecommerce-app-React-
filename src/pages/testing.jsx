const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100 - 50;
    const y = ((e.pageY - top) / height) * 100 - 50;
    setZoomedImagePosition({ x, y });
};
