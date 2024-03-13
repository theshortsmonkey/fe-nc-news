import { useState } from 'react'
import { captiliseFirstLetter } from '../../../utils/utils'
import './ArticlesListingOptions.css'
import { useLocation } from 'react-router-dom'

const defaultSelectedSortButton = {
  date: true,
  title: false,
  topic: false,
  author: false,
  votes: false,
}

export const ArticlesListingOptions = ({ setSortBy,setSortOrder }) => {
  const [selectedSortButton, setSelectedSortButton] = useState(
    defaultSelectedSortButton
  )
  const [isOrderDescending, setIsOrderDescending] = useState(true)
  const { pathname } = useLocation()
  const isTopicEndpoint = (/(?!\/)(topics)/).test(pathname)
  
  function sortButtonCreate (button) {
    if (isTopicEndpoint && button === 'topic') { return null }
    return (
      <button
        key={button}
        className="sort-by-button"
        disabled={selectedSortButton[button]}
        onClick={(e) => handleSortClick(e, button)}
      >
        {captiliseFirstLetter(button)}
      </button>
    )
  }
  function handleSortClick(e, button) {
    e.preventDefault()
    setSelectedSortButton(() => {
      const setSortButton = { ...defaultSelectedSortButton }
      setSortButton.date = false
      setSortButton[button] = true
      return setSortButton
    })
    let newSortBy = null
    if (button !== 'date') newSortBy = button
    setSortBy(newSortBy)
  }
  function handleOrderClick(e, button) {
    e.preventDefault()
    setIsOrderDescending((curr) => !curr)
    setSortOrder(button)
  }
  return (
    <div id="articles-list-options">
      <div id="sort-buttons">
        <p>Sort Articles by:</p>
        {Object.keys(selectedSortButton).map((button) => {
          return sortButtonCreate(button)
        })}
      </div>
      <div id="order-buttons">
        <p>Order Articles:</p>
        <button
          className="order-by-button"
          disabled={isOrderDescending}
          onClick={(e) => handleOrderClick(e, 'desc')}
        >
          Descending
        </button>
        <button
          className="order-by-button"
          disabled={!isOrderDescending}
          onClick={(e) => handleOrderClick(e, 'asc')}
        >
          Ascending
        </button>
      </div>
    </div>
  )
}
