import { ThreeDots } from "react-loader-spinner";

import { LoaderWrapper } from "./Loader.styled";

export const Loader = () => (
  <LoaderWrapper>
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      color="#7e3fb5"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
  </LoaderWrapper>
);

export default Loader;
