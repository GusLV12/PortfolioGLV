import React, { useEffect, useState } from 'react'
import moment from 'moment-timezone'

interface TimezoneProps {
  timezone: string
}

const Timezone = ({ timezone }: TimezoneProps) => {
  const [dateTime, setDateTime] = useState('')

  useEffect(() => {
    const zone = moment.tz.zone(timezone) ? timezone : 'America/Mexico_City'
    const updateDateTime = () => {
      const now = moment().tz(zone)
      setDateTime(now.format('dddd, DD MMMM YYYY [a] h:mm:ss A'))
    }

    updateDateTime()
    const interval = setInterval(updateDateTime, 1000)

    return () => clearInterval(interval)
  }, [timezone])

  return (
    <div>
      <p>{dateTime}</p>
      <p className="text-sm text-gray-500">CDMX, Mexico mx.</p>
    </div>
  )
}

export default Timezone
