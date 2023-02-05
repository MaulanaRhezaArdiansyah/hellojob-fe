import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { OrangeBtn } from "../../../components/OrangeBtn";

export const FormRegistRecruiter = () => {
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    perusahaan: "",
    bidang_perusahaan: "",
    phone: "",
    password: "",
    role: "perekrut",
  });

  const bodyFormData = new FormData();

  bodyFormData.append("name", registerData.name);
  bodyFormData.append("email", registerData.email);
  bodyFormData.append("perusahaan", registerData.perusahaan);
  bodyFormData.append("bidang_perusahaan", registerData.bidang_perusahaan);
  bodyFormData.append("phone", registerData.phone);
  bodyFormData.append("password", registerData.password);
  bodyFormData.append("role", registerData.role);

  const [validate, setValidate] = useState({
    error: false,
    message: "",
  });

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:5000/api/v1/auth/register",
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((result) => {
        // console.log(result.data.data);
        setRegisterData(result.data.data);
        alert(result.data.message);
        navigate("/optionlogin");
      })
      .catch((err) => {
        // console.log(err.response.data);
        setValidate({ error: true, message: err.response.data.message });
      });
  };

  return (
    <form action="" onSubmit={handleRegister} className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <label for="">Nama</label>
        <input
          onChange={(e) => {
            setRegisterData({
              ...registerData,
              name: e.target.value,
            });
          }}
          type="text"
          placeholder="Masukan nama panjang"
          className="py-5 px-3 base-rounded"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label for="">Email</label>
        <input
          onChange={(e) => {
            setRegisterData({
              ...registerData,
              email: e.target.value,
            });
            // console.log(e.target.value);
          }}
          type="email"
          placeholder="Masukan alamat email"
          className="py-5 px-3 base-rounded"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label for="">Perusahaan</label>
        <input
          onChange={(e) => {
            setRegisterData({
              ...registerData,
              perusahaan: e.target.value,
            });
          }}
          type="text"
          placeholder="Masukan nama perusahaan"
          className="py-5 px-3 base-rounded"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label for="">Bidang Perusahaan</label>
        <input
          onChange={(e) => {
            setRegisterData({
              ...registerData,
              bidang_perusahaan: e.target.value,
            });
          }}
          type="text"
          placeholder="Bidang perusahaan Anda
              "
          className="py-5 px-3 base-rounded"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label for="">No. Handphone</label>
        <input
          onChange={(e) => {
            setRegisterData({
              ...registerData,
              phone: e.target.value,
            });
          }}
          type="phone"
          placeholder="Masukan no handphone"
          className="py-5 px-3 base-rounded"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label for="">Kata Sandi</label>
        <input
          onChange={(e) => {
            setRegisterData({
              ...registerData,
              password: e.target.value,
            });
          }}
          type="password"
          placeholder="Masukan kata sandi"
          className="py-5 px-3 base-rounded"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label for="">Konfirmasi kata sandi</label>
        <input
          type="password"
          placeholder="Masukan kata sandi"
          className="py-5 px-3 base-rounded"
        />
      </div>
      {validate.error && (
        <div className="error-message bg-red-200 text-red-500 p-5 rounded-lg font-bold italic">
          {validate.message}
        </div>
      )}
      {/* <Link to="/optionlogin"> */}
      <OrangeBtn text="Daftar" />
      {/* </Link> */}
    </form>
  );
};
