import Box from '@mui/material/Box';
import { FC, PropsWithChildren } from 'react';

type BaseTabPanelProps = {
  selected: boolean;
} & PropsWithChildren;

export const BaseTabPanel: FC<BaseTabPanelProps> = ({ selected, children }) => {
  return (
    <div role="tabpanel" hidden={!selected}>
      {selected && <Box>{children}</Box>}
    </div>
  );
};
