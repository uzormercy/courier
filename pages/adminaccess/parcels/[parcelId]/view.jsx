import CreateUpdateViewCourier from "@/components/CreateUpdateViewCourier";
import { Fragment } from "react"

export const getServerSideProps = async  ({query}) => {
    console.log({query});
    const courier = [];
    return {
        props: {courier}
    }
}

const ViewCourierPage = ({courier}) => {
    return (
        <Fragment>
            <CreateUpdateViewCourier page="view" courier={courier} />
        </Fragment>
    )
}

export default ViewCourierPage