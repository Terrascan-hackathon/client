import { Box, Typography } from '@mui/material';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Aside from '../../components/aside/Aside'
import { getAlert } from '../../store/actions/alertsActions';

const Home = () => {

  const dispatch = useDispatch();
  const data = useSelector((state)=>state?.alertState?.alerts)

  useEffect(() => {
    dispatch(getAlert())
  }, [dispatch])
  

  return (
    <div style={{ width: "100%" }}>
      <Typography sx={{ my: 2, fontSize: '20px'}}>Alerts</Typography>
      <Box sx={{width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'row', flexWrap: 'wrap', gap: '20px'}}>
        { data?.map((item, index)=> {
          return (
            <Box key={item?.title + index} sx={{ width: '400px', p: 2, borderRadius: '12px', backgroundColor: item?.severity === 0 ? '#e9e9e9' : (item?.severity === 1 ? '#f1ee8e' : '#ffa590' )}}>
              <Typography>{item?.title}</Typography>
              <Box component={'img'} alt={'alert-cover'} src={`${item?.image}`} sx={{width: '100%', p: 1}} />
              <Typography>{item?.description}</Typography>
            </Box>
          )
        })
        }
      </Box>
    </div>
  )
}

export default Home