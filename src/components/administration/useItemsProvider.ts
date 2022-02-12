import { useEffect, useState } from 'react'
import getUserItems, { IItem } from '../../services/getUserItems'

const useItemsProvider = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState<string>()
  const [items, setItems] = useState<Array<IItem>>([])

  useEffect(() => {
    ;(async () => {
      setIsLoading(true)

      try {
        const userItems = await getUserItems()

        setItems(userItems)
      } catch (error) {
        setErrorMessage(error.message)
      }

      setIsLoading(false)
    })()
  }, [])

  return {
    isLoading,
    errorMessage,
    items
  }
}

export default useItemsProvider