package com.example.miniprojet.dto;

import com.example.miniprojet.model.Etudiant;

import java.util.List;

public class EtudiantWithChoices {
    private Etudiant etudiant;
    private String orientation;

    public Etudiant getEtudiant() {
        return etudiant;
    }

    public void setEtudiant(Etudiant etudiant) {
        this.etudiant = etudiant;
    }

    public String getOrientation() {
        return orientation;
    }

    public void setOrientation(String orientation) {
        this.orientation = orientation;
    }

    public EtudiantWithChoices(Etudiant etudiant) {
        this.etudiant = etudiant;
    }
}
