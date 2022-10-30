import { useMutation } from "@apollo/client"
import { updatePassengerById } from "../../graphql/mutation"

export const UpdateDataMutation = () => {
    const [updatePassenger] = useMutation(updatePassengerById)
    return {
        updatePassenger
    }
}