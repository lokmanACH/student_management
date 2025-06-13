package com.example.miniprojet.controller;

import com.example.miniprojet.model.Choix;
import com.example.miniprojet.model.ChoixPK;
import com.example.miniprojet.repository.ChoixRepository;
import com.example.miniprojet.service.ChoixService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/choice")
public class ChoixController {
    @Autowired
    ChoixService choixService;
    @Autowired
    ChoixRepository choixRepository;

    @PostMapping("/addAll")
    public String addChoices(@RequestBody List<Choix> choices){
        for (Choix choice : choices){
            choixService.addChoix(choice);
        }
        return "New Choices are added";
    }

//    @PutMapping("/updateAll")
//    public String addChoices(@RequestBody List<Choix> choices){
//        for (Choix choice : choices){
//            choixService.addChoix(choice);
//        }
//        return "New Choices are added";
//    }
    @PutMapping("/updateAll")
    public String updateChoices(@RequestBody List<Choix> choices) {
        for (Choix choice : choices) {
            ChoixPK id = new ChoixPK(choice.getNumE(), choice.getNumSpec()); 
            choixService.updateChoix(id, choice); 
        }
        return "Choices updated successfully!";
    }
    @DeleteMapping("/deleteAll")
    public String deleteChoice(@RequestBody List<ChoixPK> choixPKs) {
        for (ChoixPK choixPK : choixPKs){
            choixService.deleteByNumEAndNumSpec(choixPK.getNumE(), choixPK.getNumSpec());
        }
        return "Choice deleted successfully!";
    }



}
