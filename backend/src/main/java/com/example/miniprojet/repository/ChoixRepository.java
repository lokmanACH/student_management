package com.example.miniprojet.repository;

import com.example.miniprojet.model.Choix;
import com.example.miniprojet.model.ChoixPK;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ChoixRepository extends JpaRepository<Choix, ChoixPK> {

    @Modifying
    @Transactional
    @Query("DELETE FROM Choix c WHERE c.numE = :numE AND c.numSpec = :numSpec")
    void deleteByNumEAndNumSpec(@Param("numE") Long numE, @Param("numSpec") Long numSpec);
}
