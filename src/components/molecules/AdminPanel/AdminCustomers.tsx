import React, { useEffect, useState } from "react";
import CustomerCard from "../../atoms/CustomerCard/CustomerCard";
import { ICustomers } from "../../../models/Response/ICustomersResponse";
import { hrDispatch, hrUseSelector } from "../../../stores";
import { useDispatch } from "react-redux";
import { fetchCustomerList } from "../../../stores/features/adminPanelSlice";

function AdminCustomers() {
  const customerCardList: ICustomers[] = hrUseSelector(
    (state) => state.adminpanel.customerList
  );
  const dispatch = useDispatch<hrDispatch>();
  
  // refreshCustomerList fonksiyonunu tanımlayın
  const refreshCustomerList = () => {
    dispatch(fetchCustomerList()); // Bu fonksiyon customer listesini tekrar yükleyecek
  };

  useEffect(() => {
    dispatch(fetchCustomerList()); // İlk yükleme
  }, [dispatch]);

  return (
    <>
      <div className="row mt-4">
        <div className="col-3">
          <p style={{ fontSize: "25px", fontWeight: "bold" }}>Müşteriler</p>
        </div>
        <div className="col-5"></div>
        <div className="col-4 d-flex">
          <input
            className="mr-sm-2 me-2 rounded-3 border border-primary"
            type="search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-primary my-2 my-sm-0 me-3"
            type="submit"
          >
            Arama
          </button>
        </div>
      </div>
      <div className="row mt-5">
        <table className="table align-middle mb-0 bg-white">
          <thead className="bg-light">
            <tr>
              <th>Şirket Bilgisi</th>
              <th>Ödenen Hizmet Bedeli</th>
              <th>Plan</th>
              <th>İşlemler</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(customerCardList) ? (
              customerCardList.map((customer, index) => {
                return (
                  <CustomerCard
                    key={index}
                    companyId={customer.companyId}
                    companyLogo={customer.companyLogo}
                    companyName={customer.companyName}
                    companyMail={customer.companyMail}
                    totalPaymentAmount={customer.totalPaymentAmount}
                    memberShipState={customer.memberShipState}
                    companyAddress={customer.companyAddress}
                    companyTelNo={customer.companyTelNo}
                    companyType={customer.companyType}
                    companyRegion={customer.companyRegion}
                    onRefresh={refreshCustomerList}  
                  />
                );
              })
            ) : (
              <tr>
                <td colSpan={4}>Müşteri bilgileri yüklenemedi.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default AdminCustomers;
