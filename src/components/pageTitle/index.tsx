import React from 'react';
import './style.scss';

export interface IPageTitleProps {
title: string;
subTitle?: string
}
const PageTitle: React.FC<IPageTitleProps> = ({ title, subTitle = 'OVERVIEW' }) => (
  <div className="wrapper">
    <div className="title-wrapper">
      <p className="subtitle">{subTitle}</p>
      <h3 className="title">{title}</h3>
    </div>
  </div>
);

export default PageTitle;
