import React from 'react';

const ExternalProject = () => {
  return (
    <div style={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
      <iframe
        src="/eldeco-echoes/index.html"
        title="HTML Project"
        style={{ width: '100%', height: '100%', border: 'none' }}
      />
    </div>
  );
};

export default ExternalProject;

