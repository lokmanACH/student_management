package com.example.miniprojet.model;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;

import java.util.List;

@Entity
public class Etudiant {

    @Id
    @Column(name = "num_e")
    private Long numE; // Use Long instead of Integer for the ID

    @Column(name = "nom")
    private String nom;

    @Column(name = "prenom")
    private String prenom;

    @Column(name = "moy_s1")
    private Double moyS1;

    @Column(name = "moy_s2")
    private Double moyS2;

    @Column(name = "moy_s3")
    private Double moyS3;

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPrenom() {
        return prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public Double getMoyS1() {
        return moyS1;
    }

    public void setMoyS1(Double moyS1) {
        this.moyS1 = moyS1;
    }

    public Double getMoyS2() {
        return moyS2;
    }

    public void setMoyS2(Double moyS2) {
        this.moyS2 = moyS2;
    }

    public Double getMoyS3() {
        return moyS3;
    }

    public void setMoyS3(Double moyS3) {
        this.moyS3 = moyS3;
    }

    public Double getMoyS4() {
        return moyS4;
    }

    public void setMoyS4(Double moyS4) {
        this.moyS4 = moyS4;
    }

    @Column(name = "moy_s4")
    private Double moyS4;
    @Transient // Not stored in the database
    private Double moyGeneral;

    public Long getNumE() {
        return numE;
    }

    public void setNumE(Long numE) {
        this.numE = numE;
    }

    public List<Choix> getChoices() {
        return choices;
    }

    public void setChoices(List<Choix> choices) {
        this.choices = choices;
    }

    @OneToMany(mappedBy = "etudiant", cascade = CascadeType.ALL, orphanRemoval = true,fetch = FetchType.EAGER)
    @JsonManagedReference
    private List<Choix> choices;



    public Double getMoyGeneral() {
        if (moyS1 != null && moyS2 != null && moyS3 != null && moyS4 != null) {
            moyGeneral = (moyS1 + moyS2 + moyS3 + moyS4) / 4;
            moyGeneral = Math.round(moyGeneral * 100.0) / 100.0;
        }
        return moyGeneral;
    }


    public void setMoyGeneral(Double moyGeneral) {
        this.moyGeneral = moyGeneral;
    }
    public Etudiant() {}

}
