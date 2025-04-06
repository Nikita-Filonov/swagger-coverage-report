import { BaseToolbarView } from './BaseToolbarView';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { useTheme } from '../../Providers/ThemeProvider';
import { ThemeMode } from '../../Models/Core/Theme';
import { Fragment, useState } from 'react';
import { SettingsModal } from '../Modals/Settings/SettingsModal';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { LogoImage } from '../Images/LogoImage';

export const AppToolbarView = () => {
  const { themeMode, onThemeMode } = useTheme();
  const [settingsModal, setSettingsModal] = useState(false);

  const onSettings = () => setSettingsModal(true);

  return (
    <Fragment>
      <BaseToolbarView
        icon={<LogoImage width={32} height={32} />}
        title={'Swagger coverage report'}
        actions={[
          { icon: <SettingsOutlinedIcon />, onClick: onSettings },
          {
            icon: themeMode === ThemeMode.Dark ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />,
            onClick: onThemeMode
          }
        ]}
        containerSx={{ mt: 3 }}
      />
      <SettingsModal modal={settingsModal} setModal={setSettingsModal} />
    </Fragment>
  );
};
