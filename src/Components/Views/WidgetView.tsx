import { BasePaper } from './BasePaper';
import Typography from '@mui/material/Typography';
import { FC, ReactNode } from 'react';
import { Badge, Box, Grid, SxProps, Theme } from '@mui/material';
import IconButton from '@mui/material/IconButton';

type WidgetAction = {
  icon?: ReactNode;
  content?: ReactNode;
  onClick?: () => void;
  badgeContent?: ReactNode;
};

type WidgetViewProps = {
  id?: string;
  sx?: SxProps<Theme>;
  title?: string | ReactNode;
  actions?: WidgetAction[];
  children?: ReactNode;
  childrenSx?: SxProps<Theme>;
};

export const WidgetView: FC<WidgetViewProps> = (props) => {
  const { id, sx, title, actions, children, childrenSx } = props;

  return (
    <BasePaper id={id} sx={sx}>
      <Grid container sx={{ display: 'flex', alignItems: 'center' }}>
        <Grid sx={{ flexGrow: 1 }}>
          {title && (
            <Typography sx={{ mr: 2 }} variant={'h6'}>
              {title}
            </Typography>
          )}
        </Grid>
        {actions?.map((action, index) => (
          <Grid key={index}>
            {action.icon ? (
              <IconButton key={index} sx={{ mr: actions.length === index + 1 ? 0 : 2 }} onClick={action.onClick}>
                <Badge badgeContent={action.badgeContent} color="primary">
                  {action.icon}
                </Badge>
              </IconButton>
            ) : (
              <Box key={index} sx={{ mr: actions.length === index + 1 ? 0 : 2 }}>
                {action.content}
              </Box>
            )}
          </Grid>
        ))}
      </Grid>
      <Box sx={childrenSx}>{children}</Box>
    </BasePaper>
  );
};
