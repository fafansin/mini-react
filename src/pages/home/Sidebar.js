import Box from '@mui/material/Box';


import SearchIcon from '@mui/icons-material/Search';

import IconButton from '@mui/material/IconButton';


import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';

import List from '@mui/material/List';






import { styled } from '@mui/material/styles';

import UserItem from './UserItem';

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));


const Sidebar = () => {
  return (
    <Box m={2}>
      <Box py={2}>
        <FormControl variant="filled" fullWidth="true">
          <OutlinedInput
            id="search"
            type='text'
            placeholder="Search..."
            endAdornment={
              <InputAdornment position="end">
                <IconButton >
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </Box>
      <Box>
        <Demo>
          <List >
            <UserItem/>
            <UserItem/>
            <UserItem/>
            <UserItem/>
          </List>
        </Demo>
      </Box>
    </Box>
  )
}

export default Sidebar