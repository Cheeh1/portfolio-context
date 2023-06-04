import { spinner } from "../assets"

const Spinner = () => {
    return (
        <>
            <div className="my-48 mx-96 bg-gray-900">
                <img src={spinner} alt="loader" />
            </div>
        </>
    )
}

export default Spinner