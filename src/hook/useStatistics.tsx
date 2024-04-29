import axios from 'axios'
import StatisticsResponse from './response'

const getRandomRange = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const useStatistics = async () => {
  try {
    const response = await axios.get<StatisticsResponse>(
      `http://localhost:5173/json${getRandomRange(1, 2)}.json`,
      {
        timeout: Math.random() * 3000 + 500,
      }
    )
    return response?.data
  } catch (error) {
    console.error('Error fetching locale data:', error)
  }
}

export default useStatistics
