package com.example.dsy1104_011D.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.dsy1104_011D.models.entities.Vehiculo;
import com.example.dsy1104_011D.repositories.VehiculoRepository;

@Service 
public class VehiculoService {
    @Autowired 
    private VehiculoRepository vehiculoRepo;

    public List<Vehiculo> obtenerVehiculos(){
        return vehiculoRepo.findAll(); // select * from vehiculo
    }

    

}
