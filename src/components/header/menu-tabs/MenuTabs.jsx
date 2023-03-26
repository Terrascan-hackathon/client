import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { useNavigate } from 'react-router-dom';

const MenuTabs = (props) => {
    const { menuItems } = props;
    const navigate = useNavigate();

    return (
        <>
            <List>
                {menuItems.map((item, index) => (
                    <ListItem key={item.title + index} disablePadding sx={{ display: 'block' }} onClick={() => navigate(item?.url)}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.title} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </>
    )
}

MenuTabs.propTypes = {
    menuItems: PropTypes.array.isRequired
}

export default MenuTabs;