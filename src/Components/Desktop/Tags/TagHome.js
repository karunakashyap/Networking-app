import React from 'react';
import Tag from './Tag';

const TagHome = () => {
  const slides = ['Management', 'Supply', 'Tech', 'Graphic Era', 'Design',
    'Deeksha', 'Kumari', 'Phonics', 'Edoya', 'College', 'karuna', 'kashyap', 'Phonics', 'Edoya'];

  return (
    <div>
      <Tag slides={slides} itemsPerRow={5} />
    </div>
  );
};

export default TagHome;