import React from 'react';
import './SectionHeader.css';
import { useTheme } from '../theme/ThemeProvider';

export interface SectionHeaderProps {
  title: string;
  description?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, description }) =>{
  const { theme } = useTheme();
  return (<div className={`section-header ${theme}`}>
    <h2 className="section-title">{title}</h2>
    {description && <p className="section-description">{description}</p>}
  </div>);
} 

export default SectionHeader; 