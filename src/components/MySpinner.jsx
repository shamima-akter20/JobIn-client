import { Blocks } from "react-loader-spinner";


export default function MySpinner() {
  return (
    <div className="my-56 flex justify-center text-center items-center">
    <Blocks
      visible={true}
      height="80"
      width="80"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
    />
  </div>
  )
}
