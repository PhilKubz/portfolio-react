import { Wrap, Image, WrapItem } from '@chakra-ui/react';
import React from 'react';

const Thumbnails = ({ projectData, activeSlide, handleThumbnailClick }) => (
  <Wrap spacing={'3'} justify={'center'} mt={'10'}>
    {projectData.map((project, index) => (
      <WrapItem 
        m={'1'} 
        borderRadius={'md'} // Change the borderRadius to 'md' for slightly rounded edges
        borderWidth={3}
        borderColor={'black'} // Change the borderColor to black
        boxShadow={'dark-lg'}
      > 
        <Image
          boxSize={'100px'} // Change the boxSize to a specific value (e.g., '100px') for square-shaped thumbnails
          key={index}
          src={project.image}
          onClick={() => handleThumbnailClick(index)}
          alt={project.title}
          className={activeSlide === index ? 'active-thumbnail' : ''}
        />
      </WrapItem>
    ))}
  </Wrap>
);

export default Thumbnails;