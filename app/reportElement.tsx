import { createRoot } from 'react-dom/client';
import Report from './Report';

const createReportElement = () => {
  const container = document.createElement("div");
  // Avoids clicking the map when clicking inside
  container.onclick = (e) => {
    e.stopPropagation();
  };

  const root = createRoot(container);
  root.render(<Report />);
  return container;
};

export default createReportElement;
