import { database } from "@/config/firebase"
import { ref, get, child } from "firebase/database"

const fetchPercel = async (trackingCode) => {
    const databaseReference = ref(database)
    const parcels = await get(child(databaseReference, 'parcels')); 
    const getPercelsValue = Object.values(parcels.val())
    const parcel = getPercelsValue.find((parcel) => parcel.trackingCode === trackingCode);
    return !parcel? false : parcel
}

const handler =  async (req, res) => {
    const { parcelId } = req.query;
    if(req.method === 'GET'){
        const parcel = await fetchPercel(parcelId);
        if(!parcel) return res.status(422).json({status: 422, message: 'Invalid Tracking Code'});
        return res.status(200).json({status: 200, ...parcel})
    }
    return false;
  }
  
export default handler;
