import { useSubscription } from '@apollo/client'
import { passengerSubscription } from '../../graphql/subscription'

export const useSubscriptionMutation = () => {
    const {
        data: dataSubscription,
        loading: loadingSubscription,
        error: errorSubscription
    } = useSubscription(passengerSubscription)
    return {
        dataSubscription,
        loadingSubscription,
        errorSubscription
    }
}
