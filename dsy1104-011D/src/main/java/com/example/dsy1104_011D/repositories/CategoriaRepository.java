package com.example.dsy1104_011D.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.dsy1104_011D.models.entities.Categoria;

public interface CategoriaRepository extends  JpaRepository<Categoria,Integer>{
    
}
