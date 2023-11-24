// Importa React al principio del archivo si aún no está importado
import React from 'react';

export function Formulario() {
  return (
    <>
      <form>
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="mb-3">
              <label className="form-label">Usuario</label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="mb-3">
              <label className="form-label">Teléfono</label>
              <input type="text" className="form-control" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <button type="button" className="btn btn-dark">Reservar</button>
          </div>
        </div>
      </form>
    </>
  );
}
