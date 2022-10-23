import PassengerInput from './PassengerInput';
import ListPassenger from './ListPassenger';
import Header from './Header';
import { useMutation } from "@apollo/client";
import { deletePassengerById, insertPassengerById } from "../graphql/mutation";
import { getAllPassenger } from '../graphql/query'
import { useSubscriptionMutation } from './hooks/useSubscriptionMutation';

const Home = () => {
    const {dataSubscription, loadingSubscription, errorSubscription } = useSubscriptionMutation()
    const [deletePassenger, { loading: loadingDelete, error: errorDelete }] = useMutation(deletePassengerById, {
        refetchQueries: [getAllPassenger]
    })
    const [insertPassenger, { loading: loadingInsert, error: errorInsert }] = useMutation(insertPassengerById, {
        refetchQueries: [getAllPassenger]
    })
    
    const hapusPengunjung = (idx) => {
        deletePassenger({
            variables: {id : idx}
        })
    }
    
    const tambahPengunjung = (newData) => {
        insertPassenger({
            variables: newData
        })
    };
        return (
            <div>
                <Header/>
                <ListPassenger 
                    data={dataSubscription}
                    loading={loadingSubscription || loadingDelete || loadingInsert}
                    error={errorSubscription || errorDelete || errorInsert}
                    hapusPengunjung={hapusPengunjung}
                />
                <PassengerInput
                    tambahPengunjung={tambahPengunjung}
                />
            </div>
        )
}

export default Home;