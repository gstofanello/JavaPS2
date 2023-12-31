//Gabriel Sanches Tofanello 42251631
//Rodrigo Pampolin Mendes   42230403
package br.mackenzie.ps2.projJPA.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.*;

import br.mackenzie.ps2.projJPA.entities.Carro;

public interface CarroRepository extends JpaRepository<Carro, Integer>{
    public List<Carro> findByModeloContainingIgnoreCase(String carro);
}
