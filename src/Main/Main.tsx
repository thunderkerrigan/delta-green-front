import React from 'react'
import Map from '../Map/Map'
import AlertBox from './AlertBox'
import LateralMenu from './LateralMenu'

const Main = (): JSX.Element => {
  return (
    <>
      <AlertBox />
      <LateralMenu />
      <Map />
      Home
    </>
  )
}

export default Main
