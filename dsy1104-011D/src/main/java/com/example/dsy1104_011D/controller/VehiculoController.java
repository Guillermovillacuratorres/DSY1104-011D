package com.example.dsy1104_011D.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.dsy1104_011D.models.entities.Vehiculo;
import com.example.dsy1104_011D.services.VehiculoService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController 
@RequestMapping("/vehiculo")
public class VehiculoController {

    @Autowired 
    private VehiculoService vehiculoService;

    @GetMapping("")
    public List<Vehiculo> obtenerTodosLosAutos(){
        return vehiculoService.obtenerVehiculos();
    }

  
}
