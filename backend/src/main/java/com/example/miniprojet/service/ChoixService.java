package com.example.miniprojet.service;

import com.example.miniprojet.model.Choix;
import com.example.miniprojet.model.ChoixPK;
import com.example.miniprojet.repository.ChoixRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class ChoixService {
    @Autowired
    ChoixRepository choixRepository;

    public Choix addChoix(Choix choix){
        return choixRepository.save(choix);
    }
    public void deleteChoix(ChoixPK ch){
        choixRepository.deleteById(ch);
    }
    public Choix updateChoix(ChoixPK id, Choix updatedChoix) {
        Optional<Choix> optionalChoix = choixRepository.findById(id);

        if (optionalChoix.isPresent()) {
            Choix existingChoix = optionalChoix.get();

            // Update fields
            if (updatedChoix.getOrdreChoix() != null) {
                existingChoix.setOrdreChoix(updatedChoix.getOrdreChoix());
            }

            // Save the updated entity
            return choixRepository.save(existingChoix);
        } else {
            throw new RuntimeException("Choix with ID " + id + " not found.");
        }
    }
    @Transactional
    public void deleteByNumEAndNumSpec(Long numE, Long numSpec) {
        choixRepository.deleteByNumEAndNumSpec(numE, numSpec);
    }


}
