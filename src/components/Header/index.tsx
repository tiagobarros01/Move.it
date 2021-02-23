import React from 'react';
import Header, {
  CurrentSpan, DivView, Span, View,
} from './style';

const ExperienceBar: React.FC = () => (
  <Header>
    <Span>0 xp</Span>
    <View>
      <DivView style={{ width: '50%' }} />
      <CurrentSpan style={{ left: '50%' }}>300xp (50%)</CurrentSpan>
    </View>
    <span>600 xp</span>
  </Header>
);

export default ExperienceBar;
