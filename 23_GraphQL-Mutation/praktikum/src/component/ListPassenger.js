import ListItem from './ListItem';
import Loading from './Loading';
const ListPassenger = props => {
    if (props.loading) {
        return <Loading />
    }

    if(props.error){
        return null
    }

    return (
        <div>
            <table cellPadding="5px" cellSpacing="0" style={{ margin: "auto" }}>
                <thead bgcolor="red">
                    <td>Nama</td>
                    <td>Umur</td>
                    <td>Jenis Kelamin</td>
                    <td bgcolor="white" className="removeBorder"></td>
                </thead>
                {props.data?.passenger_pasengerList.map(item => (
                    <ListItem
                        key={item.id}
                        data={item}
                        hapusPengunjung={props.hapusPengunjung}
                    />
                ))}
            </table>
        </div>
    )
}

export default ListPassenger;