import React from 'react';
import logo from '../img/ik-logo2.svg';
import UserInformationHeader from '../components/molecules/UserInformation/UserInformationHeader';
import UserInformationBody from '../components/molecules/UserInformation/UserInformationBody';
import './UserInformationPage.css';  // CSS dosyasını ekleyin

function UserInformationPage() {
  return (
    <div className="full-background">
      
      <div className="container-information p-3  ">
        <div className="row  ">
          <UserInformationHeader />
        </div>

        <div className="row d-flex">
          <UserInformationBody />
        </div>
      </div>
    </div>
  );
}

export default UserInformationPage;