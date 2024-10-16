import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Timeline: React.FC = () => (
  <VerticalTimeline>
    <VerticalTimelineElement
      contentStyle={{ background: 'black', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  black' }}
      iconStyle={{ background: '#ff7eb3', color: '#fff' }}
    >
      <h3>Club 1</h3>
      <p>President at Coding Club</p>
    </VerticalTimelineElement>
    {/* Add more timeline elements */}
  </VerticalTimeline>
);

export default Timeline;
