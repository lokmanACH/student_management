package com.example.miniprojet.controller;


import com.example.miniprojet.dto.EtudiantWithChoices;
import com.example.miniprojet.model.Etudiant;
import com.example.miniprojet.service.EtudiantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/student")
public class EtudiantController {
    @Autowired
    EtudiantService etudiantService;

    @PostMapping("/add")
    public String add(@RequestBody Etudiant student) {
        etudiantService.addEtudiant(student);
        return "New student is added";
    }
    @PutMapping("/{id}/update")
    public String update(@PathVariable Long id, @RequestBody Etudiant etudiant) {
        try {
            Etudiant updatedEtudiant = etudiantService.updateEtudiant(id, etudiant);
            return "Student with ID " + id + " has been successfully updated.";
        } catch (RuntimeException e) {
            return "Error: Student with ID " + id + " not found.";
        } catch (Exception e) {
            return "An unexpected error occurred: " + e.getMessage();
        }
    }
    @DeleteMapping("/{id}/delete")
    public String delete(@PathVariable Long id){
        etudiantService.deleteEtudiant(id);
        return "Student with ID " + id + " has been successfully deleted.";
    }
    @GetMapping("/{id}")
    public Etudiant get(@PathVariable Long id){
        return etudiantService.getEtudiant(id);
    }
    @GetMapping("/search")
    public List<Etudiant> getByName(@RequestParam("keyword") String keyword){
        return etudiantService.getEtudiantsByName(keyword);
    }

    @GetMapping("/all")
    public List<Etudiant> getAll(){
        return etudiantService.getAll();
    }
    @GetMapping("/allSorted")
    public List<Etudiant> getAllSorted(){
        return etudiantService.getAllSorted();
    }
    @GetMapping("/allOrientation")
    public List<EtudiantWithChoices> getAllWithOrientation(){
        return etudiantService.getAllWithOrientation();
    }
}
