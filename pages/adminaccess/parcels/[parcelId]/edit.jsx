import CreateUpdateViewCourier from "@/components/CreateUpdateViewCourier";
import { Fragment, useEffect, useState } from "react"
import { ref, onValue} from "firebase/database";
import { database } from "@/config/firebase";


const EditCourierPage = () => {
    const [isLoading, setIsLoading ] = useState(true)
    const [courier, setCourier] = useState({});

    const getParcel = (parcelId) => {
        const dataReference = ref(database, 'parcels/' + parcelId)
        onValue(dataReference, (snapshot) => {
            setCourier(snapshot.val())
            setIsLoading(false)
          });
          return 
    }
    useEffect(()=>{
        if(isLoading){
            const url = window.location.pathname.split("/");
            const formatUrl = url.slice(url.length - 2, -1)
            getParcel(formatUrl[0])
        }
    }, [isLoading])
    return (
        <Fragment>
             {(!isLoading && courier) &&<CreateUpdateViewCourier page="edit" courier={courier} edit={true} />}
        </Fragment>
    )
}

export default EditCourierPage