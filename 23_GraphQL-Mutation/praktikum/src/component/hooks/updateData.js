import { useMutation } from "@apollo/client"
import { updatePassengerById } from "../../config/typeDefs"

export const UpdateDataMutation = () => {
    const [updatePassenger] = useMutation(updatePassengerById)
    return {
        updatePassenger
    }
}