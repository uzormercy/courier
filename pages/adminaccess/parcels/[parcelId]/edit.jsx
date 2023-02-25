import CreateUpdateViewCourier from "@/components/CreateUpdateViewCourier";
import { Fragment } from "react"
import { ref, onValue} from "firebase/database";
import { database } from "@/config/firebase";

export const getServerSideProps = async  ({query}) => {
    const dataReference = ref(database, 'parcels/' + query.parcelId)
    let courier;
    onValue(dataReference, (snapshot) => {
        courier = snapshot.val();
      });
    return {
        props: {courier}
    }
}

const EditCourierPage = ({courier}) => {
    return (
        <Fragment>
            <CreateUpdateViewCourier page="edit" courier={courier} edit={true} />
        </Fragment>
    )
}

export default EditCourierPage