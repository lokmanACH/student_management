package com.example.miniprojet.model;
import jakarta.persistence.Embeddable;
import java.io.Serializable;
import java.util.Objects;

@Embeddable
public class ChoixPK implements Serializable {

    private Long numE;
    private Long numSpec;

    public ChoixPK() {}

    public ChoixPK(Long numE, Long numSpec) {
        this.numE = numE;
        this.numSpec = numSpec;
    }
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
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ChoixPK that = (ChoixPK) o;
        return numE.equals(that.numE) && numSpec.equals(that.numSpec);
    }

    @Override
    public int hashCode() {
        return Objects.hash(numE, numSpec);
    }
}

