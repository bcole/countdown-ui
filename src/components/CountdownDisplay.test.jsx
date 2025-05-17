import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import CountdownDisplay from './CountdownDisplay'

// Mock the countdown config
vi.mock('../config/countdown.config', () => ({
  targetDate: '2025-12-25T00:00:00-08:00',
  countdownTitle: 'Test Countdown'
}))

describe('CountdownDisplay', () => {
  it('renders the countdown title', () => {
    render(<CountdownDisplay timeLeft={{ days: 5, hours: 4, minutes: 3, seconds: 2 }} />)
    expect(screen.getByText('Test Countdown')).toBeInTheDocument()
  })

  it('displays time units with correct formatting', () => {
    render(<CountdownDisplay timeLeft={{ days: 5, hours: 4, minutes: 3, seconds: 2 }} />)
    expect(screen.getByText('5')).toBeInTheDocument() // days
    expect(screen.getByText('04')).toBeInTheDocument() // hours
    expect(screen.getByText('03')).toBeInTheDocument() // minutes
    expect(screen.getByText('02')).toBeInTheDocument() // seconds
  })

  it('displays all time unit labels', () => {
    render(<CountdownDisplay timeLeft={{ days: 1, hours: 1, minutes: 1, seconds: 1 }} />)
    expect(screen.getByText('Days')).toBeInTheDocument()
    expect(screen.getByText('Hours')).toBeInTheDocument()
    expect(screen.getByText('Minutes')).toBeInTheDocument()
    expect(screen.getByText('Seconds')).toBeInTheDocument()
  })

  it('handles single-digit numbers with leading zeros', () => {
    render(<CountdownDisplay timeLeft={{ days: 5, hours: 4, minutes: 3, seconds: 2 }} />)
    expect(screen.getByText('04')).toBeInTheDocument()
    expect(screen.getByText('03')).toBeInTheDocument()
    expect(screen.getByText('02')).toBeInTheDocument()
  })

  it('renders time separators', () => {
    render(<CountdownDisplay timeLeft={{ days: 1, hours: 1, minutes: 1, seconds: 1 }} />)
    const separators = screen.getAllByText(':')
    expect(separators).toHaveLength(2) // Should have two colons
  })
})