const Point = ({ xPos, yPos, item, height, color }) => {
  return <circle r="6.5" cx={xPos} cy={height - yPos} fill={`#${color}`} />;
};

export default Point;
