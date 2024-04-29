import { useRef } from 'react'
/* import json1 from './json1.json'
import json2 from './json2.json' */
import axios from 'axios'

type Props = {
  aggregateBy: 'day' | 'week' | 'month'
  timeTarget: 'pickup_date' | 'created_at'
  startDate: string | null
  endDate: string | null
}

const getRandomRange = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

/**
 * Custom hook for fetching statistics data.
 * @returns An object containing the `fetchStatistics` function.
 */
/* const useStatistics = () => {
  const toggleRef = useRef(false)

  /**
   * Fetches statistics data based on the provided props.
   * This function has a delay to simulate a slow network call.
   * @param props - The props object containing the necessary parameters for fetching statistics.
   * @returns A promise that resolves to the fetched statistics data.
   
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const fetchStatistics = (_: Props) => {
    toggleRef.current = !toggleRef.current
    return new Promise((resolve) => {
      const delay = Math.random() * 3000 + 500
      setTimeout(() => {
        toggleRef.current ? resolve(json1) : resolve(json2)
      }, delay)
    })
  }

  return { fetchStatistics }
} */

const useStatistics = async () => {
  try {
    const response = await axios.get(`http://localhost:5173/json${getRandomRange(1, 2)}.json`, {
      timeout: Math.random() * 3000 + 500,
    })
    return response?.data
  } catch (error) {
    console.error('Error fetching locale data:', error)
  }
}

export default useStatistics
