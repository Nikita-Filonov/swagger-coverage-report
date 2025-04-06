import { BaseTextField } from './BaseTextField';
import { FC } from 'react';
import { IconButton, InputAdornment } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';

export type SearchTextFieldProps = {
  search: string;
  setSearch: (search: string) => void;
  placeholder: string;
};

export const SearchTextField: FC<SearchTextFieldProps> = (props) => {
  const { search, setSearch, placeholder } = props;

  const onClear = () => setSearch('');

  return (
    <BaseTextField
      value={search}
      label={'Search'}
      onChange={setSearch}
      placeholder={placeholder}
      endAdornment={
        search.length > 0 && (
          <InputAdornment position="end">
            <IconButton size={'small'} edge="end" onClick={onClear}>
              <CloseIcon fontSize={'small'} />
            </IconButton>
          </InputAdornment>
        )
      }
      startAdornment={
        <InputAdornment position="start">
          <SearchIcon fontSize={'small'} />
        </InputAdornment>
      }
    />
  );
};
