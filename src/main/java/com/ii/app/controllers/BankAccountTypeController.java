package com.ii.app.controllers;

import com.ii.app.dto.out.BankAccTypeOut;
import com.ii.app.models.BankAccType;
import com.ii.app.services.interfaces.BankAccTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping ("/api/bankaccounttypes")
public class BankAccountTypeController
{
        private final BankAccTypeService bankAccTypeService;

        @Autowired
        public BankAccountTypeController ( BankAccTypeService bankAccTypeService )
        {
                this.bankAccTypeService = bankAccTypeService;
        }

        @GetMapping
        public List<BankAccTypeOut> findAll ()
        {
                return bankAccTypeService.findAll();
        }
}