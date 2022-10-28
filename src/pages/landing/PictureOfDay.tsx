import React from 'react';
import Config from '../../config/Nasa';

const PictureOfDay = () => {
  const [apod, setApod] = React.useState({})

  React.useEffect(() => {
    Config.getApod().then(apodData => {
      setApod(apodData.data)
    })
  }, [])

  console.log(apod);

  return (
    <div>
      PictureOfDay
    </div>
  )
}

export default PictureOfDay