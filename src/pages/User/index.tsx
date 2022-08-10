import React from "react";
import DashboardLayout from "../../Components/Layouts/DashboardLayout";
import { userData } from "../../Components/Layouts/Auth";
import { useEffect, useState } from "react";

interface UserListType {
  id: number;
  phone: number;
  weight: number;
  email: string;
  gender: string;
  firstName: string;
  username: string;
  image: string;
  birthDate: number;
  age: number;
}

const User = () => {
  const [data, setData] = useState<UserListType[]>([]);
  const getUserList = async () => {
    const res = await userData();
    setData(res?.data.users);
  };
  useEffect(() => {
    getUserList();
  }, []);
  return (
    <>
      <DashboardLayout>
        <div className="products">
          <div className="col-md-12">
            <div className="title mb-4">
              <h1>User</h1>
            </div>

            <div className="table-name">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">id</th>
                    <th scope="col">image</th>
                    <th scope="col">firstName</th>
                    <th scope="col">email</th>
                    <th scope="col">gender</th>
                    <th scope="col">age</th>
                    <th scope="col">phone</th>
                    <th scope="col">username</th>
                  </tr>
                </thead>
                <tbody>
                  {data && data.length > 0 ? (
                    data.map((item, i) => (
                      <tr key={i}>
                        <td>{item.id}</td>
                        <td>
                          <img src={item.image} />
                        </td>
                        <td>{item.firstName}</td>
                        <td>{item.email}</td>
                        <td>{item.gender}</td>
                        <td>{item.age}</td>
                        <td>{item.phone}</td>
                        <td>{item.username}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td>No Data Found</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default User;
