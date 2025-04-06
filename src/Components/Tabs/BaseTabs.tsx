import * as React from 'react';
import { FC, ReactNode, useMemo, useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { BaseTabPanel } from './BaseTabPanel';

type Tab = {
  label: string;
  content: ReactNode;
};

type InternalTab = { value: number } & Tab;

type BaseTabsProps = {
  tabs: Tab[];
};

export const BaseTabs: FC<BaseTabsProps> = ({ tabs }) => {
  const [value, setValue] = useState(0);

  const internalTabs = useMemo<InternalTab[]>(() => tabs.map((tab, index) => ({ ...tab, value: index })), [tabs]);

  const onValue = (_: React.SyntheticEvent, newValue: number) => setValue(newValue);

  return (
    <Box sx={{ width: '100%', mt: 2 }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={onValue}>
          {internalTabs.map((tab, index) => (
            <Tab key={index} label={tab.label} value={tab.value} />
          ))}
        </Tabs>
      </Box>
      {internalTabs.map((tab, index) => (
        <BaseTabPanel key={index} selected={tab.value === value}>
          {tab.content}
        </BaseTabPanel>
      ))}
    </Box>
  );
};
