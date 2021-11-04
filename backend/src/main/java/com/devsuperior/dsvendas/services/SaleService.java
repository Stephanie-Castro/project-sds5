package com.devsuperior.dsvendas.services;

import com.devsuperior.dsvendas.dto.SaleDTO;
import com.devsuperior.dsvendas.entities.Sale;
import com.devsuperior.dsvendas.repositories.SaleRepository;
import com.devsuperior.dsvendas.repositories.SellerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class SaleService {

    @Autowired
    private SaleRepository saleRepository;

    @Autowired
    private SellerRepository sellerRepository;

    /*
    //O @Autowired faz o código comentado abaixo
    public SaleService(SaleRepository saleRepository) {
        this.saleRepository = saleRepository;
    }
     */

    /*
        @Transactional garante que a interação com o BD seja feita aqui no service.
        E o (readOnly = true) é porque como a operação abaixo é só de leitura, não é preciso
        fazer escrita no BD.
     */
    @Transactional(readOnly = true)
    public Page<SaleDTO> findAll(Pageable pageable) {
        sellerRepository.findAll();
        Page<Sale> result =  saleRepository.findAll(pageable);
        return result.map(x -> new SaleDTO(x));
    }
}
