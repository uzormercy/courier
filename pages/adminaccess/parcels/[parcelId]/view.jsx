import CreateUpdateViewCourier from "@/components/CreateUpdateViewCourier";
import { Fragment, useEffect, useState } from "react"
import { ref, onValue} from "firebase/database";
import { database } from "@/config/firebase";

export const getServerSideProps = async  ({query}) => {
    const dataReference = ref(database, 'parcels/' + query.parcelId)
    let courier;
    onValue(dataReference, (snapshot) => {
        courier = snapshot.val();
      });
    return {
        props: {
            courier: courier || null
        }
    }
}

const ViewCourierPage = ({courier}) => {
    const [isLoading, setIsLoading ] = useState(true)
    useEffect(()=>{
        if(courier) {
            setIsLoading(false)
        }
    }, [courier])
    return (
        <Fragment>
            {!isLoading && <CreateUpdateViewCourier page="view" courier={courier} view={true} /> }
        </Fragment>
    )
}

export default ViewCourierPage