package com.devsuperior.dsvendas.dto;

import com.devsuperior.dsvendas.entities.Seller;

import java.io.Serializable;

/*
 A implementação do Serializable é uma boa medida
 que vai garantir que os objetos do no caso, SellerDTO,
 possam ser convertidos para bytes...
 O que permite que o objeto possa ser trafegado em rede,
 salvo em arquivos, etc...
 */
public class SellerDTO implements Serializable {

    private Long id;
    private String name;

    public SellerDTO() {
    }

    public SellerDTO(Long id, String name) {
        this.id = id;
        this.name = name;
    }

    public SellerDTO(Seller seller) {
        this.id = seller.getId();
        this.name = seller.getName();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
