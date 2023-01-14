import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import cn from 'classnames'

import { getLinePosition, setActiveRoute } from '../../actions/mapActions'
import { selectActiveRoute } from '../../selectors/routeSelector'

import './sideBar.scss'

const SideBar: React.FC = () => {

  const dispatch = useDispatch()
  const activeRoute = useSelector(selectActiveRoute)

  const data = [
    { name: 'Заявка № 1', from: { lat: 59.84660399, lnd: 30.29496392 }, to: { lat: 59.82934196, lnd: 30.42423701 } },
    { name: 'Заявка № 2', from: { lat: 59.82934196, lnd: 30.42423701 }, to: { lat: 59.82761295, lnd: 30.41705607 } },
    { name: 'Заявка № 3', from: { lat: 59.83567701, lnd: 30.38064206 }, to: { lat: 59.84660399, lnd: 30.29496392 } },
    { name: 'Заявка № 4', from: { lat: 59.84660399, lnd: 30.29496392 }, to: { lat: 59.82761295, lnd: 30.41705607 } },
    { name: 'Заявка № 5', from: { lat: 59.83597701, lnd: 30.38064206 }, to: { lat: 59.84660399, lnd: 30.29496392 } },
  ];

  const handleClick = (item: any, index: number) => {
    dispatch(getLinePosition({ from: [item.from.lat, item.from.lnd], to: [item.to.lat, item.to.lnd] }))
    dispatch(setActiveRoute(index))
  }

  return (
    <div className='sidebar'>
      {
        data.map((item, index) => (
          <div
            key={index}
            className={cn({ 'active': index === activeRoute })}
            onClick={() => handleClick(item, index)}>{item.name}
          </div>
        ))
      }
    </div>
  )
}

export default SideBar