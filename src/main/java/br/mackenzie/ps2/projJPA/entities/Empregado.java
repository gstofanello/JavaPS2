//Gabriel Sanches Tofanello 42251631
//Rodrigo Pampolin Mendes   42230403
package br.mackenzie.ps2.ExampleJpa.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Empregado {
    @Id
    private int id;
    private String nome;
    private String cargo;
    private double salario;
}
