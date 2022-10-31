import React from 'react';
import Config from '../../config/Nasa';


interface PictureData {
  copyright: string,
  date: string,
  explanation: string,
  hdurl: string,
  media_type: string,
  service_versions: string,
  title: string,
  url: string
}

const PictureOfDay = () => {
  const [apod, setApod] = React.useState<PictureData | null>();

  React.useEffect(() => {
    Config.getApod().then(apodData => {
      setApod({
        copyright: apodData.data.copyright,
        date: apodData.data.date,
        explanation: apodData.data.explanation,
        hdurl: apodData.data.hdurl,
        media_type: apodData.data.media_type,
        service_versions: apodData.data.service_versions,
        title: apodData.data.title,
        url: apodData.data.url
      })
    })
  }, [])

  return (
    <div style={{backgroundColor: '#040404'}}>
      <img
        src={apod?.url}
        alt={apod?.title}
        style={{ width: '100%' }}
      />
    </div>
  )
}

export default PictureOfDay

