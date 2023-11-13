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

import br.mackenzie.ps2.ExampleJpa.entities.Carro;
import br.mackenzie.ps2.ExampleJpa.repositories.CarroRepository;


@RestController
@RequestMapping("/carros")
public class CarroController {
    @Autowired
    private CarroRepository carros;

    @GetMapping("/{id}")
    public Optional<Carro> getCarro(Carro carro){
        return carros.findById(carro.getId());
    }


    @GetMapping
    public List<Carro> getCarro(
        @RequestParam(name="modelo", required = false) String modelo
     )
     {
        if (modelo == null){
            return carros.findAll();
        }


        return carros.findByModeloContainingIgnoreCase(modelo);
    }
 
    @PostMapping
    public Carro setCarro(@RequestBody Carro carro){
        Optional<Carro> existe = carros.findById(carro.getId());
        if (existe.isPresent()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Carro ja cadastrado");
        }
        return carros.save(carro);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateCarro(@RequestBody Carro carro, @PathVariable Integer id){

        carro.setId(id);

        carros.save(carro);

        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteCarro (@PathVariable Integer id){
        Optional<Carro> existe = carros.findById(id);
        if(existe.isEmpty()){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Carro não existe");
        } 

        carros.deleteById(id);
        return ResponseEntity.ok().build();
    }

}
