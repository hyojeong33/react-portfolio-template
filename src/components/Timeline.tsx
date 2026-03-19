import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career & Education</h1>
        <VerticalTimeline>
          {/* 1. Research Assistant - UCSD */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Jan 2026 - Present"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Research Assistant</h3>
            <h4 className="vertical-timeline-element-subtitle">UCSD Cognitive Development Lab</h4>
            <p>
              Infant Wearable Project: Behavioral data analysis using ELAN and ACLEW framework for infant-caregiver interaction.
            </p>
          </VerticalTimelineElement>

          {/* 2. Interpreter - Hyundai Electric */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Feb 2026"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Korean-English Interpreter</h3>
            <h4 className="vertical-timeline-element-subtitle">Hyundai Electric @ DTECH 2026</h4>
            <p>
              Technical interpretation for circuit breakers and distribution transformers during business consultations.
            </p>
          </VerticalTimelineElement>

          {/* 3. Undergraduate TA - UCSD */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Sep 2025 - Dec 2025"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Undergraduate TA (COGS 108)</h3>
            <h4 className="vertical-timeline-element-subtitle">UC San Diego</h4>
            <p>
              Guided students in Data Science in Practice, focusing on Python-based data analysis and computational methods.
            </p>
          </VerticalTimelineElement>

          {/* 4. Education - UCSD */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Sep 2024 - Jun 2026 (Expected)"
            iconStyle={{ background: '#20c997', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">B.S. in Cognitive Science</h3>
            <h4 className="vertical-timeline-element-subtitle">UC San Diego (Specialization: ML)</h4>
            <p>
              Focusing on the intersection of human cognition, statistics, and machine learning.
            </p>
          </VerticalTimelineElement>

          {/* 5. Education - Green River College */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Mar 2021 - Mar 2024"
            iconStyle={{ background: '#20c997', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">A.S. in Computer Science</h3>
            <h4 className="vertical-timeline-element-subtitle">Green River College</h4>
            <p>
              Foundation in C++, Java, and Python with focus on data structures and algorithms.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;