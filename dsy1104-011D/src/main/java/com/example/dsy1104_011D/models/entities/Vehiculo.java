package com.example.dsy1104_011D.models.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Entity 
@Data 
@Table(name = "vehiculo")
public class Vehiculo {
    @Id 
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_vehiculo;

    @Column(nullable = false)
    private String patente;
    
    @Column(nullable = false)
    private String color;

    @ManyToOne 
    @JoinColumn(name = "id_categoria", nullable = false)
    private Categoria categoria;
}
