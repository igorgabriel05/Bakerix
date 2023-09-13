package br.com.back.dao;

import org.springframework.data.repository.CrudRepository;

import br.com.back.modelo.PadariaModelo;

public interface PadariaDAO extends CrudRepository<PadariaModelo, Integer> {
    
}
