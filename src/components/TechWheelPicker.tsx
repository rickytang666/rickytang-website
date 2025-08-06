'use client';

import React, { useState } from 'react';
import { WheelPicker, WheelPickerWrapper } from './wheel-picker';

interface TechWheelPickerProps {
  skills: string[];
  className?: string;
}

export default function TechWheelPicker({ skills, className }: TechWheelPickerProps) {
  const [selectedValue, setSelectedValue] = useState(skills[0] || "");

  const options = skills.map(skill => ({
    value: skill,
    label: skill
  }));

  return (
    <div className={className}>
      <WheelPickerWrapper className="w-48 h-32">
        <WheelPicker 
          options={options} 
          value={selectedValue} 
          onValueChange={setSelectedValue}
        />
      </WheelPickerWrapper>
    </div>
  );
} 