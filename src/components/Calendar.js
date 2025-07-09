'use client'
import React, { useState } from 'react'

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [events, setEvents] = useState({})

  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const formatDate = (date) => {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`
  }

  const navigateMonth = (direction) => {
    const newDate = new Date(currentDate)
    newDate.setMonth(currentDate.getMonth() + direction)
    setCurrentDate(newDate)
  }

  const renderCalendarGrid = () => {
    const daysInMonth = getDaysInMonth(currentDate)
    const firstDay = getFirstDayOfMonth(currentDate)
    const days = []
    
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-24 border border-gray-200"></div>)
    }
    
    for (let day = 1; day <= daysInMonth; day++) {
      const dateKey = `${formatDate(currentDate)}-${String(day).padStart(2, '0')}`
      const dayEvents = events[dateKey] || []
      
      days.push(
        <div 
          key={day} 
          className="h-24 border border-gray-200 p-1 hover:bg-gray-50 cursor-pointer"
          onClick={() => handleDayClick(day)}
        >
          <div className="font-medium text-sm">{day}</div>
          {dayEvents.map((event, index) => (
            <div key={index} className="text-xs bg-blue-100 text-blue-800 p-1 rounded mt-1 truncate">
              {event.title}
            </div>
          ))}
        </div>
      )
    }
    
    return days
  }

  const addEvent = (day, title) => {
    const dateKey = `${formatDate(currentDate)}-${String(day).padStart(2, '0')}`
    const newEvents = { ...events }
    if (!newEvents[dateKey]) {
      newEvents[dateKey] = []
    }
    newEvents[dateKey].push({ title, id: Date.now() })
    setEvents(newEvents)
  }

  const handleDayClick = (day) => {
    const title = prompt('イベントを追加してください:')
    if (title && title.trim()) {
      addEvent(day, title.trim())
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="mb-4 flex justify-between items-center">
        <button
          onClick={() => navigateMonth(-1)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          前の月
        </button>
        <h2 className="text-2xl font-bold">
          {currentDate.getFullYear()}年 {currentDate.getMonth() + 1}月
        </h2>
        <button
          onClick={() => navigateMonth(1)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          次の月
        </button>
      </div>
      
      <div className="grid grid-cols-7 gap-0 bg-white rounded-lg shadow-lg overflow-hidden">
        {['日', '月', '火', '水', '木', '金', '土'].map(day => (
          <div key={day} className="bg-gray-100 p-2 text-center font-medium border-b">
            {day}
          </div>
        ))}
        {renderCalendarGrid()}
      </div>
    </div>
  )
}

export default Calendar