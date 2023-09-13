package br.com.back.controle;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import br.com.back.dao.PadariaDAO;
import br.com.back.modelo.PadariaModelo;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
public class PadariaControle {
    @Autowired
    PadariaDAO padariaDAO;

    @GetMapping
    public Iterable<PadariaModelo> listar(){
        return padariaDAO.findAll();
    }

    @PostMapping
    public ResponseEntity<?> cadastrar(@RequestBody PadariaModelo padariaModelo){
        return new ResponseEntity<PadariaModelo>(padariaDAO.save(padariaModelo), HttpStatus.CREATED);   
    }

    @PutMapping
    public ResponseEntity<?> alterar(@RequestBody PadariaModelo padariaModelo){
        return new ResponseEntity<PadariaModelo>(padariaDAO.save(padariaModelo), HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/{id}")
    public void remover(@PathVariable Integer id){
        padariaDAO.deleteById(id);
    }
}
