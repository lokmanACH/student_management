package com.example.miniprojet.model;
import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

@Entity
@IdClass(ChoixPK.class)
public class Choix {

    @Id
    @Column(name = "num_e")
    private Long numE;

    @Id
    @Column(name = "num_spec")
    private Long numSpec;

    private Integer ordreChoix;
    public Long getNumE() {
        return numE;
    }

    public void setNumE(Long numE) {
        this.numE = numE;
    }

    public Long getNumSpec() {
        return numSpec;
    }

    public void setNumSpec(Long numSpec) {
        this.numSpec = numSpec;
    }

    public Integer getOrdreChoix() {
        return ordreChoix;
    }

    public void setOrdreChoix(Integer ordreChoix) {
        this.ordreChoix = ordreChoix;
    }
    @ManyToOne
    @JoinColumn(name = "num_e", insertable = false, updatable = false) // Foreign key
    @JsonBackReference
    private Etudiant etudiant;

    @ManyToOne
    @JoinColumn(name = "num_spec", insertable = false, updatable = false) // Foreign key
    private Specialite specialite; // New relation

    public Etudiant getEtudiant() {
        return etudiant;
    }

    public void setEtudiant(Etudiant etudiant) {
        this.etudiant = etudiant;
    }

    public Specialite getSpecialite() {
        return specialite;
    }

    public void setSpecialite(Specialite specialite) {
        this.specialite = specialite;
    }
}
