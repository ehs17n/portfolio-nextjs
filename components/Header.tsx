import { useTheme } from 'next-themes';
import React, { useState } from 'react';

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  const { theme, setTheme } = useTheme();
  const [check, setCheck] = useState(false);
  return (
    <div>
      <nav className='flex justify-between'>
        <div>Logo</div>
        <input
          type='checkbox'
          className='toggle'
          checked={check}
          onClick={() => (check ? setCheck(false) : setCheck(true))}
        />
      </nav>
    </div>
  );
};
export default Header;
