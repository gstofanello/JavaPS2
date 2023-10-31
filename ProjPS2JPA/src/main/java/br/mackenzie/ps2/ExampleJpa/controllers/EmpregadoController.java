//Gabriel Sanches Tofanello 42251631
//Rodrigo Pampolin Mendes   42230403
package br.mackenzie.ps2.ExampleJpa.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import br.mackenzie.ps2.ExampleJpa.entities.Empregado;
import br.mackenzie.ps2.ExampleJpa.repositories.EmpregadoRepository;

@RestController
@RequestMapping("/empregados")
public class EmpregadoController {
    @Autowired
    private EmpregadoRepository empregados;

    @GetMapping("/{id}")
    public Optional<Empregado> getEmpregado(Empregado Empregado){
        return empregados.findById(Empregado.getId());
    }


    @GetMapping
    public List<Empregado> getEmpregado(
        @RequestParam(name="nome", required = false) String nome
     )
     {
        if (nome == null){
            return empregados.findAll();
        }


        return empregados.findByNomeContainingIgnoreCase(nome);
    }
 
    @PostMapping
    public Empregado setEmpregado(@RequestBody Empregado Empregado){
        Optional<Empregado> existe = empregados.findById(Empregado.getId());
        if (existe.isPresent()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Empregado ja cadastrado");
        }
        return empregados.save(Empregado);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateEmpregado(@RequestBody Empregado Empregado, @PathVariable Integer id){
       

        Empregado.setId(id);

        empregados.save(Empregado);

        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteEmpregado (@PathVariable Integer id){
        Optional<Empregado> existe = empregados.findById(id);
       if(existe.isEmpty()){
             throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Empregado não existe");
        } 
        empregados.deleteById(id);
        return ResponseEntity.ok().build();
    }

}
