import React from "react";
import "../css/StylePerfil.css";

export const Perfil = () => {
  return (
    <>
      <div className="container rounded bg-white mt-5 mb-5">
        <div className="row">
          <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                className="rounded-circle mt-5"
                width="150px"
                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
              />
              <span className="font-weight-bold">Uggla</span>
              <span className="text-black-50">edogaru@mail.com.my</span>
              <span> </span>
            </div>
          </div>
          <div className="col-md-5 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Configurar Perfil</h4>
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                  <label className="labels">Nombre</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre"
                    value=""
                  />
                </div>
                <div className="col-md-6">
                  <label className="labels">Apellido</label>
                  <input
                    type="text"
                    className="form-control"
                    value=""
                    placeholder="Apellido"
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <label className="labels">Numero de celular</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Ingrese numero de celular"
                    value=""
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">Ingrese direccion 1</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Ingrese direccion 1"
                    value=""
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">Ingrese direccion 2</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Ingrese direccion 2"
                    value=""
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">Codigo Postal</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Codigo Postal"
                    value=""
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">Comuna</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Comuna"
                    value=""
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">Ciudad</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Ciudad"
                    value=""
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">Correo electronico </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Correo electronico"
                    value=""
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">Estilo de Tatuajes</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Estilo de tatuaje"
                    value=""
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6">
                  <label className="labels">Pais</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Pais"
                    value=""
                  />
                </div>
                <div className="col-md-6">
                  <label className="labels">Region</label>
                  <input
                    type="text"
                    className="form-control"
                    value=""
                    placeholder="Region"
                  />
                </div>
              </div>
              <div className="mt-5 text-center">
                <button
                  className="btn btn-primary profile-button"
                  type="button"
                >
                  Guardar Perfil
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center experience">
                <span>Sobre ti</span>
                <span className="border px-3 p-1 add-experience">
                  <i className="fa fa-plus"></i>&nbsp;Publico
                </span>
              </div>
              <br />
              <div className="col-md-12">
                <label className="labels">Experiencia Tatuando </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="experiencia"
                  value=""
                />
              </div>{" "}
              <br />
              <div className="col-md-12">
                <label className="labels">Detalles Addicionales</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Detalles addicionales"
                  value=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
