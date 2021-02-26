/* eslint-disable no-unused-expressions */
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import Switch from 'react-switch';
import { SwitcherContainer } from './style';

interface Props {
  toggleTheme(): void;
}

const ThemeSwitcher: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <SwitcherContainer>
      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        // height={15}
        // width={50}
        offColor={colors.text}
        onColor={colors.DarkBlue}
        offHandleColor="#333"
        onHandleColor={colors.secondary}
      />
    </SwitcherContainer>

  );
};

export default ThemeSwitcher;
