import { request } from "./client";

export const obtenerVehiculos = () => request("/vehiculo");
export const buscarAuto = (id) => request(`/vehiculo/${id}`);
export const agregarAuto = (vehiculo) => request("/vehiculo","POST",vehiculo);
export const eliminarAuto = (id) => request(`/vehiculo/${id}`,"DELETE");
export const actualizarAuto = (id, vehiculo) => request(`/vehiculo/${id}`,"PUT",vehiculo);