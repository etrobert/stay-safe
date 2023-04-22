import { createRoot } from 'react-dom/client';
import Report from './Report';

const createReportElement = () => {
  const container = document.createElement('div');
  const root = createRoot(container);
  root.render(<Report />);
  return container;
};

const reportElement = createReportElement();

export default reportElement;
