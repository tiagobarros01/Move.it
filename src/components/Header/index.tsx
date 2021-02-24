import React from 'react';
import { Header, View } from './style';

const ExperienceBar: React.FC = () => (
  <Header>
    <span>0 xp</span>
    <View>
      <div style={{ width: '50%' }} />
      <span style={{ left: '50%' }}>300xp (50%)</span>
    </View>
    <span>600 xp</span>
  </Header>
);

export default ExperienceBar;
