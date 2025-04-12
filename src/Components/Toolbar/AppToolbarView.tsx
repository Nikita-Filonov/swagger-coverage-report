import { BaseToolbarView } from './BaseToolbarView';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { useTheme } from '../../Providers/ThemeProvider';
import { ThemeMode } from '../../Models/Core/Theme';
import { LogoImage } from '../Images/LogoImage';
import { ServiceConfigSelectionPopover } from '../Popovers/Config/ServiceConfigSelectionPopover';

export const AppToolbarView = () => {
  const { themeMode, onThemeMode } = useTheme();

  return (
    <BaseToolbarView
      icon={<LogoImage width={32} height={32} />}
      title={'Swagger coverage report'}
      actions={[
        { content: <ServiceConfigSelectionPopover /> },
        {
          icon: themeMode === ThemeMode.Dark ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />,
          onClick: onThemeMode
        }
      ]}
      containerSx={{ mt: 3 }}
    />
  );
};
