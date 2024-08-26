// https://www.youtube.com/watch?v=H_3jZOdMD_E

import { useLocation } from "react-router-dom"

export const usePath = () => {
    const isCurrentPage = (Link: string) => {
        const { pathName } = useLocation()

        if (Link === pathName) return true

        return false
    }

    return { isCurrentPage }
}