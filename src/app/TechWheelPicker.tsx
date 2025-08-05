'use client';

import React, { useState, useEffect } from 'react';
import { WheelPicker, WheelPickerWrapper } from '@/components/wheel-picker';
import { cn } from '@/lib/utils';

interface TechSkill {
  name: string;
  icon: string;
  alt: string;
}

interface TechWheelPickerProps {
  skills: TechSkill[];
  className?: string;
}

export default function TechWheelPicker({ skills, className }: TechWheelPickerProps) {
  const [selectedValue, setSelectedValue] = useState("");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setSelectedValue(skills[0]?.name || "");
  }, [skills]);

  const options = skills.map(skill => ({
    value: skill.name,
    label: (
      <div className="flex items-center gap-2">
        <img src={skill.icon} alt={skill.alt} className="w-10 h-10" />
        <span>{skill.name}</span>
      </div>
    )
  }));

  if (!isClient) {
    return <div className={className}>Loading...</div>;
  }

  return (
    <div className={cn("w-1/2 md:w-3/4", className)}>
      <WheelPickerWrapper>
        <WheelPicker 
          options={options} 
          value={selectedValue} 
          onValueChange={setSelectedValue}
          visibleCount={16}
          dragSensitivity={8}
          optionItemHeight={65}
        />
      </WheelPickerWrapper>
    </div>
  );
} 