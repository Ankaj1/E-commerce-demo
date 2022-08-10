// import { useEffect, useState } from "react";
// import { listData, userData } from "../../Layouts/Auth";

// interface UserListType {
//   total: number;
// }

const Cards = () => {
  // const [data, setData] = useState<UserListType[]>([]);
  // const getUserList = async () => {
  //   const res = await userData();
  //   setData(res?.data.users);
  // };
  // useEffect(() => {
  //   getUserList();
  // }, []);

  return (
    <>
      <div className="cards pt-3">
        <div className="row">
          <div className="col-md-3">
            {/* {data && data.length > 0 ? (
              data.map((item, i) => (    key={i} */}
            <div className="boxes">
              <h2>Products</h2>
              <p>
                <strong> Total </strong> 100
              </p>
            </div>
            {/* ))
            ) : (
              <>
                <div className="">No Data Found</div>
              </>
            )} */}
          </div>

          <div className="col-md-3">
            {/* {data && data.length > 0 ? (
              data.map((item, i) => (  key={i}*/}
            <div className="boxes">
              <h2>User</h2>
              <p>
                <strong> Total </strong> 100
              </p>
            </div>
            {/* ))
            ) : (
              <>
                <div className="">No Data Found</div>
              </>
            )} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
