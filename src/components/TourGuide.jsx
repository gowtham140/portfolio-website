import React, { useState, useEffect } from 'react';
import { Tour } from 'antd';

const TourGuide = ({ open = false, onClose }) => {
  const [tourOpen, setTourOpen] = useState(open);

  // Sync with parent prop
  useEffect(() => {
    setTourOpen(open);
  }, [open]);

  const handleTourClose = () => {
    setTourOpen(false);
    if (onClose) onClose();
  };

  // Default portfolio tour steps
  const tourSteps = [
    {
      title: '👋 Welcome to My Portfolio!',
      description: 'Hi! I\'m Gowtham, a Full-Stack Developer. Let me show you around my portfolio website.',
      target: null,
    },
    {
      title: '📊 Statistics',
      description: 'View my project count and years of experience at a glance.',
      target: document => document.querySelector('.home-statistics'),
    },
    {
      title: '🛠 Skills',
      description: 'Explore my technical skills in Frontend, Backend, and DevOps.',
      target: document => document.querySelector('.home-skills'),
    },
    {
      title: '🎯 Call to Action',
      description: 'Navigate to my projects or contact me through these buttons.',
      target: document => document.querySelector('.home-cta'),
    },
  ];

  return (
    <Tour
      open={tourOpen}
      onClose={handleTourClose}
      steps={tourSteps}
      placement="bottom"
      mask={true}
      arrow={true}
    />
  );
};

export default TourGuide;

