package com.example.miniprojet.controller;

import com.example.miniprojet.model.Etudiant;
import com.example.miniprojet.model.Specialite;
import com.example.miniprojet.service.SpecialiteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/speciality")
public class SpecialiteController {
    @Autowired
    SpecialiteService specialiteService;
    @PostMapping("/add")
    public String add(@RequestBody Specialite specialite) {
        specialiteService.addSpecialite(specialite);
        return "New speciality is added";
    }
    @PutMapping("/{id}/update")
    public String update(@PathVariable Long id, @RequestBody Specialite specialite) {
        try {
            Specialite updateSpecialite = specialiteService.updateSpecialite(id, specialite);
            return "Speciality with ID " + id + " has been successfully updated.";
        } catch (RuntimeException e) {
            return "Error: Speciality with ID " + id + " not found.";
        } catch (Exception e) {
            return "An unexpected error occurred: " + e.getMessage();
        }
    }
    @DeleteMapping("/{id}/delete")
    public String delete(@PathVariable Long id){
        specialiteService.deleteSpecialite(id);
        return "Speciality with ID " + id + " has been successfully deleted.";
    }
    @GetMapping("/{id}")
    public Specialite get(@PathVariable Long id){
        return specialiteService.getSpecialite(id);
    }
    @GetMapping("/all")
    public List<Specialite> getAll() {
        return specialiteService.getAll();
    }

    @GetMapping("/search")
    public List<Specialite> getByKey(@RequestParam("keyword") String keyword){
        return specialiteService.searchSpecialite(keyword);
    }
}
