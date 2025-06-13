package com.example.miniprojet.service;


import com.example.miniprojet.dto.EtudiantWithChoices;
import com.example.miniprojet.model.Choix;
import com.example.miniprojet.model.Etudiant;
import com.example.miniprojet.model.Specialite;
import com.example.miniprojet.repository.EtudiantRepository;
import com.example.miniprojet.repository.SpecialiteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class EtudiantService {

    @Autowired
    EtudiantRepository etudiantRepository;
    @Autowired
    SpecialiteRepository specialiteRepository;

    public Etudiant addEtudiant(Etudiant etudiant){
        return etudiantRepository.save(etudiant);
    }

    public void deleteEtudiant(Long id){
        etudiantRepository.deleteById(id);
    }
    public Etudiant getEtudiant(Long id){
        return etudiantRepository.findById(id).orElse(null);
    }
    public Etudiant updateEtudiant(Long id, Etudiant upEtudiant){
        Etudiant existingEtudiant = etudiantRepository.findById(id).get();
            if (upEtudiant.getNom() != null){
                existingEtudiant.setNom(upEtudiant.getNom());
            }
            if (upEtudiant.getPrenom() != null){
                existingEtudiant.setPrenom(upEtudiant.getPrenom());
            }
            if(upEtudiant.getMoyS1() != null){
                existingEtudiant.setMoyS1(upEtudiant.getMoyS1());
            }
            if (upEtudiant.getMoyS2() != null){
                existingEtudiant.setMoyS2(upEtudiant.getMoyS2());
            }
            if (upEtudiant.getMoyS3() != null){
                existingEtudiant.setMoyS3(upEtudiant.getMoyS3());
            }
            if (upEtudiant.getMoyS4() != null){
                existingEtudiant.setMoyS4(upEtudiant.getMoyS4());
            }
            return etudiantRepository.save(existingEtudiant);
    }
    public List<Etudiant> getEtudiantsByName(String name){
        return etudiantRepository.getEtudiantsByNom(name);
    }
    public List<Etudiant> getAll(){
        return etudiantRepository.findAll();
    }
    public List<Etudiant> getAllSorted(){
        List<Etudiant> sortedEtudiants = etudiantRepository.findAll().stream()
                .sorted(Comparator.comparingDouble(Etudiant::getMoyGeneral).reversed())
                .toList();
        return sortedEtudiants;
    }
    public List<EtudiantWithChoices> getAllWithOrientation(){
        List<Etudiant> sortedStudents = getAllSorted();
        List<Specialite> specialities = specialiteRepository.findAll();
        Map<Long, Integer> specialityPlaces = new HashMap<>();
        Map<Long, String> specialityNames = new HashMap<>();
        for (Specialite speciality : specialities) {
            specialityPlaces.put(speciality.getNumSpec(), speciality.getNbrPlaces());
            specialityNames.put(speciality.getNumSpec(), speciality.getNomSpec());
        }
        List<EtudiantWithChoices> studentsWithChoices = new ArrayList<>();
        for(Etudiant etudiant : sortedStudents){
            EtudiantWithChoices studentWithChoices = new EtudiantWithChoices(etudiant);
            studentsWithChoices.add(studentWithChoices);
        }
        for (EtudiantWithChoices studentWithChoices : studentsWithChoices) {
            List<Choix> choices = studentWithChoices.getEtudiant().getChoices();
            if (choices == null || choices.isEmpty()) {
                continue;
            }

            choices.sort(Comparator.comparingInt(Choix::getOrdreChoix)); // Sort by order of choice
            for (Choix choice : choices) {
                Long specialityId = choice.getNumSpec();
                Integer availablePlaces = specialityPlaces.get(specialityId);

                if (availablePlaces != null && availablePlaces > 0) {
                    String specialityName = specialityNames.get(specialityId);
                    studentWithChoices.setOrientation(specialityName);
                    specialityPlaces.put(specialityId, availablePlaces - 1);
                    break;
                }
            }
        }

        return studentsWithChoices;
    }

}
