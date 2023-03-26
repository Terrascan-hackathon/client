import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Textarea from '@mui/joy/Textarea';
import IconButton from '@mui/joy/IconButton';
import Menu from '@mui/joy/Menu';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import FormatBold from '@mui/icons-material/FormatBold';
import FormatItalic from '@mui/icons-material/FormatItalic';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import Check from '@mui/icons-material/Check';
import { Box, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import InputPhoto from '../inputPhoto/InputPhoto';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { postAlert } from '../../store/actions/modelActions';



const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
    {
        value: 0,
        label: 'Low'
    },
    {
        value: 1,
        label: 'Medium'
    },    {
        value: 2,
        label: 'High'
    }
];

const FormAlert = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [personName, setPersonName] = React.useState([]);
  const [photo, setPhoto] = React.useState('');
  const [italic, setItalic] = React.useState(false);
  const [fontWeight, setFontWeight] = React.useState('normal');
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  const handleSubmit = (event) => {
    event.preventDefault()
    const data = event.currentTarget;
    const numberSeverity = parseFloat(data?.severity?.value);
    dispatch(postAlert({
        image: photo,
        title: data?.title?.value,
        severity: numberSeverity,
        description:data?.description?.value,
    }, () => navigate('/')));
    console.log({
        image: photo,
        title: data?.title?.value,
        severity: numberSeverity,
        description:data?.description?.value,
    });
  };

  return (
    <Box sx={{display: 'flex', flexDirection:'column',m: 4, width: 300}}>
       <InputPhoto 
       sx={{display: 'flex', flexDirection:'column',alignItems: 'center', justifyContent: 'center'}}
        name={'post-alert-cover'} 
        photo={photo}
        setPhoto={setPhoto}
        />
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <TextField fullWidth name='title' label="Title" id="fullWidth" sx={{ mb: 2}}/>
        <TextField
          select
          name='severity'
          label='Severity'
          sx={{mb: 2, width: '100%'}}
          id="demo-multiple-name"
          multiple
          value={personName}
          onChange={handleChange}
          inputProps={{MenuProps: MenuProps}}
          defaultValue={0}
        >
          {names.map((name) => (
            <MenuItem
              key={name?.label}
              value={name?.value}
            >
              {name?.label}
            </MenuItem>
          ))}
        </TextField>
      <Textarea
        placeholder="Type something here…"
        name='description'
        minRows={3}
        endDecorator={
          <Box
            sx={{
              display: 'flex',
              gap: 'var(--Textarea-paddingBlock)',
              pt: 'var(--Textarea-paddingBlock)',
              borderTop: '1px solid',
              borderColor: 'divider',
              flex: 'auto',
            }}
          >
            <IconButton
              variant="plain"
              color="neutral"
              onClick={(event) => setAnchorEl(event.currentTarget)}
            >
              <FormatBold />
              <KeyboardArrowDown fontSize="md" />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={() => setAnchorEl(null)}
              size="sm"
              placement="bottom-start"
              sx={{ '--ListItemDecorator-size': '24px' }}
            >
              {['200', 'normal', 'bold'].map((weight) => (
                <MenuItem
                  key={weight}
                  selected={fontWeight === weight}
                  onClick={() => {
                    setFontWeight(weight);
                    setAnchorEl(null);
                  }}
                  sx={{ fontWeight: weight }}
                >
                  <ListItemDecorator>
                    {fontWeight === weight && <Check fontSize="sm" />}
                  </ListItemDecorator>
                  {weight === '200' ? 'lighter' : weight}
                </MenuItem>
              ))}
            </Menu>
            <IconButton
              variant={italic ? 'soft' : 'plain'}
              color={italic ? 'primary' : 'neutral'}
              aria-pressed={italic}
              onClick={() => setItalic((bool) => !bool)}
            >
              <FormatItalic />
            </IconButton>
          </Box>
        }
        sx={{
          mb: 2,
          minWidth: 300,
          fontWeight,
          fontStyle: italic ? 'italic' : 'initial',
        }}
    />
      <Button sx={{mt:2}} variant="contained" type='submit'>Post</Button>
      </Box>
    </Box>
  );
}

export default FormAlert;