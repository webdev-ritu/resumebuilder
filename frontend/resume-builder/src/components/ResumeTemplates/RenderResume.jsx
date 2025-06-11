import React from 'react'
import TemplateOne from './TemplateOne';
import TemplateTwo from './TemplateTwo';
import TemplateThree from './TemplateThree';

const RenderResume = ({templateId, resumeData, colorPalatte, containerWidth}) => {
    switch(templateId){
  case "01":
  return (
    <TemplateOne
      resumeData={resumeData}
      colorPalatte={colorPalatte}
      containerWidth={containerWidth}
      />
  );
  case "02":
  return (
    <TemplateTwo
      resumeData={resumeData}
      colorPalatte={colorPalatte}
      containerWidth={containerWidth}
      />
  );
  case "03":
  return (
    <TemplateThree
      resumeData={resumeData}
      colorPalatte={colorPalatte}
      containerWidth={containerWidth}
      />
  );
  default:
    return (
        <TemplateOne
         resumeData={resumeData}
         colorPalatte={colorPalatte}
      containerWidth={containerWidth}
      />
    );
    }
};
export default RenderResume;